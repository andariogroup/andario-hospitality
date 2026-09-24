import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

export function Mark({ className, labeled = true }: { className?: string; labeled?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <Image
        src="/brand/isotipo.svg"
        alt=""
        width={40}
        height={40}
        priority
        unoptimized
        className="h-10 w-10"
      />
      {labeled ? (
        <span className="leading-tight">
          <span className="block text-sm font-semibold tracking-wide text-ink">Andario</span>
          <span className="block text-xs font-medium text-muted">Hospitality</span>
        </span>
      ) : null}
    </span>
  );
}
