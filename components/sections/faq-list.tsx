'use client';

import { track, type AnalyticsEvent } from '@/lib/analytics/events';
import type { FaqItem } from '@/content/types';

export function FaqList({
  items,
  trackPage,
  openEvent,
}: {
  items: FaqItem[];
  trackPage?: string;
  openEvent?: AnalyticsEvent;
}) {
  return (
    <div className="divide-y divide-sand-deep border-y border-sand-deep">
      {items.map((item) => (
        <details
          key={item.q}
          className="group py-4"
          onToggle={(event) => {
            if (!event.currentTarget.open) return;
            if (openEvent) track(openEvent);
            else if (trackPage) track({ name: 'faq_open', page: trackPage });
          }}
        >
          <summary className="cursor-pointer list-none font-semibold text-ink [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {item.q}
              <span aria-hidden="true" className="text-teal transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
