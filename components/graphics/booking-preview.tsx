import Image from 'next/image';
import type { BookingEngineContent } from '@/content/types';

export function GuestBookingPreview({ page }: { page: BookingEngineContent }) {
  return (
    <Image
      src={page.heroImage}
      alt={page.heroAlt}
      width={1280}
      height={720}
      priority
      className="h-auto w-full"
      sizes="(min-width: 1024px) 52vw, 100vw"
    />
  );
}

export function AdminPreview({ page }: { page: BookingEngineContent }) {
  return (
    <Image
      src={page.adminImage}
      alt={page.adminAlt}
      width={1280}
      height={720}
      className="h-auto w-full"
      sizes="(min-width: 1024px) 46vw, 100vw"
    />
  );
}
