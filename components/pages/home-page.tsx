import { audienceIcons } from '@/components/graphics/icons';
import { BookingHub, FlowSteps } from '@/components/graphics/solutions';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { ServiceCard } from '@/components/services/service-card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale, type ServiceId } from '@/lib/i18n/routes';
import { faqJsonLd, itemListJsonLd } from '@/lib/seo/structured-data';

const OFFER_ORDER: ServiceId[] = [
  'andario-web',
  'andario-visibility',
  'andario-booking-engine',
  'andario-connect',
  'andario-content',
  'andario-growth',
  'digital-check',
];

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

  return (
    <>
      <JsonLd data={faqJsonLd(page.faqs)} />
      <JsonLd
        data={itemListJsonLd(
          locale,
          OFFER_ORDER.map((id) => ({ name: dict.services[id].name, routeId: id })),
        )}
      />

      <Section tone="sand" className="pb-16 sm:pb-24">
        <Container>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-6xl">{page.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{page.support}</p>
          <p className="mt-4 max-w-xl font-semibold text-ink">{page.trust}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href={contact} event={{ name: 'home_primary_cta_click', placement: 'hero' }} cue>
              {page.primaryCta}
            </TrackedLink>
            {whatsapp ? (
              <WhatsAppButton
                phone={whatsapp}
                locale={locale}
                context="home"
                label={page.secondaryCta}
                event={{ name: 'home_whatsapp_click' }}
              />
            ) : (
              <TrackedLink href={contact} event={{ name: 'home_secondary_cta_click', placement: 'hero' }} variant="secondary">
                {page.secondaryCta}
              </TrackedLink>
            )}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">{page.forLine}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.problemTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.problemIntro}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.problems.map((problem) => (
              <li key={problem} className="rounded-[var(--radius-card)] border border-sand-deep bg-sand p-5 text-base leading-7 text-ink">
                {problem}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-xl font-semibold text-ink">{page.problemClose}</p>
          <p className="mt-3 max-w-2xl leading-7 text-muted">{page.problemNext}</p>
          <div className="mt-8">
            <TrackedLink href={contact} event={{ name: 'home_primary_cta_click', placement: 'problems' }} cue>
              {page.problemCta}
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section id="soluciones" tone="sand" className="scroll-mt-28">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.offerTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.offerSupport}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {OFFER_ORDER.map((id, index) => {
              const card = page.cards[id];
              return (
                <ServiceCard
                  key={id}
                  href={href(locale, id)}
                  index={String(index + 1).padStart(2, '0')}
                  name={card.title}
                  subtitle={dict.services[id].name}
                  summary={card.body}
                  cta={card.cta}
                  serviceId={id}
                  featured={id === 'andario-booking-engine'}
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
        <Container className="grid items-start gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.paceTitle}</h2>
            {page.pace.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <FlowSteps steps={page.paceSteps} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight whitespace-pre-line text-ink sm:text-4xl">{page.knownTitle}</h2>
          {page.knownBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-lg leading-8 text-muted">
              {paragraph}
            </p>
          ))}
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.audienceTitle}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {page.audiences.map((title, index) => {
              const Icon = audienceIcons[index % audienceIcons.length];
              return (
                <li key={title} className="flex items-center gap-3 rounded-[var(--radius-card)] border border-sand-deep bg-white p-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-wash text-teal">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-ink">{title}</span>
                </li>
              );
            })}
          </ul>
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

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.processTitle}</h2>
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
          <ol className="grid gap-4">
            {page.process.map((step, index) => (
              <li key={step.title} className="rounded-[var(--radius-card)] bg-white p-5">
                <p className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 leading-7 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.bookingTitle}</h2>
            {page.booking.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-7 text-muted">
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <TrackedLink
                href={href(locale, 'andario-booking-engine')}
                event={{ name: 'home_booking_engine_click', placement: 'feature' }}
                extra={{ name: 'booking_engine_cta', placement: 'home-feature' }}
                cue
              >
                {page.bookingCta}
              </TrackedLink>
            </div>
          </div>
          <BookingHub title="Andario Booking Engine" branches={page.bookingBranches} result={page.bookingResult} note={page.bookingNote} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.pioneerTitle}</h2>
          {page.pioneer.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          <div className="mt-8">
            <TrackedLink href={href(locale, 'about')} event={{ name: 'home_secondary_cta_click', placement: 'about' }} variant="secondary">
              {page.pioneerCta}
            </TrackedLink>
          </div>
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
          {page.finalBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-2xl leading-7 text-muted">
              {paragraph}
            </p>
          ))}
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
        </Container>
      </Section>
    </>
  );
}
