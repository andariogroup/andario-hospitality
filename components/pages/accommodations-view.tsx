import { NeedStrategy, PropertyEcosystem } from '@/components/graphics/ecosystem';
import { audienceIcons } from '@/components/graphics/icons';
import { BookingHub, FlowSteps, PillarGrid } from '@/components/graphics/solutions';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { AccommodationDigitalMaturity } from '@/components/services/maturity-picker';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { CASES_PUBLISHED, href, SERVICE_IDS, type Locale, type ServiceId } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd, itemListJsonLd } from '@/lib/seo/structured-data';

export function AccommodationsView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const page = dict.accommodationsPage;
  const contact = href(locale, 'contact');
  const serviceHref = (id: ServiceId) => href(locale, id);
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav.accommodations, routeId: 'accommodations' as const },
  ];
  const scenarios = page.scenarios.map((scenario) => ({
    title: scenario.title,
    body: scenario.body,
    cta: scenario.cta,
    placement: scenario.placement,
    services: scenario.services.map((id) => ({
      href: serviceHref(id),
      name: dict.services[id].name,
      service: id,
    })),
  }));

  return (
    <>
      <JsonLd data={faqJsonLd(page.faqs)} />
      <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
      <JsonLd
        data={itemListJsonLd(
          locale,
          SERVICE_IDS.map((id) => ({ name: dict.services[id].name, routeId: id })),
        )}
      />
      <Section tone="sand" className="overflow-hidden">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <p className="mt-6 text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{page.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{page.support}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href={contact} event={{ name: 'accommodations_diagnosis_click', placement: 'hero' }} cue>
                {page.primaryCta}
              </TrackedLink>
              <TrackedLink
                href={href(locale, 'solutions')}
                event={{ name: 'accommodations_service_click', service: 'solutions' }}
                variant="secondary"
              >
                {page.secondaryCta}
              </TrackedLink>
            </div>
            <p className="mt-4 max-w-xl text-sm text-muted">{page.micro}</p>
          </div>
          <PropertyEcosystem center={page.heroCenter} nodes={page.heroNodes} mobile={page.heroMobile} caption={page.heroCaption} />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.identifyTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.identifyBody}</p>
          <p className="mt-8 text-2xl font-semibold tracking-tight text-ink">{page.identifyClose}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.typesTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.typesSupport}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.types.map((type, index) => {
              const Icon = audienceIcons[index];
              return (
                <article
                  key={type.id}
                  className="group flex h-full flex-col rounded-[var(--radius-card)] border border-sand-deep bg-white p-6 shadow-[var(--shadow-soft)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-teal/40"
                >
                  {Icon ? (
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-wash text-teal transition-transform duration-200 group-hover:translate-x-1">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </span>
                  ) : null}
                  <h3 className="mt-5 text-xl font-semibold text-ink">{type.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{type.body}</p>
                  <p className="mt-4 text-xs font-semibold tracking-[0.12em] text-teal uppercase">{page.relatedLabel}</p>
                  <ul className="mt-3 flex flex-1 flex-wrap content-start gap-2">
                    {type.services.map((id) => (
                      <li key={id}>
                        <TrackedLink
                          href={serviceHref(id)}
                          variant="secondary"
                          className="px-3 py-1.5 text-xs shadow-none"
                          event={{ name: 'accommodations_service_click', service: id }}
                        >
                          {page.serviceShort[id]}
                        </TrackedLink>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <TrackedLink
                      href={href(locale, 'solutions')}
                      event={{ name: 'accommodations_type_click', type: type.id }}
                      variant="ghost"
                      className="px-0"
                      cue
                    >
                      {page.exploreCta}
                    </TrackedLink>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink">{page.recognizeTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.recognizeSupport}</p>
          </div>
          <AccommodationDigitalMaturity
            label={page.recognizeTitle}
            contactHref={contact}
            scenarios={scenarios}
            idPrefix="stay-scenario"
            track="accommodations"
          />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink">{page.strategyTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.strategyBody}</p>
          </div>
          <NeedStrategy steps={page.strategyFlow} caption={page.strategyNote} />
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.ownTech}</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-ink">{page.bookingTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.bookingSupport}</p>
            <p className="mt-4 font-semibold text-ink">{page.bookingPhrase}</p>
            <div className="mt-8">
              <TrackedLink
                href={serviceHref('andario-booking-engine')}
                event={{ name: 'accommodations_booking_engine_click', placement: 'feature' }}
                extra={{ name: 'booking_engine_cta', placement: 'accommodations-feature' }}
                cue
              >
                {page.bookingCta}
              </TrackedLink>
            </div>
          </div>
          <div className="grid gap-4">
            <BookingHub
              title="Andario Booking Engine"
              branches={page.bookingBranches}
              result={page.bookingResult}
              note={page.bookingNote}
            />
            <FlowSteps steps={page.bookingSteps} />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.teamTitle}</h2>
          {page.teamBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-3xl leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {page.teamPillars.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <blockquote className="rounded-[var(--radius-card)] border border-teal/30 bg-teal-wash px-6 py-10 sm:px-10">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.stanceTitle}</h2>
            <p className="mt-6 max-w-2xl text-xl font-semibold text-ink">{page.stanceBody}</p>
          </blockquote>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.stagesTitle}</h2>
          <ol className="mt-8 grid gap-5 lg:grid-cols-3">
            {page.stages.map((stage, index) => (
              <li key={stage.title} className="rounded-[var(--radius-card)] bg-white p-6">
                <p className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{stage.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{stage.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {stage.services.map((id) => (
                    <li key={id}>
                      <TrackedLink
                        href={serviceHref(id)}
                        variant="secondary"
                        className="px-3 py-2"
                        event={{ name: 'accommodations_service_click', service: id }}
                      >
                        {page.serviceShort[id]}
                      </TrackedLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-xl font-semibold text-ink">{page.stagesClose}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.processTitle}</h2>
            <p className="mt-6 max-w-3xl text-xl font-semibold text-ink">{page.processClose}</p>
            <div className="mt-8">
              <TrackedLink
                href={href(locale, 'how-we-work')}
                event={{ name: 'accommodations_service_click', service: 'how-we-work' }}
                variant="secondary"
              >
                {page.processCta}
              </TrackedLink>
            </div>
          </div>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {page.process.map((step, index) => (
              <li key={step.title} className="rounded-[var(--radius-card)] bg-sand p-4">
                <p className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.trustTitle}</h2>
          <div className="mt-8">
            <PillarGrid items={page.pillars} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.casesTitle}</h2>
          <p className="mt-4 inline-flex rounded-full bg-sand px-4 py-2 text-sm font-semibold text-ink">{page.casesPlace}</p>
          <p className="mt-4 leading-7 text-muted">{page.casesBody}</p>
          {CASES_PUBLISHED ? (
            <div className="mt-8">
              <TrackedLink href={href(locale, 'cases')} event={{ name: 'case_view' }} variant="secondary">
                {page.casesCta}
              </TrackedLink>
            </div>
          ) : null}
        </Container>
      </Section>

      <Section className="border-t border-sand-deep">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={page.faqs} openEvent={{ name: 'accommodations_faq_open' }} />
          </div>
        </Container>
      </Section>

      <Section tone="sand" className="pb-24">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href={contact} event={{ name: 'accommodations_diagnosis_click', placement: 'final' }} cue>
              {page.finalPrimary}
            </TrackedLink>
            {whatsapp ? (
              <WhatsAppButton
                phone={whatsapp}
                locale={locale}
                context="accommodations"
                label={page.finalSecondary}
                event={{ name: 'accommodations_whatsapp_click' }}
              />
            ) : null}
          </div>
          <p className="mt-4 max-w-xl text-sm text-muted">{page.finalNote}</p>
        </Container>
      </Section>
    </>
  );
}
