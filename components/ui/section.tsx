import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

const tones = {
  white: 'bg-white text-text',
  sand: 'bg-sand text-text',
  ink: 'bg-ink text-white',
} as const;

export function Section({
  id,
  tone = 'white',
  children,
  className,
}: {
  id?: string;
  tone?: keyof typeof tones;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn('py-16 sm:py-24', tones[tone], className)}>
      {children}
    </section>
  );
}
