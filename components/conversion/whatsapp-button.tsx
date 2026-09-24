'use client';

import { track, type AnalyticsEvent } from '@/lib/analytics/events';
import type { Locale } from '@/lib/i18n/routes';
import type { WhatsAppContext } from '@/lib/whatsapp/url';
import { whatsAppUrl } from '@/lib/whatsapp/url';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

export function WhatsAppButton({
  phone,
  locale,
  context,
  label,
  className = '',
  variant = 'secondary',
  event,
  extra,
}: {
  phone: string;
  locale: Locale;
  context: WhatsAppContext;
  label: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'float' | 'inverse';
  event?: AnalyticsEvent;
  extra?: AnalyticsEvent;
}) {
  const motion = 'transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0';
  const styles = {
    primary: `inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_-14px_rgb(14_124_120/0.95)] hover:bg-teal-dark ${motion}`,
    secondary: `inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-[var(--shadow-soft)] hover:bg-sand ${motion}`,
    inverse: `inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 ${motion}`,
    float:
      'animate-cta-beacon fixed right-4 bottom-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white shadow-[var(--shadow-soft)] hover:bg-teal-dark',
  } as const;

  return (
    <a
      href={whatsAppUrl(phone, locale, context)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles[variant]} ${className}`}
      aria-label={label}
      onClick={() => {
        track(event ?? { name: 'whatsapp_click', context });
        if (extra) track(extra);
      }}
    >
      <WhatsAppIcon />
      {variant === 'float' ? <span className="sr-only">{label}</span> : label}
    </a>
  );
}
