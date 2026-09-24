import { audienceIcons } from '@/components/graphics/icons';
import { ShiftPairs } from '@/components/graphics/home';
import { BeforeAfter, BookingHub, FlowSteps, PillarGrid, SolutionsHeroMap } from '@/components/graphics/solutions';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { AccommodationDigitalMaturity } from '@/components/services/maturity-picker';
import { ServiceCard } from '@/components/services/service-card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { CASES_PUBLISHED, href, SERVICE_IDS, type Locale, type ServiceId } from '@/lib/i18n/routes';
import { faqJsonLd, itemListJsonLd } from '@/lib/seo/structured-data';

export function HomePage({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const page = dict.homePage;
  const contact = href(locale, 'contact');
  const serviceHref = (id: ServiceId) => href(locale, id);
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
      <JsonLd
        data={itemListJsonLd(
          locale,
          SERVICE_IDS.map((id) => ({ name: dict.services[id].name, routeId: id })),
        )}
      />

      <Section tone="sand" className="overflow-hidden">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-6xl">{page.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{page.support}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href={contact} event={{ name: 'home_primary_cta_click', placement: 'hero' }} cue>
                {page.primaryCta}
              </TrackedLink>
              <TrackedLink
                href="#recorrido"
                event={{ name: 'home_secondary_cta_click', placement: 'hero' }}
                variant="secondary"
              >
                {page.secondaryCta}
              </TrackedLink>
            </div>
            <p className="mt-4 max-w-xl text-sm text-muted">{page.micro}</p>
          </div>
          <SolutionsHeroMap center={page.heroCenter} nodes={page.heroNodes} mobile={page.heroMobile} caption={page.heroCaption} />
        </Container>
      </Section>

      <Section id="recorrido" className="scroll-mt-28">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.journeyTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.journeyBody}</p>
            <p className="mt-4 text-sm leading-6 text-muted">{page.journeyNote}</p>
          </div>
          <div className="grid gap-8">
            <FlowSteps steps={page.journeySteps} />
            <FlowSteps steps={page.journeyMap} caption={page.memoryNote} />
          </div>
        </Container>
        <Container className="mt-12">
          <FlowSteps steps={page.memorySteps} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.problemTitle}</h2>
          <ul className="mt-8 flex flex-wrap gap-2">
            {page.problemChannels.map((channel) => (
              <li key={channel} className="rounded-full border border-sand-deep bg-white px-3 py-1.5 text-sm font-semibold text-ink">
                {channel}
              </li>
            ))}
          </ul>
          {page.problemBody.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-3xl leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          <p className="mt-8 max-w-3xl text-2xl font-semibold tracking-tight text-ink">{page.problemClose}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.fragmentTitle}</h2>
          <div className="mt-8">
            <BeforeAfter
              beforeLabel={page.beforeLabel}
              before={page.beforeItems}
              beforeNote={page.beforeNote}
              afterLabel={page.afterLabel}
              after={page.afterFlow}
              note={page.afterNote}
            />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.visionTitle}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.visionItems.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xl font-semibold text-ink">{page.visionClose}</p>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.ownTech}</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.bookingTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.bookingSupport}</p>
            <p className="mt-4 font-semibold text-ink">{page.bookingPhrase}</p>
            <div className="mt-8">
              <TrackedLink
                href={serviceHref('andario-booking-engine')}
                event={{ name: 'home_booking_engine_click', placement: 'feature' }}
                extra={{ name: 'booking_engine_cta', placement: 'home-feature' }}
                cue
              >
                {page.bookingCta}
              </TrackedLink>
            </div>
          </div>
          <BookingHub
            title="Andario Booking Engine"
            branches={page.bookingBranches}
            result={page.bookingResult}
            note={page.bookingNote}
          />
        </Container>
      </Section>

      <Section id="soluciones" className="scroll-mt-28" tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.cardsTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.cardsSupport}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SERVICE_IDS.map((id, index) => {
              const card = page.cards[id];
              const featured = id === 'andario-booking-engine';
              return (
                <ServiceCard
                  key={id}
                  href={serviceHref(id)}
                  index={String(index + 1).padStart(2, '0')}
                  name={dict.services[id].name}
                  subtitle={card.category}
                  summary={card.body}
                  chain={page.verbs[id]}
                  cta={card.cta}
                  serviceId={id}
                  featured={featured}
                  badge={featured ? page.ownTech : undefined}
                  event={{ name: 'home_service_click', service: id }}
                />
              );
            })}
          </div>
          <div className="mt-8">
            <TrackedLink
              href={href(locale, 'solutions')}
              event={{ name: 'home_secondary_cta_click', placement: 'solutions' }}
              variant="secondary"
            >
              {page.solutionsCta}
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink">{page.whereTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.whereSupport}</p>
          </div>
          <AccommodationDigitalMaturity
            label={page.whereTitle}
            contactHref={contact}
            scenarios={scenarios}
            idPrefix="home-scenario"
            track="home"
          />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.adaptTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.adaptBody}</p>
          <p className="mt-8 text-2xl font-semibold tracking-tight text-ink">{page.adaptClose}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.shiftTitle}</h2>
          <div className="mt-8">
            <ShiftPairs items={page.shifts} beforeWord={page.beforeWord} afterWord={page.afterWord} note={page.shiftNote} />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.audienceTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.audienceIntro}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.audiences.map((item, index) => {
              const Icon = audienceIcons[index];
              return (
                <article key={item.title} className="rounded-[var(--radius-card)] bg-white p-6">
                  {Icon ? (
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-wash text-teal">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  ) : null}
                  <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8">
            <TrackedLink
              href={href(locale, 'accommodations')}
              event={{ name: 'home_secondary_cta_click', placement: 'accommodations' }}
              variant="secondary"
            >
              {page.audienceCta}
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.processTitle}</h2>
            <p className="mt-6 text-xl font-semibold text-ink">{page.processClose}</p>
            <div className="mt-8">
              <TrackedLink
                href={href(locale, 'how-we-work')}
                event={{ name: 'home_secondary_cta_click', placement: 'process' }}
                variant="secondary"
              >
                {page.processCta}
              </TrackedLink>
            </div>
          </div>
          <FlowSteps steps={page.process.map((step) => `${step.title} — ${step.body}`)} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.trustTitle}</h2>
          <div className="mt-8">
            <PillarGrid items={page.pillars} />
          </div>
          <h2 className="mt-16 max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.craftTitle}</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {page.craftItems.map((item) => (
              <li key={item} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xl font-semibold text-ink">{page.craftClose}</p>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.originTitle}</h2>
            {page.origin.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-7 text-muted">
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <TrackedLink
                href={href(locale, 'about')}
                event={{ name: 'home_secondary_cta_click', placement: 'about' }}
                variant="secondary"
              >
                {page.originCta}
              </TrackedLink>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.casesTitle}</h2>
            <p className="mt-4 inline-flex rounded-full bg-sand px-4 py-2 text-sm font-semibold text-ink">{page.casesPlace}</p>
            <p className="mt-4 leading-7 text-muted">{page.casesBody}</p>
            {CASES_PUBLISHED ? (
              <div className="mt-8">
                <TrackedLink href={href(locale, 'cases')} event={{ name: 'home_case_click' }} variant="secondary">
                  {page.casesCta}
                </TrackedLink>
              </div>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.hopeTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.hopeBody}</p>
          </div>
          <FlowSteps steps={page.hopeSteps} />
        </Container>
      </Section>

      <Section className="border-t border-sand-deep">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={page.faqs} openEvent={{ name: 'home_faq_open' }} />
          </div>
          <div className="mt-8">
            <TrackedLink href={href(locale, 'faq')} event={{ name: 'home_secondary_cta_click', placement: 'faq' }} variant="secondary">
              {dict.nav.faq}
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section tone="sand" className="pb-24">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href={contact} event={{ name: 'home_primary_cta_click', placement: 'final' }} cue>
              {page.finalPrimary}
            </TrackedLink>
            {whatsapp ? (
              <WhatsAppButton
                phone={whatsapp}
                locale={locale}
                context="home"
                label={page.finalSecondary}
                event={{ name: 'home_whatsapp_click' }}
              />
            ) : null}
          </div>
          <p className="mt-4 max-w-xl text-sm text-muted">{page.finalNote}</p>
        </Container>
      </Section>
    </>
  );
}
