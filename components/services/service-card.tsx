'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { serviceIcons } from '@/components/graphics/icons';
import { track, type AnalyticsEvent } from '@/lib/analytics/events';
import type { ServiceId } from '@/lib/i18n/routes';
import { cn } from '@/lib/utils/cn';

export function ServiceCard({
  href,
  index,
  name,
  subtitle,
  summary,
  cta,
  serviceId,
  problem,
  related,
  chain,
  badge,
  featured = false,
  event,
}: {
  href: string;
  index: string;
  name: string;
  subtitle: string;
  summary: string;
  cta: string;
  serviceId: ServiceId;
  problem?: string;
  related?: string;
  chain?: string;
  badge?: string;
  featured?: boolean;
  event?: AnalyticsEvent;
}) {
  const Icon = serviceIcons[serviceId];

  return (
    <article
      className={cn(
        'group flex h-full animate-dc-fade flex-col rounded-[var(--radius-card)] border bg-white p-6 shadow-[var(--shadow-soft)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_18px_40px_-22px_rgb(16_33_43/0.45)]',
        featured ? 'border-teal ring-1 ring-teal/30' : 'border-sand-deep',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-wash text-teal transition-transform duration-200 group-hover:translate-x-1">
          <Icon aria-hidden="true" className="h-6 w-6" />
        </span>
        <div className="flex flex-col items-end gap-2">
          <p className="text-sm font-semibold text-teal">{index}</p>
          {badge ? (
            <p className="rounded-full bg-teal px-2.5 py-1 text-xs font-semibold text-white">{badge}</p>
          ) : null}
        </div>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{name}</h3>
      <p className="mt-1 text-sm font-medium text-ink-soft">{subtitle}</p>
      {problem ? <p className="mt-4 text-sm font-semibold text-ink">{problem}</p> : null}
      <p className={cn('text-sm leading-6 text-muted', problem ? 'mt-2' : 'mt-4')}>{summary}</p>
      {chain ? <p className="mt-3 text-xs font-semibold tracking-wide text-teal">{chain}</p> : null}
      {related ? <p className="mt-3 flex-1 text-xs leading-5 text-ink-soft">{related}</p> : <span className="flex-1" />}
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark"
        onClick={() => {
          track(event ?? { name: 'service_cta_click', service: serviceId });
          if (serviceId === 'andario-booking-engine') {
            track({ name: 'booking_engine_cta', placement: event ? 'solutions-card' : 'card' });
          }
        }}
      >
        {cta}
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
