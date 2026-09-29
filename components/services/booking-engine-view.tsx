import { Building2, CalendarCheck, Check, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { AdminPreview, GuestBookingPreview } from '@/components/graphics/booking-preview';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

const POINT_ICONS = [Building2, CalendarCheck, SlidersHorizontal];

function Checks({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-ink">
          <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function BookingEngineView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const service = dict.services['andario-booking-engine'];
  const page = dict.bookingEngine;
  const contactHref = href(locale, 'contact');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: service.name, routeId: 'andario-booking-engine' as const },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          locale,
          routeId: 'andario-booking-engine',
        })}
      />
      <Section tone="sand">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">Andario Booking Engine</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{service.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{page.support}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href="#asi-funciona" event={{ name: 'booking_engine_cta', placement: 'hero' }} cue>
                {page.primaryCta}
              </TrackedLink>
              {whatsapp ? (
                <WhatsAppButton phone={whatsapp} locale={locale} context="booking" label={page.talkCta} />
              ) : (
                <TrackedLink href={contactHref} event={{ name: 'booking_engine_cta', placement: 'hero-talk' }} variant="secondary">
                  {page.talkCta}
                </TrackedLink>
              )}
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {page.points.map((point, index) => {
                const Icon = POINT_ICONS[index] ?? Building2;
                return (
                  <li key={point} className="flex items-start gap-2 text-sm text-ink">
                    <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    {point}
                  </li>
                );
              })}
            </ul>
          </div>
          <GuestBookingPreview page={page} />
        </Container>
      </Section>

      <Section id="asi-funciona" className="scroll-mt-28">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.webEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">{page.webTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.webBody}</p>
            <Link href="#proceso" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal">
              {page.webLink} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
            <article className="rounded-[var(--radius-card)] border border-sand-deep bg-sand p-5">
              <h3 className="font-semibold text-ink">{page.presentCard.title}</h3>
              <p className="mt-1 text-sm text-muted">{page.presentCard.role}</p>
              <Checks items={page.presentCard.points} />
            </article>
            <p className="self-center text-center text-2xl font-semibold text-teal" aria-hidden="true">
              +
            </p>
            <article className="rounded-[var(--radius-card)] border border-sand-deep bg-teal-wash p-5">
              <h3 className="font-semibold text-ink">{page.reserveCard.title}</h3>
              <p className="mt-1 text-sm text-muted">{page.reserveCard.role}</p>
              <Checks items={page.reserveCard.points} />
            </article>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.consultEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">{page.consultTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.consultBody}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-[var(--radius-card)] bg-white p-5">
              <h3 className="font-semibold text-ink">{page.beforeTitle}</h3>
              <ul className="mt-4 space-y-3">
                {page.beforeMessages.map((message) => (
                  <li key={message.time} className="flex items-start justify-between gap-3">
                    <p className="text-sm text-ink">{message.text}</p>
                    <p className="shrink-0 text-[11px] text-muted">{message.time}</p>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[var(--radius-card)] bg-teal-wash p-5">
              <h3 className="font-semibold text-ink">{page.afterTitle}</h3>
              <Checks items={page.afterSteps} />
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <AdminPreview page={page} />
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.adminEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">{page.adminTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.adminBody}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {page.adminPoints.map((item) => (
                <li key={item.title} className="rounded-2xl border border-sand-deep px-4 py-3">
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[var(--radius-card)] bg-white p-6">
            <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.directEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">{page.directTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.directBody}</p>
            <Link href={href(locale, 'andario-growth')} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal">
              {page.directLink} <span aria-hidden="true">→</span>
            </Link>
            <p className="mt-8 text-sm font-semibold text-ink">{page.growthTitle}</p>
            <ol className="mt-3 space-y-3">
              {page.growthSteps.map((step) => (
                <li key={step.title}>
                  <p className="text-sm font-semibold text-ink">{step.title}</p>
                  <p className="text-sm text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </article>
          <article className="rounded-[var(--radius-card)] bg-teal-wash p-6">
            <p className="text-sm font-semibold tracking-[0.14em] text-teal-dark uppercase">{page.otaEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">{page.otaTitle}</h2>
            <p className="mt-4 leading-7 text-ink">{page.otaBody}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {page.otaChannels.map((channel) => (
                <li key={channel} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink">
                  {channel}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-white p-4">
              <p className="font-semibold text-ink">{page.otaOwnTitle}</p>
              <p className="mt-1 text-sm text-muted">{page.otaOwnNote}</p>
            </div>
          </article>
        </Container>
      </Section>

      <Section>
        <Container>
          <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.typesEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">{page.typesTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.typesBody}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.types.map((type) => (
              <li key={type.name} className="overflow-hidden rounded-[var(--radius-card)] border border-sand-deep">
                <Image src={type.image} alt={type.alt} width={1152} height={864} className="aspect-[4/3] w-full object-cover" sizes="(min-width: 1024px) 22vw, 50vw" />
                <div className="p-4">
                  <p className="font-semibold text-ink">{type.name}</p>
                  <p className="mt-1 text-sm text-muted">{type.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="proceso" tone="sand" className="scroll-mt-28">
        <Container>
          <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.processEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">{page.processTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.processBody}</p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.processSteps.map((step, index) => (
              <li key={step} className="rounded-[var(--radius-card)] bg-white p-4">
                <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-2 font-semibold text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <Image src="/booking-engine/coast-close.jpg" alt={page.coastAlt} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-ink/60" />
        <Container className="relative">
          <p className="text-sm font-semibold tracking-[0.14em] text-white/80 uppercase">{page.finalEyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-xl leading-7 text-white/85">{page.finalBody}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href={contactHref} event={{ name: 'booking_engine_cta', placement: 'final' }} variant="inverse" cue>
              {page.finalCta}
            </TrackedLink>
            {whatsapp ? (
              <WhatsAppButton phone={whatsapp} locale={locale} context="booking" label={page.talkCta} />
            ) : (
              <TrackedLink href={contactHref} event={{ name: 'booking_engine_cta', placement: 'final-talk' }} variant="secondary">
                {page.talkCta}
              </TrackedLink>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
