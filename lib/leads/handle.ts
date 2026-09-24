import { isHoneypotTripped } from '@/lib/contact/schema';
import { clientKey, rateLimit } from '@/lib/contact/rate-limit';
import { deliverLead, payloadTooLarge } from '@/lib/leads/deliver';
import { normalizeLead } from '@/lib/leads/normalize';
import { leadRequestSchema } from '@/lib/leads/schema';

export type LeadResult =
  | { ok: true }
  | {
      ok: false;
      error: 'INVALID_DATA' | 'RATE_LIMITED' | 'SERVER_CONFIGURATION_ERROR' | 'LEAD_DELIVERY_FAILED';
      status: number;
    };

export async function handleLead(request: Request): Promise<LeadResult> {
  let raw = '';
  try {
    raw = await request.text();
  } catch {
    return { ok: false, error: 'INVALID_DATA', status: 400 };
  }
  if (payloadTooLarge(raw)) {
    return { ok: false, error: 'INVALID_DATA', status: 400 };
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return { ok: false, error: 'INVALID_DATA', status: 400 };
  }

  if (isHoneypotTripped(body)) {
    return { ok: true };
  }

  const parsed = leadRequestSchema.safeParse(body);
  if (!parsed.success) {
    return { ok: false, error: 'INVALID_DATA', status: 400 };
  }

  if (!rateLimit(clientKey(request))) {
    return { ok: false, error: 'RATE_LIMITED', status: 429 };
  }

  console.info('[LEADS] Submission received');
  const record = normalizeLead(parsed.data, { referrer: request.headers.get('referer') });
  const delivery = await deliverLead(record);
  if (delivery === 'unconfigured') {
    return { ok: false, error: 'SERVER_CONFIGURATION_ERROR', status: 500 };
  }
  if (delivery === 'failed') {
    return { ok: false, error: 'LEAD_DELIVERY_FAILED', status: 502 };
  }
  return { ok: true };
}
