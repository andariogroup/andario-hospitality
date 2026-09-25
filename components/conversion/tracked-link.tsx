'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { track, type AnalyticsEvent } from '@/lib/analytics/events';
import type { ReactNode } from 'react';

export function TrackedLink({
  href,
  event,
  children,
  variant = 'primary',
  className,
  cue = false,
  extra,
}: {
  href: string;
  event: AnalyticsEvent;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'inverse' | 'ghost';
  className?: string;
  cue?: boolean;
  extra?: AnalyticsEvent;
}) {
  return (
    <Button asChild variant={variant} className={className}>
      <Link
        href={href}
        className="group"
        onClick={() => {
          track(event);
          if (extra) track(extra);
        }}
      >
        {children}
        {cue ? (
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        ) : null}
      </Link>
    </Button>
  );
}
