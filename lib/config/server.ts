import { optionalHttpUrl, optionalText } from '@/lib/config/env';

/** Server-only. Do not import this module from client components. */
export function contactWebhook(): { url: string | null; secret: string | null } {
  return {
    url: optionalHttpUrl(process.env.CONTACT_FORM_WEBHOOK_URL),
    secret: optionalText(process.env.CONTACT_FORM_WEBHOOK_SECRET),
  };
}

/** Server-only destination for /api/leads. Never expose these values to the browser. */
export function sheetsWebhook(): { url: string | null; token: string | null } {
  return {
    url: optionalHttpUrl(process.env.GOOGLE_SHEETS_WEBHOOK_URL),
    token: optionalText(process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN),
  };
}
