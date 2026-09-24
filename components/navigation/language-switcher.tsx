'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/analytics/events';
import { alternateHref, type Locale } from '@/lib/i18n/routes';

export function LanguageSwitcher({
  locale,
  label,
  tone = 'light',
}: {
  locale: Locale;
  label: string;
  tone?: 'light' | 'dark';
}) {
  const pathname = usePathname();
  const next = locale === 'es' ? 'en' : 'es';
  const href = alternateHref(pathname, next);

  return (
    <Link
      href={href}
      hrefLang={next}
      lang={next}
      className={`rounded-full px-3 py-2 text-sm font-semibold ${tone === 'dark' ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-sand'}`}
      aria-label={`${label}: ${next.toUpperCase()}`}
      onClick={() => track({ name: 'language_switch', to: next })}
    >
      {next.toUpperCase()}
    </Link>
  );
}
