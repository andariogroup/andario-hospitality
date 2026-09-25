import { audienceIcons } from '@/components/graphics/icons';
import { FlowSteps } from '@/components/graphics/solutions';
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
import { Compass, Link2, MessageCircle, MonitorSmartphone, Search, Share2, type LucideIcon } from 'lucide-react';
import Image from 'next/image';

const OFFER_ORDER: ServiceId[] = [
  'andario-web',
  'andario-visibility',
  'andario-booking-engine',
  'andario-connect',
  'andario-content',
  'andario-growth',
];

const PROBLEM_ICONS: LucideIcon[] = [Share2, Link2, MonitorSmartphone, MessageCircle, Search, Compass];

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
          [...OFFER_ORDER, 'digital-check' as const].map((id) => ({ name: dict.services[id].name, routeId: id })),
        )}
      />

      <Section tone="sand" className="pb-16 sm:pb-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
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
          </div>
          <figure className="relative">
            <Image
              src="/home/andario-city-building.webp"
              alt={page.heroAlt}
              width={1024}
              height={769}
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-ink">
              {page.heroBadge}
            </figcaption>
          </figure>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.problemTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.problemIntro}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.problems.map((problem, index) => {
              const Icon = PROBLEM_ICONS[index] ?? Compass;
              return (
                <li key={problem} className="flex gap-3 rounded-[var(--radius-card)] border border-sand-deep bg-sand p-5 text-base leading-7 text-ink">
                  <Icon aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-teal" />
                  <span>{problem}</span>
                </li>
              );
            })}
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
          <article className="mt-10 grid items-center gap-8 rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)] lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
            <Image
              src="/home/digital-check-desk.webp"
              alt={page.checkAlt}
              width={1024}
              height={682}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="aspect-[3/2] w-full rounded-[var(--radius-card)] object-cover"
            />
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{dict.services['digital-check'].name}</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">{page.cards['digital-check'].title}</h3>
              <p className="mt-3 leading-7 text-muted">{page.cards['digital-check'].body}</p>
              <p className="mt-3 text-sm text-muted">{page.checkNote}</p>
              <div className="mt-6">
                <TrackedLink
                  href={href(locale, 'digital-check')}
                  event={{ name: 'home_service_click', service: 'digital-check' }}
                  cue
                >
                  {page.cards['digital-check'].cta}
                </TrackedLink>
              </div>
            </div>
          </article>
          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight whitespace-pre-line text-ink sm:text-4xl">{page.knownTitle}</h2>
            {page.knownBody.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-lg leading-8 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <Image
            src="/home/known-reception.webp"
            alt={page.knownAlt}
            width={1024}
            height={769}
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover"
          />
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
          <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-sand p-4 sm:p-6">
            <div className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
              <p className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">Andario Booking Engine</p>
              <p className="mt-2 text-lg font-semibold text-ink">{page.mockProperty}</p>
              <p className="mt-4 text-sm font-semibold text-ink">
                {page.mockDates}
                <span className="mx-2 text-muted">·</span>
                {page.mockGuests}
              </p>
              <p className="mt-4 rounded-2xl bg-teal-wash px-4 py-3 text-sm font-semibold text-ink">{page.mockUnit}</p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-ink">{page.mockPrice}</p>
                <span className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white">{page.mockAction}</span>
              </div>
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-muted">
              {page.mockNote} {page.bookingNote}
            </figcaption>
          </figure>
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
