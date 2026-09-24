'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { track } from '@/lib/analytics/events';
import { resolvePathname } from '@/lib/i18n/routes';

const STORAGE_KEY = 'andario-analytics-consent';

function readConsent(): 'unknown' | 'granted' | 'denied' {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'granted' || stored === 'denied' ? stored : 'unknown';
}

function emit(path: string) {
  track({ name: 'page_view', path });
  const resolved = resolvePathname(path);
  if (resolved?.routeId === 'andario-booking-engine') {
    track({ name: 'booking_engine_view' });
  }
  if (resolved?.routeId === 'cases') {
    track({ name: 'case_view' });
  }
}

export function Analytics({
  measurementId,
  copy,
}: {
  measurementId: string | null;
  copy: { title: string; body: string; accept: string; reject: string };
}) {
  const pathname = usePathname();
  const lastPath = useRef('');
  const stored = useSyncExternalStore(
    () => () => undefined,
    readConsent,
    () => 'unknown' as const,
  );
  const [override, setOverride] = useState<'granted' | 'denied' | null>(null);
  const choice = override ?? stored;

  function emitOnce(path: string) {
    const gtag = (window as Window & { gtag?: unknown }).gtag;
    if (typeof gtag !== 'function' || lastPath.current === path) return;
    lastPath.current = path;
    emit(path);
  }

  useEffect(() => {
    if (choice !== 'granted') return;
    emitOnce(pathname);
  }, [choice, pathname]);

  if (!measurementId) return null;

  function choose(next: 'granted' | 'denied') {
    window.localStorage.setItem(STORAGE_KEY, next);
    setOverride(next);
  }

  return (
    <>
      {choice === 'granted' ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive" onLoad={() => emitOnce(window.location.pathname)}>
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config',${JSON.stringify(measurementId)},{send_page_view:false});`}
          </Script>
        </>
      ) : null}
      {choice === 'unknown' ? (
        <div className="fixed inset-x-4 bottom-20 z-40 mx-auto max-w-xl rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 shadow-[var(--shadow-soft)] sm:bottom-6">
          <p className="font-semibold text-ink">{copy.title}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{copy.body}</p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white"
              onClick={() => choose('granted')}
            >
              {copy.accept}
            </button>
            <button
              type="button"
              className="rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink"
              onClick={() => choose('denied')}
            >
              {copy.reject}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
