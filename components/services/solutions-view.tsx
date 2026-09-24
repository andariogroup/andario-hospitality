import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { BeforeAfter, BookingHub, FlowSteps, PillarGrid, SolutionsHeroMap } from '@/components/graphics/solutions';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { AccommodationDigitalMaturity } from '@/components/services/maturity-picker';
import { ServiceCard } from '@/components/services/service-card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, SERVICE_IDS, type Locale, type ServiceId } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd, itemListJsonLd } from '@/lib/seo/structured-data';

function serviceHref(locale: Locale, id: ServiceId) {
  return href(locale, id);
}

export function SolutionsView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const page = dict.solutionsHub;
  const contactHref = href(locale, 'contact');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav.solutions, routeId: 'solutions' as const },
  ];
  const scenarios = page.scenarios.map((scenario) => ({
    title: scenario.title,
    cta: scenario.cta,
    placement: scenario.placement,
    services: scenario.services.map((id) => ({
      href: serviceHref(locale, id),
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
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{page.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{page.support}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href={contactHref} event={{ name: 'solutions_diagnosis_click', placement: 'hero' }} cue>
                {page.primaryCta}
              </TrackedLink>
              <Button asChild variant="secondary">
                <a href="#ecosystem">{page.secondaryCta}</a>
              </Button>
            </div>
            <p className="mt-4 max-w-xl text-sm text-muted">{page.micro}</p>
          </div>
          <SolutionsHeroMap center={page.heroCenter} nodes={page.heroNodes} mobile={page.heroMobile} caption={page.heroCaption} />
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.startTitle}</h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted">{page.startBody}</p>
          </div>
          <FlowSteps steps={page.startSteps} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink">{page.whereTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.whereIntro}</p>
          </div>
          <AccommodationDigitalMaturity label={page.whereTitle} contactHref={contactHref} scenarios={scenarios} />
        </Container>
      </Section>

      <Section id="ecosystem" className="scroll-mt-28">
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
                  href={serviceHref(locale, id)}
                  index={String(index + 1).padStart(2, '0')}
                  name={dict.services[id].name}
                  subtitle={card.category}
                  summary={card.body}
                  problem={card.problem}
                  related={card.related}
                  chain={card.chain}
                  cta={card.cta}
                  serviceId={id}
                  featured={featured}
                  badge={featured ? page.ownTech : undefined}
                  event={{ name: 'solutions_service_click', service: id }}
                />
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.ownTech}</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-ink">{page.bookingTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.bookingSupport}</p>
            <div className="mt-8">
              <TrackedLink
                href={serviceHref(locale, 'andario-booking-engine')}
                event={{ name: 'solutions_service_click', service: 'andario-booking-engine' }}
                extra={{ name: 'booking_engine_cta', placement: 'solutions-feature' }}
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

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.connectTitle}</h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted">{page.connectBody}</p>
          </div>
          <FlowSteps steps={page.connectFlow} caption={page.connectNote} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.beforeTitle}</h2>
          <div className="mt-8">
            <BeforeAfter
              beforeLabel={page.beforeLabel}
              before={page.beforeItems}
              afterLabel={page.afterLabel}
              after={page.afterFlow}
              note={page.afterNote}
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.hopeTitle}</h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted">{page.hopeBody}</p>
          </div>
          <FlowSteps steps={page.hopeSteps} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.chooseTitle}</h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {page.chooseItems.map((item) => (
              <li key={item.need}>
                <TrackedLink
                  href={serviceHref(locale, item.service)}
                  variant="secondary"
                  className="h-auto w-full justify-start whitespace-normal text-left"
                  event={{ name: 'solutions_service_click', service: item.service }}
                >
                  {`${item.need} → ${dict.services[item.service].name}`}
                </TrackedLink>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <TrackedLink href={contactHref} event={{ name: 'solutions_diagnosis_click', placement: 'choose' }} cue>
              {page.chooseCta}
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.matrixTitle}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.matrix.map((item) => (
              <li key={item.need} className="rounded-[var(--radius-card)] border border-sand-deep bg-sand p-5">
                <p className="text-sm text-muted">{item.need}</p>
                <TrackedLink
                  href={serviceHref(locale, item.service)}
                  variant="ghost"
                  className="mt-3 px-0"
                  event={{ name: 'solutions_service_click', service: item.service }}
                >
                  {dict.services[item.service].name}
                </TrackedLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.adaptTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.adaptBody}</p>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink">{page.journeyTitle}</h2>
            <p className="mt-4 text-sm font-semibold text-ink">{page.journeyNote}</p>
          </div>
          <FlowSteps steps={page.journey} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.trustTitle}</h2>
          <div className="mt-8">
            <PillarGrid items={page.pillars} />
          </div>
          <h2 className="mt-16 max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.craftTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.craftIntro}</p>
          <div className="mt-8">
            <PillarGrid items={page.craftPillars} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.originTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.originBody}</p>
          <p className="mt-6 inline-flex rounded-full bg-sand px-4 py-2 text-sm font-semibold text-ink">{page.pioneer}</p>
        </Container>
      </Section>

      <Section className="border-t border-sand-deep">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={page.faqs} openEvent={{ name: 'solutions_faq_open' }} />
          </div>
        </Container>
      </Section>

      <Section tone="sand" className="pb-24">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href={contactHref} event={{ name: 'solutions_diagnosis_click', placement: 'final' }} cue>
              {page.finalPrimary}
            </TrackedLink>
            {whatsapp ? (
              <WhatsAppButton
                phone={whatsapp}
                locale={locale}
                context="solutions"
                label={page.finalSecondary}
                event={{ name: 'solutions_whatsapp_click' }}
              />
            ) : null}
          </div>
          <p className="mt-4 max-w-xl text-sm text-muted">{page.finalNote}</p>
        </Container>
      </Section>
    </>
  );
}
