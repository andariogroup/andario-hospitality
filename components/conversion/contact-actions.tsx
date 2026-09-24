import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import type { AnalyticsEvent } from '@/lib/analytics/events';
import type { Locale } from '@/lib/i18n/routes';
import type { WhatsAppContext } from '@/lib/whatsapp/url';
import { cn } from '@/lib/utils/cn';

export function ContactActions({
  href,
  primary,
  whatsapp,
  locale,
  whatsappLabel,
  whatsappContext,
  event,
  steps,
  note,
  tone = 'ink',
}: {
  href: string;
  primary: string;
  whatsapp: string | null;
  locale: Locale;
  whatsappLabel: string;
  whatsappContext: WhatsAppContext;
  event: AnalyticsEvent;
  steps: readonly string[];
  note: string;
  tone?: 'ink' | 'sand';
}) {
  const onDark = tone === 'ink';

  return (
    <div>
      <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {steps.map((step, index) => (
          <li
            key={step}
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm',
              onDark ? 'border-white/15 bg-white/10 text-white' : 'border-sand-deep bg-white text-ink',
            )}
          >
            <span className={cn('font-semibold', onDark ? 'text-teal-wash' : 'text-teal')}>
              {String(index + 1).padStart(2, '0')}
            </span>
            {step}
          </li>
        ))}
      </ol>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <TrackedLink href={href} event={event} variant={onDark ? 'inverse' : 'primary'} cue>
          {primary}
        </TrackedLink>
        {whatsapp ? (
          <WhatsAppButton
            phone={whatsapp}
            locale={locale}
            context={whatsappContext}
            label={whatsappLabel}
            variant={onDark ? 'inverse' : 'secondary'}
          />
        ) : null}
      </div>
      <p className={cn('mt-4 max-w-xl text-sm', onDark ? 'text-white/70' : 'text-muted')}>{note}</p>
    </div>
  );
}
