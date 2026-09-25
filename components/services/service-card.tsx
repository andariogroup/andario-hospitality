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
  index?: string;
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
        'group relative flex h-full flex-col rounded-[var(--radius-card)] border p-7 shadow-[var(--shadow-soft)] transition-[transform,border-color] duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-teal',
        featured ? 'border-teal bg-teal-wash' : 'border-sand-deep bg-white',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={cn('inline-flex h-12 w-12 items-center justify-center rounded-2xl text-teal', featured ? 'bg-white' : 'bg-teal-wash')}>
          <Icon aria-hidden="true" className={cn('h-6 w-6', featured && 'h-7 w-7')} />
        </span>
        {badge ? <p className="rounded-full bg-teal px-2.5 py-1 text-xs font-semibold text-white">{badge}</p> : index ? <p className="text-sm font-semibold text-teal">{index}</p> : null}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{name}</h3>
      <p className="mt-1 text-sm font-medium text-ink-soft">{subtitle}</p>
      {problem ? <p className="mt-4 text-sm font-semibold text-ink">{problem}</p> : null}
      <p className={cn('text-base leading-7 text-muted', problem ? 'mt-2' : 'mt-4')}>{summary}</p>
      {chain ? <p className="mt-3 text-xs font-semibold tracking-wide text-teal">{chain}</p> : null}
      {related ? <p className="mt-3 flex-1 text-xs leading-5 text-ink-soft">{related}</p> : <span className="flex-1" />}
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal after:absolute after:inset-0 hover:text-teal-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
        onClick={() => {
          track(event ?? { name: 'service_cta_click', service: serviceId });
          if (serviceId === 'andario-booking-engine') {
            track({ name: 'booking_engine_cta', placement: event ? 'solutions-card' : 'card' });
          }
        }}
      >
        {cta}
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </article>
  );
}
