import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { BeforeAfter, BookingFlow, EngineHub, ReservationSketch, RoadmapTimeline } from '@/components/graphics/booking-engine';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

function LeadPair({
  locale,
  contactHref,
  primary,
  whatsapp,
  whatsappLabel,
  placement,
}: {
  locale: Locale;
  contactHref: string;
  primary: string;
  whatsapp: string | null;
  whatsappLabel: string;
  placement: string;
}) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <TrackedLink href={contactHref} event={{ name: 'booking_engine_cta', placement }} cue>
        {primary}
      </TrackedLink>
      {whatsapp ? (
        <WhatsAppButton phone={whatsapp} locale={locale} context="booking" label={whatsappLabel} />
      ) : null}
    </div>
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
      <Section tone="sand" className="overflow-hidden">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="text-sm font-semibold tracking-[0.14em] text-teal">ANDARIO BOOKING ENGINE</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{service.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{page.support}</p>
            <LeadPair
              locale={locale}
              contactHref={contactHref}
              primary={page.primaryCta}
              whatsapp={whatsapp}
              whatsappLabel={page.talkCta}
              placement="hero"
            />
            <p className="mt-4 max-w-xl text-sm text-muted">{dict.chrome.ctaNote}</p>
          </div>
          <EngineHub
            caption={page.hubCaption}
            core={page.hubCore}
            channels={page.hubChannels}
            outcomes={page.hubOutcomes}
            availableLabel={page.availableLabel}
            roadmapLabel={page.roadmapLabel}
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{service.problemTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{service.problem}</p>
            <ul className="mt-6 space-y-3">
              {page.problemPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-ink">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <BeforeAfter
            beforeTitle={page.beforeTitle}
            beforeCaption={page.beforeCaption}
            beforeChannels={page.beforeChannels}
            beforeResult={page.beforeResult}
            afterTitle={page.afterTitle}
            afterCaption={page.afterCaption}
            afterChannels={page.afterChannels}
            afterResult={page.afterResult}
          />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.valueTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.valueBody}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {page.valueItems.map((item) => (
              <li key={item} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12 max-w-3xl">
            <h2 className="text-2xl font-semibold text-ink">{page.exactTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.exactBody}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.centralTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.centralIntro}</p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.central.map((item, index) => (
              <li key={item.title} className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-4">
                <p className="text-xs font-semibold tracking-wide text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.featuresTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.featuresIntro}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {page.groups.map((group) => (
              <article key={group.title} className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                <ul className="mt-4 space-y-4">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        <span className="font-semibold text-ink">{page.doesLabel}. </span>
                        {item.does}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        <span className="font-semibold text-ink">{page.whyLabel}. </span>
                        {item.why}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.featuresCta}
            whatsapp={whatsapp}
            whatsappLabel={page.talkCta}
            placement="features"
          />
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
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.channelsTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.channelsBody}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.channels.map((channel) => (
              <li key={channel.name} className="rounded-[var(--radius-card)] border border-sand-deep p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-ink">{channel.name}</h3>
                  <span
                    className={
                      channel.status === 'available'
                        ? 'rounded-full bg-teal-wash px-2 py-0.5 text-xs font-semibold text-teal-dark'
                        : 'rounded-full bg-sand-deep px-2 py-0.5 text-xs font-semibold text-ink'
                    }
                  >
                    {channel.status === 'available' ? page.availableLabel : page.roadmapLabel}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">{channel.note}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.rolesTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.rolesIntro}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {page.roles.map((role) => (
              <article key={role.name} className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <h3 className="text-lg font-semibold text-ink">{role.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{role.role}</p>
                <ul className="mt-4 space-y-2">
                  {role.points.map((point) => (
                    <li key={point} className="text-sm text-ink">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <ol className="mt-8 space-y-3">
            {page.rolesFlow.map((step, index) => (
              <li key={step} className="flex items-center gap-3 text-sm font-semibold text-ink">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal text-xs text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl leading-7 text-muted">{page.rolesClose}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.benefitsTitle}</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {page.benefits.map((group) => (
              <article key={group.audience} className="rounded-[var(--radius-card)] bg-sand p-5">
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

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.otaTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.otaBody}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.whoTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.whoBody}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {page.whoTypes.map((type) => (
              <li key={type} className="rounded-full border border-sand-deep px-3 py-1.5 text-sm text-ink">
                {type}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.trustTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.trustBody}</p>
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
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.evolutionTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.evolutionBody}</p>
            <div className="mt-8">
              <RoadmapTimeline
                items={page.evolution}
                availableLabel={page.availableLabel}
                roadmapLabel={page.roadmapLabel}
              />
            </div>
          </div>
          <div>
            <article className="rounded-[var(--radius-card)] bg-sand p-6">
              <h2 className="text-2xl font-semibold text-ink">{page.pioneerTitle}</h2>
              <p className="mt-4 leading-7 text-muted">{page.pioneerBody}</p>
            </article>
            <h2 className="mt-10 text-2xl font-semibold text-ink">{page.diffTitle}</h2>
            <ul className="mt-4 space-y-4">
              {page.diff.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={service.faqs} trackPage="andario-booking-engine" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.startTitle}</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {page.startSteps.map((step, index) => (
              <li key={step.title} className="rounded-[var(--radius-card)] bg-sand p-4">
                <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.startCta}
            whatsapp={whatsapp}
            whatsappLabel={page.whatsappCta}
            placement="start"
          />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.finalCta}
            whatsapp={whatsapp}
            whatsappLabel={page.whatsappCta}
            placement="final"
          />
          <p className="mt-4 max-w-xl text-sm text-muted">{dict.chrome.ctaNote}</p>
        </Container>
      </Section>
    </>
  );
}
