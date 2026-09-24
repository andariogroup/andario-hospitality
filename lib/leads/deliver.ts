import { sheetsWebhook } from '@/lib/config/server';
import type { LeadRecord } from '@/lib/leads/normalize';

const MAX_BODY = 20_000;

export function payloadTooLarge(raw: string): boolean {
  return raw.length > MAX_BODY;
}

async function postJson(url: string, body: string): Promise<Response> {
  const init = {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body,
  };
  const first = await fetch(url, { ...init, redirect: 'manual' });
  if (first.status >= 300 && first.status < 400) {
    const location = first.headers.get('location');
    if (!location) return first;
    return fetch(location, { method: 'GET', redirect: 'follow' });
  }
  return first;
}

export async function deliverLead(record: LeadRecord): Promise<'ok' | 'unconfigured' | 'failed'> {
  const webhook = sheetsWebhook();
  if (!webhook.url) {
    console.error('[LEADS] Server configuration missing');
    return 'unconfigured';
  }

  const body = JSON.stringify({
    ...record,
    ...(webhook.token ? { token: webhook.token } : {}),
  });

  try {
    const response = await postJson(webhook.url, body);
    const text = await response.text();
    let parsed: { success?: unknown } | null = null;
    try {
      parsed = JSON.parse(text) as { success?: unknown };
    } catch {
      parsed = null;
    }
    if (!response.ok || parsed?.success !== true) {
      const detail = process.env.NODE_ENV === 'production' ? '' : ` status=${response.status}`;
      console.error(`[LEADS] Google Sheets delivery failed${detail}`);
      return 'failed';
    }
    console.info('[LEADS] Google Sheets delivery successful');
    return 'ok';
  } catch {
    console.error('[LEADS] Google Sheets delivery failed');
    return 'failed';
  }
}
