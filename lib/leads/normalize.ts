import type { LeadRequest } from '@/lib/leads/schema';

export type LeadRecord = {
  submissionId: string;
  submittedAt: string;
  name: string;
  establishment: string;
  location: string;
  accommodationType: LeadRequest['accommodationType'];
  email: string;
  whatsapp: string;
  needs: LeadRequest['needs'];
  note: string;
  consent: true;
  source: 'website';
  language: LeadRequest['locale'];
  page: string | null;
  referrer: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
};

function collapse(value: string): string {
  return value.trim().replace(/\s+/g, ' ');
}

function emptyToNull(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function pagePath(value: string | undefined): { page: string | null; search: URLSearchParams } {
  const trimmed = value?.trim();
  if (!trimmed || !trimmed.startsWith('/') || trimmed.startsWith('//')) {
    return { page: null, search: new URLSearchParams() };
  }
  const [path, query = ''] = trimmed.split('?');
  return { page: path || null, search: new URLSearchParams(query) };
}

function httpReferrer(value: string | null): string | null {
  if (!value) return null;
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

export function normalizeLead(
  input: LeadRequest,
  context: { referrer: string | null; now?: Date; submissionId?: string },
): LeadRecord {
  const { page, search } = pagePath(input.page);
  const providedId = input.submissionId?.trim();
  const submissionId =
    providedId && /^[0-9a-f-]{16,80}$/i.test(providedId) ? providedId : (context.submissionId ?? crypto.randomUUID());

  return {
    submissionId,
    submittedAt: (context.now ?? new Date()).toISOString(),
    name: collapse(input.name),
    establishment: collapse(input.establishment),
    location: collapse(input.location),
    accommodationType: input.accommodationType,
    email: input.email.trim().toLowerCase(),
    whatsapp: input.whatsapp.trim(),
    needs: [...input.needs],
    note: input.note.trim(),
    consent: true,
    source: 'website',
    language: input.locale,
    page,
    referrer: httpReferrer(context.referrer),
    utmSource: emptyToNull(search.get('utm_source')),
    utmMedium: emptyToNull(search.get('utm_medium')),
    utmCampaign: emptyToNull(search.get('utm_campaign')),
  };
}
