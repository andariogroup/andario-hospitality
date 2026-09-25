'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { serviceIcons } from '@/components/graphics/icons';
import { track } from '@/lib/analytics/events';
import type { ServiceId } from '@/lib/i18n/routes';
import { cn } from '@/lib/utils/cn';

export function NeedPathCard({
  href,
  need,
  support,
  solution,
  serviceId,
  badge,
}: {
  href: string;
  need: string;
  support: string;
  solution: string;
  serviceId: ServiceId;
  badge?: string;
}) {
  const Icon = serviceIcons[serviceId];
  const featured = serviceId === 'andario-booking-engine';

  return (
    <Link
      href={href}
      onClick={() => {
        track({ name: 'solutions_service_click', service: serviceId });
        if (featured) track({ name: 'booking_engine_cta', placement: 'solutions-path' });
      }}
      className={cn(
        'group flex h-full flex-col gap-5 rounded-[var(--radius-card)] border bg-white p-6 shadow-[var(--shadow-soft)] transition-[transform,border-color] duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:p-7 lg:flex-row lg:items-center lg:gap-6',
        featured ? 'border-teal/50' : 'border-sand-deep',
      )}
    >
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-2xl bg-teal-wash text-teal transition-colors duration-200 group-hover:text-teal-dark">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-lg font-semibold leading-snug text-ink">{need}</p>
        <p className="mt-2 text-sm leading-6 text-muted">{support}</p>
      </div>
      <span className="flex items-center gap-3 border-t border-sand-deep pt-4 lg:w-48 lg:shrink-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-5">
        <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-teal transition-transform duration-200 motion-safe:group-hover:translate-x-1" />
        <span className="min-w-0">
          <span className="block font-semibold text-teal group-hover:text-teal-dark">{solution}</span>
          {badge ? <span className="mt-1 block text-xs font-semibold tracking-wide text-ink-soft uppercase">{badge}</span> : null}
        </span>
      </span>
    </Link>
  );
}
