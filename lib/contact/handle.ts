import { contactWebhook } from '@/lib/config/server';
import { isHoneypotTripped, serverContactSchema } from '@/lib/contact/schema';
import { clientKey, rateLimit } from '@/lib/contact/rate-limit';

export type ContactResult =
  | { ok: true }
  | { ok: false; code: 'invalid' | 'rate_limited' | 'unavailable' | 'error'; status: number };

export async function handleContact(request: Request): Promise<ContactResult> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return { ok: false, code: 'invalid', status: 400 };
  }

  if (isHoneypotTripped(body)) {
    return { ok: true };
  }

  const parsed = serverContactSchema.safeParse(body);
  if (!parsed.success) {
    return { ok: false, code: 'invalid', status: 400 };
  }

  if (!rateLimit(clientKey(request))) {
    return { ok: false, code: 'rate_limited', status: 429 };
  }

  const webhook = contactWebhook();
  if (!webhook.url) {
    return { ok: false, code: 'unavailable', status: 503 };
  }

  const payload = {
    source: 'andario-hospitality-web',
    submittedAt: new Date().toISOString(),
    lead: parsed.data,
  };

  try {
    const response = await fetch(webhook.url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(webhook.secret ? { authorization: `Bearer ${webhook.secret}` } : {}),
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { ok: false, code: 'error', status: 502 };
    }
  } catch {
    return { ok: false, code: 'error', status: 502 };
  }

  return { ok: true };
}
