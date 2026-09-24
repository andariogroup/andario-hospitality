import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { BookingFlow, ReservationSketch } from '@/components/graphics/booking-engine';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

function Path({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-3">
      {items.map((item, index) => (
        <li key={item.title} className="rounded-[var(--radius-card)] border border-sand-deep bg-white px-4 py-3">
          <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
          <p className="mt-1 font-semibold text-ink">{item.title}</p>
          <p className="text-sm leading-6 text-muted">{item.body}</p>
        </li>
      ))}
    </ol>
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
    { label: dict.nav.solutions, routeId: 'solutions' as const },
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
      <JsonLd data={faqJsonLd(service.faqs)} />
      <Section tone="sand">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="text-sm font-semibold tracking-[0.14em] text-teal">ANDARIO BOOKING ENGINE</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{service.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{page.support}</p>
            <p className="mt-4 max-w-xl font-semibold text-ink">{page.assist}</p>
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
            <p className="mt-4 max-w-xl text-sm text-muted">{page.heroMicro}</p>
          </div>
          <Path items={page.path} />
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.whatTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.whatBody}</p>
            <p className="mt-4 font-semibold text-ink">{page.whatWeb}</p>
            <p className="mt-2 font-semibold text-ink">{page.whatEngine}</p>
          </div>
          <Path items={page.whatFlow} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.contrastTitle}</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[page.webCard, page.engineCard].map((card) => (
              <article key={card.name} className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <h3 className="text-lg font-semibold text-ink">{card.name}</h3>
                <p className="mt-2 font-semibold text-ink">{card.role}</p>
                <ul className="mt-4 space-y-2">
                  {card.points.map((point) => (
                    <li key={point} className="text-sm leading-6 text-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-lg font-semibold text-ink">{page.contrastClose}</p>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.manualTitle}</h2>
            <ol className="mt-6 space-y-3">
              {page.manualSteps.map((step, index) => (
                <li key={step} className="text-sm leading-6 text-ink">
                  <span className="mr-2 font-semibold text-teal">{String(index + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-6 leading-7 text-muted">{page.manualBody}</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.organizedTitle}</h2>
            <ol className="mt-6 space-y-3">
              {page.organizedSteps.map((step, index) => (
                <li key={step} className="text-sm leading-6 text-ink">
                  <span className="mr-2 font-semibold text-teal">{String(index + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-6 leading-7 text-muted">{page.organizedBody}</p>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.exampleTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.exampleIntro}</p>
          <ol className="mt-6 grid gap-2 sm:grid-cols-2">
            {page.exampleSteps.map((step, index) => (
              <li key={step} className="rounded-2xl bg-white px-4 py-3 text-sm text-ink">
                <span className="mr-2 font-semibold text-teal">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-6 leading-7 text-muted">{page.exampleClose}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.useTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {page.uses.map((item) => (
              <article key={item.title} className="rounded-[var(--radius-card)] border border-sand-deep p-5">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                <p className="mt-3 text-sm font-semibold text-ink">
                  <span className="text-teal">{page.resultLabel}. </span>
                  {item.result}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.otaTitle}</h2>
          <p className="mt-4 max-w-2xl font-semibold text-ink">{page.otaLead}</p>
          <p className="mt-3 max-w-2xl leading-7 text-muted">{page.otaBody}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <article className="rounded-[var(--radius-card)] bg-white p-5">
              <h3 className="font-semibold text-ink">{page.otaExternalLabel}</h3>
              <ul className="mt-3 space-y-2">
                {page.otaExternal.map((item) => (
                  <li key={item} className="text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <p className="text-center text-2xl font-semibold text-teal" aria-hidden="true">
              +
            </p>
            <article className="rounded-[var(--radius-card)] bg-white p-5">
              <h3 className="font-semibold text-ink">{page.otaOwnLabel}</h3>
              <ol className="mt-3 space-y-2">
                {page.otaOwn.map((item) => (
                  <li key={item} className="text-sm font-semibold text-ink">
                    {item}
                  </li>
                ))}
              </ol>
            </article>
          </div>
          <p className="mt-6 font-semibold text-ink">{page.otaSync}</p>
          <p className="mt-2 max-w-2xl leading-7 text-muted">{page.otaNote}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.organizeTitle}</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {page.groups.map((group) => (
              <article key={group.title} className="rounded-[var(--radius-card)] border border-sand-deep p-5">
                <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                {group.items.map((item) => (
                  <div key={item.name} className="mt-4">
                    <p className="font-semibold text-ink">{item.name}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      <span className="font-semibold text-ink">{page.doesLabel}. </span>
                      {item.does}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      <span className="font-semibold text-ink">{page.whyLabel}. </span>
                      {item.why}
                    </p>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.dayTitle}</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {page.benefits.map((group) => (
              <article key={group.audience} className="rounded-[var(--radius-card)] bg-white p-5">
                <h3 className="font-semibold text-ink">{group.audience}</h3>
                <ul className="mt-4 space-y-2">
                  {group.points.map((point) => (
                    <li key={point} className="text-sm leading-6 text-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.demandTitle}</h2>
          {page.demand.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          <p className="mt-4 leading-7 text-muted">{page.demandNote}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {page.companions.map((item) => (
              <li key={item.routeId}>
                <TrackedLink href={href(locale, item.routeId)} variant="secondary" event={{ name: 'booking_engine_cta', placement: item.routeId }}>
                  {item.label}
                </TrackedLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.ecosystemTitle}</h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {page.ecosystem.map((item, index) => (
              <li key={item.name} className="rounded-[var(--radius-card)] bg-white p-4">
                <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-semibold text-ink">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl leading-7 text-muted">{page.ecosystemNote}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.flowTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.flowIntro}</p>
          <div className="mt-8">
            <BookingFlow steps={page.flow} />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.reservationTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.reservationNote}</p>
          </div>
          <ReservationSketch
            title={page.reservation[0] ? `${page.reservation[0].label} ${page.reservation[0].value}` : service.name}
            note=""
            rows={page.reservation.slice(1)}
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.todayTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.honesty}</p>
          </div>
          <div className="grid gap-4">
            <article className="rounded-[var(--radius-card)] border border-sand-deep p-5">
              <h3 className="font-semibold text-teal">{page.availableLabel}</h3>
              <ul className="mt-3 space-y-2">
                {page.todayItems.map((item) => (
                  <li key={item} className="text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[var(--radius-card)] bg-sand p-5">
              <h3 className="font-semibold text-ink">{page.roadmapLabel}</h3>
              <ul className="mt-3 space-y-2">
                {page.laterItems.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.trustTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.trustBody}</p>
            <p className="mt-4 leading-7 text-muted">{page.trustHonest}</p>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {page.trustPoints.map((point) => (
              <li key={point} className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink">
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.whoTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.whoBody}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {page.whoTypes.map((type) => (
              <li key={type} className="rounded-full border border-sand-deep px-3 py-1.5 text-sm text-ink">
                {type}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl font-semibold text-ink">{page.whoQuestion}</p>
          <p className="mt-2 max-w-2xl leading-7 text-muted">{page.whoAnswer}</p>
          <p className="mt-6 max-w-3xl leading-7 text-muted">{page.whoNot}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.techTitle}</h2>
          {page.tech.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          <p className="mt-6 text-xl font-semibold text-ink">{page.techMark}</p>
          <p className="mt-10 leading-8 text-ink">{page.pioneer}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.startTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.startNote}</p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.startSteps.map((step, index) => (
              <li key={step.title} className="rounded-[var(--radius-card)] bg-sand p-4">
                <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="border-t border-sand-deep">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={service.faqs} trackPage="andario-booking-engine" />
          </div>
        </Container>
      </Section>

      <Section tone="sand" className="pb-24">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {whatsapp ? (
              <WhatsAppButton phone={whatsapp} locale={locale} context="booking" label={page.talkCta} variant="primary" />
            ) : null}
            <TrackedLink href={contactHref} event={{ name: 'booking_engine_cta', placement: 'final' }} variant={whatsapp ? 'secondary' : 'primary'} cue>
              {page.infoCta}
            </TrackedLink>
          </div>
          <p className="mt-4 max-w-xl text-sm text-muted">{page.finalMicro}</p>
        </Container>
      </Section>
    </>
  );
}
