import { Check, Ellipsis, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { BookingEngineContent, Dictionary } from '@/content/types';
import { href, type Locale, type RouteId } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

function Points({ items }: { items: string[] }) {
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

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span className="rounded-full border border-sand-deep bg-white px-3 py-1.5 text-sm font-semibold text-ink">{step}</span>
          {index < steps.length - 1 ? (
            <span aria-hidden="true" className="text-sm font-semibold text-teal">
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function ChannelMark({ id }: { id: BookingEngineContent['channels'][number]['id'] }) {
  if (id === 'web' || id === 'other') {
    const Icon = id === 'web' ? Globe : Ellipsis;
    return <Icon aria-hidden="true" className="h-5 w-5 text-ink" />;
  }
  return (
    <Image
      src={`/icons/channels/${id}.svg`}
      alt=""
      width={20}
      height={20}
      unoptimized
      className="h-5 w-5"
    />
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
        <Container className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">Andario Booking Engine</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{service.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{page.support}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href={contactHref} event={{ name: 'booking_engine_cta', placement: 'hero' }} cue>
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
            <ul className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2">
              {page.capabilities.map((item, index) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink">
                  {index > 0 ? <span aria-hidden="true" className="text-teal">·</span> : null}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={page.heroImage}
            alt={page.heroAlt}
            width={1280}
            height={720}
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="h-auto w-full rounded-[var(--radius-card)]"
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.webTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.webBody}</p>
          </div>
          <div className="grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
            <article className="rounded-[var(--radius-card)] border border-sand-deep bg-sand p-5">
              <h3 className="font-semibold text-ink">{page.presentCard.title}</h3>
              <p className="mt-1 text-sm text-muted">{page.presentCard.role}</p>
              <Points items={page.presentCard.points} />
            </article>
            <p className="self-center text-center text-2xl font-semibold text-teal" aria-hidden="true">
              +
            </p>
            <article className="rounded-[var(--radius-card)] bg-teal-wash p-5">
              <h3 className="font-semibold text-ink">{page.reserveCard.title}</h3>
              <p className="mt-1 text-sm text-muted">{page.reserveCard.role}</p>
              <Points items={page.reserveCard.points} />
            </article>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.7fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.guestTitle}</h2>
            <p className="mt-4 max-w-xl leading-7 text-muted">{page.guestBody}</p>
            <Flow steps={page.guestSteps} />
          </div>
          <Image
            src={page.guestImage}
            alt={page.guestAlt}
            width={864}
            height={1152}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 28vw, 70vw"
            className="mx-auto h-auto w-full max-w-sm rounded-[var(--radius-card)]"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.channelsEyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.channelsTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.channelsBody}</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {page.channels.map((channel) => (
              <li key={channel.id} className="flex items-center gap-2 rounded-full border border-sand-deep bg-sand px-3 py-2 text-sm font-semibold text-ink">
                <ChannelMark id={channel.id} />
                {channel.label}
              </li>
            ))}
          </ul>
          <p aria-hidden="true" className="mt-4 text-center text-teal sm:text-left">
            ↓
          </p>
          <p className="mt-3 inline-flex rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white">{page.channelDestination}</p>
          <p aria-hidden="true" className="mt-4 text-teal">
            ↓
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {page.channelOutcomes.map((item) => (
              <li key={item} className="rounded-full bg-teal-wash px-3 py-1.5 text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink">{page.compareTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.compareBody}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-[var(--radius-card)] bg-white p-5">
              <h3 className="font-semibold text-ink">{page.beforeTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {page.beforePoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-[var(--radius-card)] bg-teal-wash p-5">
              <h3 className="font-semibold text-ink">{page.afterTitle}</h3>
              <Points items={page.afterPoints} />
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <figure>
            <Image
              src={page.adminImage}
              alt={page.adminAlt}
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-auto w-full rounded-[var(--radius-card)]"
            />
            <figcaption className="mt-3 text-xs text-muted">{page.conceptualNote}</figcaption>
          </figure>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.adminTitle}</h2>
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
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.analyticsTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.analyticsBody}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {page.analyticsPoints.map((item) => (
                <li key={item} className="rounded-full bg-white px-3 py-1.5 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <figure>
            <Image
              src={page.analyticsImage}
              alt={page.analyticsAlt}
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-auto w-full rounded-[var(--radius-card)]"
            />
            <figcaption className="mt-3 text-xs text-muted">{page.conceptualNote}</figcaption>
          </figure>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.journeyTitle}</h2>
          <ol className="mt-8 flex flex-col gap-4 lg:grid lg:grid-cols-10 lg:gap-3">
            {page.journeySteps.map((step, index) => (
              <li key={step} className="flex items-baseline gap-3 lg:flex-col lg:gap-2">
                <span className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-sm font-semibold text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.typesTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.typesBody}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {page.types.map((type) => (
              <li key={type.name} className="overflow-hidden rounded-[var(--radius-card)] bg-white">
                <Image
                  src={type.image}
                  alt={type.alt}
                  width={1152}
                  height={864}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 18vw, 50vw"
                  className="aspect-[4/3] w-full object-cover"
                />
                <p className="px-3 py-3 text-sm font-semibold text-ink">{type.name}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.directTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.directBody}</p>
          <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            {page.directParts.map((part, index) => (
              <li key={part} className="flex items-center gap-2">
                <span className="rounded-full border border-sand-deep px-3 py-1.5 text-sm font-semibold text-ink">{part}</span>
                {index < page.directParts.length - 1 ? (
                  <span aria-hidden="true" className="font-semibold text-teal">
                    +
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-muted">{page.directNote}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.ecosystemTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.ecosystemBody}</p>
          <ol className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            {page.ecosystem.map((item, index) => (
              <li key={item.id} className="flex items-center gap-2">
                {item.id === 'andario-booking-engine' ? (
                  <span className="rounded-full bg-teal px-3 py-1.5 text-sm font-semibold text-white">{item.label}</span>
                ) : (
                  <Link href={href(locale, item.id as RouteId)} className="rounded-full border border-sand-deep bg-white px-3 py-1.5 text-sm font-semibold text-ink">
                    {item.label}
                  </Link>
                )}
                {index < page.ecosystem.length - 1 ? (
                  <span aria-hidden="true" className="text-sm font-semibold text-teal">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.processTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.processBody}</p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.processSteps.map((step, index) => (
              <li key={step} className="rounded-[var(--radius-card)] bg-sand p-4">
                <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-2 font-semibold text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <Image
          src={page.finalImage}
          alt={page.finalAlt}
          fill
          loading="lazy"
          decoding="async"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <Container className="relative">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-xl leading-7 text-white/85">{page.finalBody}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href={contactHref} event={{ name: 'booking_engine_cta', placement: 'final' }} variant="inverse" cue>
              {page.finalCta}
            </TrackedLink>
            {whatsapp ? (
              <WhatsAppButton phone={whatsapp} locale={locale} context="booking" label={page.talkCta} variant="inverse" />
            ) : (
              <TrackedLink href={contactHref} event={{ name: 'booking_engine_cta', placement: 'final-talk' }} variant="inverse">
                {page.talkCta}
              </TrackedLink>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
