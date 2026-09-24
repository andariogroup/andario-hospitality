'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Bed,
  Building,
  Building2,
  CalendarCheck,
  CircleHelp,
  Compass,
  House,
  Landmark,
  ListChecks,
  MessagesSquare,
  Search,
  Store,
  TreePine,
  Trees,
  type LucideIcon,
} from 'lucide-react';
import { useRef, useState, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import type { Dictionary } from '@/content/types';
import { track } from '@/lib/analytics/events';
import { CONTACT_NEEDS, createContactSchema, type ContactNeed, type ContactPayload } from '@/lib/contact/schema';
import { isLeadAccepted } from '@/lib/leads/accept';
import { ACCOMMODATION_TYPES, type AccommodationType, type Locale } from '@/lib/i18n/routes';
import { cn } from '@/lib/utils/cn';

type Copy = Dictionary['contactPage'];

const typeIcons: Record<AccommodationType, LucideIcon> = {
  hostel: Bed,
  'small-hotel': Building2,
  posada: House,
  apartment: Building,
  'apart-hotel': Landmark,
  cabin: TreePine,
  villa: Trees,
  rural: Trees,
  other: CircleHelp,
};

const needIcons: Record<ContactNeed, LucideIcon> = {
  bookings: CalendarCheck,
  web: Building2,
  google: Search,
  otas: Store,
  organize: ListChecks,
  whatsapp: MessagesSquare,
  unsure: Compass,
};

const inputClass =
  'w-full rounded-2xl border border-sand-deep bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus-visible:border-teal aria-invalid:border-danger';

export function ContactForm({ locale, copy }: { locale: Locale; copy: Copy }) {
  const schema = createContactSchema(copy.errors);
  const started = useRef(false);
  const [honeypot, setHoneypot] = useState('');
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<'idle' | 'success' | keyof Copy['result']>('idle');
  const [typeValue, setTypeValue] = useState<ContactPayload['accommodationType'] | ''>('');
  const [needsValue, setNeedsValue] = useState<ContactNeed[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<ContactPayload>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      locale,
      name: '',
      establishment: '',
      location: '',
      accommodationType: undefined as unknown as ContactPayload['accommodationType'],
      needs: [],
      whatsapp: '',
      email: '',
      note: '',
      consent: false,
    },
  });

  function markStart() {
    if (started.current) return;
    started.current = true;
    track({ name: 'contact_form_start' });
  }

  async function continueStep() {
    markStart();
    const valid = await trigger(['name', 'establishment', 'location', 'accommodationType']);
    if (valid) setStep(2);
  }

  function toggleNeed(id: ContactNeed) {
    markStart();
    setNeedsValue((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      setValue('needs', next, { shouldValidate: true, shouldTouch: true });
      return next;
    });
  }

  async function onSubmit(values: ContactPayload) {
    setStatus('idle');
    const needs = [...values.needs].sort().join(',');
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ...values,
          websiteConfirm: honeypot,
          page: `${window.location.pathname}${window.location.search}`,
          submissionId: crypto.randomUUID(),
        }),
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean; error?: string } | null;
      if (isLeadAccepted(response.ok, result)) {
        setStatus('success');
        track({ name: 'contact_form_submit', outcome: 'success' });
        track({
          name: 'contact_form_success',
          needs,
          accommodation_type: values.accommodationType,
          language: values.locale,
        });
        return;
      }
      setStatus(result?.error === 'INVALID_DATA' ? 'invalid' : result?.error === 'RATE_LIMITED' ? 'rate_limited' : 'error');
      track({ name: 'contact_form_submit', outcome: 'error' });
      track({ name: 'contact_form_error' });
    } catch {
      setStatus('error');
      track({ name: 'contact_form_submit', outcome: 'error' });
      track({ name: 'contact_form_error' });
    }
  }

  if (status === 'success') {
    return (
      <p className="rounded-[var(--radius-card)] bg-teal-wash p-6 leading-7 text-ink" role="status">
        {copy.result.success}
      </p>
    );
  }

  const progress = copy.progress.replace('{current}', String(step)).replace('{total}', '2');

  return (
    <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="websiteConfirm">{copy.honeypot}</label>
        <input
          id="websiteConfirm"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-teal">{progress}</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink">{step === 1 ? copy.stepOne : copy.stepTwo}</h2>
      </div>

      {step === 1 ? (
        <>
          <Field label={copy.fields.name} error={errors.name?.message}>
            <input className={inputClass} {...register('name')} onFocus={markStart} autoComplete="name" aria-invalid={Boolean(errors.name)} required />
          </Field>
          <Field label={copy.fields.establishment} error={errors.establishment?.message}>
            <input
              className={inputClass}
              {...register('establishment')}
              onFocus={markStart}
              autoComplete="organization"
              aria-invalid={Boolean(errors.establishment)}
              required
            />
          </Field>
          <Field label={copy.fields.location} error={errors.location?.message}>
            <input
              className={inputClass}
              {...register('location')}
              onFocus={markStart}
              autoComplete="address-level2"
              aria-invalid={Boolean(errors.location)}
              required
            />
          </Field>
          <fieldset>
            <legend className="text-sm font-semibold text-ink">{copy.fields.type}</legend>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {ACCOMMODATION_TYPES.map((id) => {
                const Icon = typeIcons[id];
                const selected = typeValue === id;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => {
                      markStart();
                      setTypeValue(id);
                      setValue('accommodationType', id, { shouldValidate: true, shouldTouch: true });
                    }}
                    className={cardClass(selected)}
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 text-teal" />
                    <span>{copy.types[id]}</span>
                  </button>
                );
              })}
            </div>
            {errors.accommodationType?.message ? <p className="mt-2 text-sm font-medium text-danger">{errors.accommodationType.message}</p> : null}
          </fieldset>
          <Button type="button" onClick={continueStep} className="w-full sm:w-fit">
            {copy.continueLabel}
          </Button>
        </>
      ) : (
        <>
          <fieldset>
            <legend className="text-sm font-semibold text-ink">{copy.fields.needs}</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {CONTACT_NEEDS.map((id) => {
                const Icon = needIcons[id];
                const selected = needsValue.includes(id);
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggleNeed(id)}
                    className={cardClass(selected)}
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-teal" />
                    <span>{copy.needs[id]}</span>
                  </button>
                );
              })}
            </div>
            {errors.needs?.message ? <p className="mt-2 text-sm font-medium text-danger">{errors.needs.message}</p> : null}
          </fieldset>
          <Field label={copy.fields.whatsapp} hint={copy.fields.whatsappHint} error={errors.whatsapp?.message}>
            <input
              className={inputClass}
              {...register('whatsapp')}
              onFocus={markStart}
              autoComplete="tel"
              inputMode="tel"
              aria-invalid={Boolean(errors.whatsapp)}
              required
            />
          </Field>
          <Field label={copy.fields.email} hint={copy.fields.emailHint} error={errors.email?.message}>
            <input className={inputClass} {...register('email')} autoComplete="email" inputMode="email" aria-invalid={Boolean(errors.email)} />
          </Field>
          <Field label={copy.fields.note} hint={copy.fields.noteHint} error={errors.note?.message}>
            <textarea className={`${inputClass} min-h-28`} {...register('note')} aria-invalid={Boolean(errors.note)} />
          </Field>
          <label className="flex items-start gap-3 text-sm text-text">
            <input type="checkbox" className="mt-1" {...register('consent')} />
            <span>{copy.fields.consent}</span>
          </label>
          {errors.consent?.message ? <p className="text-sm font-medium text-danger">{errors.consent.message}</p> : null}
          {status !== 'idle' ? (
            <p className="text-sm text-danger" role="alert">
              {copy.result[status]}
            </p>
          ) : null}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
            <Button type="button" variant="ghost" onClick={() => setStep(1)}>
              {copy.backLabel}
            </Button>
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-fit">
              {isSubmitting ? copy.fields.sending : copy.fields.submit}
            </Button>
          </div>
        </>
      )}
    </form>
  );
}

function cardClass(selected: boolean) {
  return cn(
    'flex min-h-16 items-center gap-3 rounded-2xl border px-3 py-3 text-left text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5',
    selected ? 'border-teal bg-teal-wash shadow-[var(--shadow-soft)]' : 'border-sand-deep bg-white hover:border-teal/40',
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      {children}
      {hint ? <span className="font-medium text-muted">{hint}</span> : null}
      {error ? <span className="font-medium text-danger">{error}</span> : null}
    </label>
  );
}
