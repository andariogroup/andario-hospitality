import { afterEach, describe, expect, it, vi } from 'vitest';
import { en } from '@/content/en';
import { es } from '@/content/es';
import { isLeadAccepted } from '@/lib/leads/accept';
import { handleLead } from '@/lib/leads/handle';
import { normalizeLead } from '@/lib/leads/normalize';
import { leadRequestSchema } from '@/lib/leads/schema';
import { resetRateLimit } from '@/lib/contact/rate-limit';

const lead = {
  locale: 'es',
  name: '  Ana Ruiz  ',
  establishment: '  Casa   Alta ',
  location: 'Valledupar, Colombia',
  accommodationType: 'hostel',
  needs: ['bookings', 'unsure'],
  whatsapp: '+57 300 000 0000',
  email: 'Ana@Example.com',
  note: '',
  consent: true,
  page: '/es/contacto?utm_source=instagram&utm_medium=social&utm_campaign=diagnostico',
  submissionId: '11111111-1111-4111-8111-111111111111',
};

function request(body: unknown, ip = '203.0.113.20') {
  return new Request('http://localhost/api/leads', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-forwarded-for': ip,
      referer: 'https://andario.example/es',
    },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

afterEach(() => {
  resetRateLimit();
  vi.unstubAllGlobals();
  delete process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  delete process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN;
});

describe('lead schema', () => {
  it('accepts a real form payload', () => {
    expect(leadRequestSchema.safeParse(lead).success).toBe(true);
  });

  it('rejects an empty name', () => {
    expect(leadRequestSchema.safeParse({ ...lead, name: ' ' }).success).toBe(false);
  });

  it('rejects an invalid email and allows an empty one', () => {
    expect(leadRequestSchema.safeParse({ ...lead, email: 'not-an-email' }).success).toBe(false);
    expect(leadRequestSchema.safeParse({ ...lead, email: '' }).success).toBe(true);
  });

  it('rejects an unknown accommodation type', () => {
    expect(leadRequestSchema.safeParse({ ...lead, accommodationType: 'resort' }).success).toBe(false);
  });
});

describe('lead normalization', () => {
  it('trims names, keeps the real field ids and reads utm only when present', () => {
    const parsed = leadRequestSchema.parse(lead);
    const record = normalizeLead(parsed, {
      referrer: 'https://andario.example/es',
      now: new Date('2026-09-23T23:15:00.000Z'),
    });
    expect(record.name).toBe('Ana Ruiz');
    expect(record.establishment).toBe('Casa Alta');
    expect(record.email).toBe('ana@example.com');
    expect(record.accommodationType).toBe('hostel');
    expect(record.needs).toEqual(['bookings', 'unsure']);
    expect(record.submittedAt).toBe('2026-09-23T23:15:00.000Z');
    expect(record.utmSource).toBe('instagram');
    expect(record.utmMedium).toBe('social');
    expect(record.utmCampaign).toBe('diagnostico');
    expect(record.page).toBe('/es/contacto');
    expect(normalizeLead({ ...parsed, page: '/es/contacto' }, { referrer: null }).utmSource).toBeNull();
  });
});

describe('lead handler', () => {
  it('reports a configuration error when the webhook url is missing', async () => {
    const result = await handleLead(request(lead));
    expect(result).toEqual({ ok: false, error: 'SERVER_CONFIGURATION_ERROR', status: 500 });
  });

  it('accepts a success response from Apps Script', async () => {
    process.env.GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/example/exec';
    process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN = 'server-token';
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ success: true, message: 'Lead received' }), { status: 200 }),
    );
    vi.stubGlobal('fetch', fetchMock);

    const result = await handleLead(request(lead));
    expect(result).toEqual({ ok: true });
    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const payload = JSON.parse(String(init.body));
    expect(payload.token).toBe('server-token');
    expect(payload.websiteConfirm).toBeUndefined();
    expect(payload.establishment).toBe('Casa Alta');
    expect(isLeadAccepted(true, { success: true })).toBe(true);
  });

  it('hides an Apps Script error', async () => {
    process.env.GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/example/exec';
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response(JSON.stringify({ success: false, message: 'Invalid request' }), { status: 200 })),
    );
    const result = await handleLead(request(lead, '203.0.113.21'));
    expect(result).toEqual({ ok: false, error: 'LEAD_DELIVERY_FAILED', status: 502 });
    expect(isLeadAccepted(true, { success: false })).toBe(false);
  });

  it('hides a non-json response and a network failure', async () => {
    process.env.GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/example/exec';
    const fetchMock = vi.fn().mockResolvedValue(new Response('<html>error</html>', { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);
    expect(await handleLead(request(lead, '203.0.113.22'))).toEqual({
      ok: false,
      error: 'LEAD_DELIVERY_FAILED',
      status: 502,
    });

    fetchMock.mockRejectedValue(new Error('network down'));
    expect(await handleLead(request(lead, '203.0.113.23'))).toEqual({
      ok: false,
      error: 'LEAD_DELIVERY_FAILED',
      status: 502,
    });
    expect(isLeadAccepted(false, null)).toBe(false);
  });

  it('follows the Apps Script redirect and still requires success true', async () => {
    process.env.GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/example/exec';
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response(null, { status: 302, headers: { location: 'https://script.googleusercontent.com/macros/echo' } }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: true, message: 'Lead received' }), { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);
    expect(await handleLead(request(lead, '203.0.113.24'))).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[1]?.[1]).toMatchObject({ method: 'GET' });
  });

  it('does not treat two deliveries as the same stored lead', async () => {
    process.env.GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/example/exec';
    const fetchMock = vi.fn().mockImplementation(() => Promise.resolve(new Response(JSON.stringify({ success: true }), { status: 200 })));
    vi.stubGlobal('fetch', fetchMock);
    expect((await handleLead(request(lead, '203.0.113.25'))).ok).toBe(true);
    expect((await handleLead(request({ ...lead, submissionId: '22222222-2222-4222-8222-222222222222' }, '203.0.113.26'))).ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});

describe('lead confirmation copy', () => {
  it('has a success and a delivery error in Spanish and English', () => {
    expect(es.contactPage.result.success).toMatch(/Hemos recibido tus datos/);
    expect(es.contactPage.result.error).toMatch(/Hubo un problema al enviar/);
    expect(en.contactPage.result.success).toMatch(/We received your information/);
    expect(en.contactPage.result.error).toMatch(/problem sending your information/);
    expect(es.contactPage.fields.sending).toMatch(/Enviando/);
    expect(en.contactPage.fields.sending).toMatch(/Sending/);
  });
});
