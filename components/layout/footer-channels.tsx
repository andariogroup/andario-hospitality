'use client';

import Link from 'next/link';
import { track } from '@/lib/analytics/events';
import type { Locale } from '@/lib/i18n/routes';
import { whatsAppUrl } from '@/lib/whatsapp/url';

const item =
  'inline-flex min-h-11 items-center text-sm text-white/80 transition-colors duration-200 hover:text-white';
const talk =
  'group inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-white transition-colors duration-200 hover:text-white/80';

export function FooterEmail({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} className={item} onClick={() => track({ name: 'footer_email_click' })}>
      {email}
    </a>
  );
}

export function FooterPhone({ digits, label }: { digits: string; label: string }) {
  return (
    <a href={`tel:+${digits}`} className={item} onClick={() => track({ name: 'footer_phone_click' })}>
      {label}
    </a>
  );
}

export function FooterTalk({
  phone,
  locale,
  label,
  whatsappLabel,
  fallbackHref,
}: {
  phone: string | null;
  locale: Locale;
  label: string;
  whatsappLabel: string;
  fallbackHref: string;
}) {
  const cue = (
    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
      →
    </span>
  );

  if (!phone) {
    return (
      <Link href={fallbackHref} className={talk} onClick={() => track({ name: 'footer_cta_click' })}>
        {label}
        {cue}
      </Link>
    );
  }

  return (
    <a
      href={whatsAppUrl(phone, locale, 'contact')}
      target="_blank"
      rel="noopener noreferrer"
      className={talk}
      aria-label={`${label}. ${whatsappLabel}`}
      onClick={() => {
        track({ name: 'footer_whatsapp_click' });
        track({ name: 'whatsapp_click', context: 'footer' });
      }}
    >
      {label}
      {cue}
    </a>
  );
}
