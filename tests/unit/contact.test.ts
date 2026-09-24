import { afterEach, describe, expect, it, vi } from 'vitest';
import { handleContact } from '@/lib/contact/handle';
import { resetRateLimit } from '@/lib/contact/rate-limit';
import { serverContactSchema } from '@/lib/contact/schema';

const lead = {
  locale: 'es',
  name: 'Ana Ruiz',
  establishment: 'Casa Alta',
  location: 'Valledupar, Colombia',
  accommodationType: 'hostel',
  needs: ['bookings', 'unsure'],
  whatsapp: '+57 300 000 0000',
  email: 'ana@example.com',
  note: '',
  consent: true,
};

function request(body: unknown, ip = '203.0.113.10') {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-forwarded-for': ip },
    body: JSON.stringify(body),
  });
}

afterEach(() => {
  resetRateLimit();
  vi.unstubAllGlobals();
  delete process.env.CONTACT_FORM_WEBHOOK_URL;
  delete process.env.CONTACT_FORM_WEBHOOK_SECRET;
});

describe('contact schema', () => {
  it('accepts a complete lead and rejects a missing consent', () => {
    expect(serverContactSchema.safeParse(lead).success).toBe(true);
    expect(serverContactSchema.safeParse({ ...lead, email: '' }).success).toBe(true);
    expect(serverContactSchema.safeParse({ ...lead, consent: false }).success).toBe(false);
    expect(serverContactSchema.safeParse({ ...lead, needs: [] }).success).toBe(false);
    expect(serverContactSchema.safeParse({ ...lead, email: 'not-an-email' }).success).toBe(false);
  });
});

describe('contact handler', () => {
  it('rejects malformed JSON', async () => {
    const response = await handleContact(
      new Request('http://localhost/api/contact', { method: 'POST', body: '{' }),
    );
    expect(response).toEqual({ ok: false, code: 'invalid', status: 400 });
  });

  it('accepts a honeypot submission without calling the webhook', async () => {
    process.env.CONTACT_FORM_WEBHOOK_URL = 'https://hooks.example/lead';
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const response = await handleContact(request({ ...lead, websiteConfirm: 'https://spam.example' }));
    expect(response).toEqual({ ok: true });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('reports the form as unavailable when the webhook is empty', async () => {
    const response = await handleContact(request(lead));
    expect(response).toEqual({ ok: false, code: 'unavailable', status: 503 });
  });

  it('posts a normalized payload and hides webhook failures', async () => {
    process.env.CONTACT_FORM_WEBHOOK_URL = 'https://hooks.example/lead';
    process.env.CONTACT_FORM_WEBHOOK_SECRET = 'secret-value';
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
    vi.stubGlobal('fetch', fetchMock);

    const response = await handleContact(request(lead));
    expect(response).toEqual({ ok: true });
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('https://hooks.example/lead');
    expect((init.headers as Record<string, string>).authorization).toBe('Bearer secret-value');
    const payload = JSON.parse(String(init.body));
    expect(payload.source).toBe('andario-hospitality-web');
    expect(payload.lead.email).toBe('ana@example.com');
    expect(payload.lead.websiteConfirm).toBeUndefined();

    fetchMock.mockResolvedValue(new Response('nope', { status: 500 }));
    const failed = await handleContact(request(lead, '203.0.113.11'));
    expect(failed).toEqual({ ok: false, code: 'error', status: 502 });
  });

  it('rate limits repeated submissions', async () => {
    process.env.CONTACT_FORM_WEBHOOK_URL = 'https://hooks.example/lead';
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 200 })));
    for (let index = 0; index < 5; index += 1) {
      expect((await handleContact(request(lead, '198.51.100.8'))).ok).toBe(true);
    }
    const blocked = await handleContact(request(lead, '198.51.100.8'));
    expect(blocked).toEqual({ ok: false, code: 'rate_limited', status: 429 });
  });
});
