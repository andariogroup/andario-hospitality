'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { Mark } from '@/components/layout/mark';
import { LanguageSwitcher } from '@/components/navigation/language-switcher';
import { href, type Locale, type RouteId } from '@/lib/i18n/routes';
import { cn } from '@/lib/utils/cn';

type Item = { id: RouteId; label: string };

export function Header({
  locale,
  items,
  cta,
  menuLabel,
  closeLabel,
  languageLabel,
}: {
  locale: Locale;
  items: Item[];
  cta: string;
  menuLabel: string;
  closeLabel: string;
  languageLabel: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>('a, button');
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    function closeOnDesktop() {
      if (media.matches) setOpen(false);
    }
    media.addEventListener('change', closeOnDesktop);
    return () => media.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-sand-deep/80 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-5 lg:h-20 lg:gap-3 lg:px-6 xl:gap-6 xl:px-8">
        <Link href={href(locale, 'home')} className="shrink-0" aria-label="Andario Hospitality">
          <Mark />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1" aria-label="Main">
          {items.map((item) => {
            const path = href(locale, item.id);
            const current = pathname === path;
            return (
              <Link
                key={item.id}
                href={path}
                aria-current={current ? 'page' : undefined}
                className={cn(
                  'rounded-full px-1.5 py-2 text-xs font-semibold whitespace-nowrap xl:px-3 xl:text-sm',
                  current ? 'bg-teal-wash text-teal-dark' : 'text-ink-soft hover:bg-sand hover:text-ink',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <LanguageSwitcher locale={locale} label={languageLabel} />
          <TrackedLink
            href={href(locale, 'contact')}
            event={{ name: 'diagnosis_cta_click', placement: 'header' }}
            className="hidden px-3 py-2 text-xs lg:inline-flex xl:px-5 xl:py-3 xl:text-sm"
          >
            {cta}
          </TrackedLink>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-sand text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={open ? titleId : undefined}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? closeLabel : menuLabel}</span>
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-4 bg-ink" />
              <span className="block h-0.5 w-4 bg-ink" />
              <span className="block h-0.5 w-4 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-ink/40"
            aria-label={closeLabel}
            onClick={() => {
              setOpen(false);
              buttonRef.current?.focus();
            }}
          />
          <div
            ref={panelRef}
            id={titleId}
            role="dialog"
            aria-modal="true"
            aria-label={menuLabel}
            className="absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col bg-sand shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-center justify-between border-b border-sand-deep bg-white px-5 py-4">
              <Mark />
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink"
                onClick={() => {
                  setOpen(false);
                  buttonRef.current?.focus();
                }}
              >
                <span className="sr-only">{closeLabel}</span>
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Main">
              {items.map((item) => {
                const path = href(locale, item.id);
                const current = pathname === path;
                return (
                  <Link
                    key={item.id}
                    href={path}
                    aria-current={current ? 'page' : undefined}
                    className={cn(
                      'block rounded-2xl px-4 py-3 text-lg font-semibold',
                      current ? 'bg-white text-teal-dark' : 'text-ink hover:bg-white',
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-sand-deep bg-white p-5">
              <TrackedLink
                href={href(locale, 'contact')}
                event={{ name: 'diagnosis_cta_click', placement: 'menu' }}
                className="w-full"
              >
                {cta}
              </TrackedLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
