'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { track, type AnalyticsEvent } from '@/lib/analytics/events';

export function VisibilityEcosystemLink({
  href,
  event,
  className,
  children,
}: {
  href: string;
  event: AnalyticsEvent | null;
  className: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (event) track(event);
      }}
    >
      {children}
    </Link>
  );
}
