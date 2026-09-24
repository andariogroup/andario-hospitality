import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-60',
  {
    variants: {
      variant: {
        primary: 'bg-teal text-white shadow-[0_12px_24px_-14px_rgb(14_124_120/0.95)] hover:bg-teal-dark',
        secondary: 'border border-ink/15 bg-white text-ink shadow-[var(--shadow-soft)] hover:bg-sand',
        inverse: 'bg-white text-ink shadow-[0_12px_24px_-14px_rgb(0_0_0/0.55)] hover:bg-sand',
        ghost: 'bg-transparent text-ink hover:bg-sand',
      },
    },
    defaultVariants: { variant: 'primary' },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}
