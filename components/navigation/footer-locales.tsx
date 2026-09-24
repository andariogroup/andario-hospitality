'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/analytics/events';
import { alternateHref, LOCALES, type Locale } from '@/lib/i18n/routes';

export function FooterLocales({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className="flex items-center gap-2 text-sm">
      {LOCALES.map((code, index) => {
        const active = code === locale;
        return (
          <span key={code} className="inline-flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden="true" className="text-white/35">
                |
              </span>
            ) : null}
            <Link
              href={alternateHref(pathname, code)}
              hrefLang={code}
              lang={code}
              aria-current={active ? 'page' : undefined}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center px-1 transition-colors duration-200 ${
                active ? 'font-semibold text-white' : 'text-white/60 hover:text-white'
              }`}
              onClick={() => {
                if (active) return;
                track({ name: 'language_switch', to: code });
                track({ name: 'footer_language_change', to: code });
              }}
            >
              {code.toUpperCase()}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
