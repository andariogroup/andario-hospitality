import { audienceIcons, serviceIcons } from '@/components/graphics/icons';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale, type ServiceId } from '@/lib/i18n/routes';
import { faqJsonLd, itemListJsonLd } from '@/lib/seo/structured-data';
import { ChartLine, Compass, Cpu, Eye, Handshake, Layers, MessageCircle, Search, Sprout, Unplug, type LucideIcon } from 'lucide-react';
import Image from 'next/image';

const OFFER_ORDER: ServiceId[] = [
  'andario-web',
  'andario-visibility',
  'andario-booking-engine',
  'andario-connect',
  'andario-content',
  'andario-growth',
];

const ECOSYSTEM: ServiceId[] = ['digital-check', ...OFFER_ORDER];

const SITUATION_ICONS: LucideIcon[] = [Sprout, Search, MessageCircle, Unplug, ChartLine];
const DIFFERENTIATOR_ICONS: LucideIcon[] = [Compass, Layers, Cpu, Handshake, Eye];

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
          [...ECOSYSTEM].map((id) => ({ name: dict.services[id].name, routeId: id })),
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
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.situationsTitle}</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.situations.map((situation, index) => {
              const Icon = SITUATION_ICONS[index] ?? Compass;
              return (
                <li key={situation.title} className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-wash text-teal">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{situation.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{situation.body}</p>
                </li>
              );
            })}
          </ol>
          <p className="mt-8 max-w-2xl text-lg font-semibold text-ink">{page.situationClose}</p>
          <div className="mt-6">
            <TrackedLink href={contact} event={{ name: 'home_primary_cta_click', placement: 'problems' }} cue>
              {page.situationCta}
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <p className="max-w-xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{page.bridge}</p>
          <Image
            src="/home/digital-check-desk.webp"
            alt={page.checkAlt}
            width={1024}
            height={682}
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="aspect-[3/2] w-full rounded-[var(--radius-card)] object-cover"
          />
        </Container>
      </Section>

      <Section id="soluciones" className="scroll-mt-28">
        <Container>
          <article className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{dict.services['digital-check'].name}</p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.cards['digital-check'].title}</h2>
              <p className="mt-4 max-w-xl leading-7 text-muted">{page.cards['digital-check'].body}</p>
              <div className="mt-6">
                <TrackedLink href={href(locale, 'digital-check')} event={{ name: 'home_service_click', service: 'digital-check' }} cue>
                  {page.cards['digital-check'].cta}
                </TrackedLink>
              </div>
            </div>
            <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-sand p-4 sm:p-6">
              <p className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">{page.boardTitle}</p>
              <p className="mt-2 text-lg font-semibold text-ink">{page.boardStatus}</p>
              <p className="mt-5 text-sm font-semibold text-ink">{page.boardAreas}</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {page.checkItems.map((item) => {
                  const ready = item.tone === 'steady';
                  const status = ready ? (locale === 'es' ? 'En orden' : 'In place') : locale === 'es' ? 'Prioridad' : 'Priority';
                  return (
                    <li key={item.label} className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-ink">
                      <span>{item.label}</span>
                      <span className={ready ? 'font-semibold text-teal' : 'font-semibold text-ink'}>
                        <span aria-hidden="true">{ready ? '✓' : '!'}</span>
                        <span className="sr-only">{status}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-ink">{page.boardOpportunities}</p>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-muted">
                    {page.opportunities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{page.boardNext}</p>
                  <ol className="mt-2 space-y-1 text-sm leading-6 text-muted">
                    {page.nextSteps.map((item, index) => (
                      <li key={item}>
                        {index + 1}. {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <figcaption className="mt-4 text-sm leading-6 text-muted">{page.checkNote}</figcaption>
            </figure>
          </article>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.roadmapTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.roadmapIntro}</p>
          <ol className="mt-10 grid gap-6 md:grid-cols-6 md:gap-4">
            {page.roadmap.map((step, index) => (
              <li key={step} className="relative flex items-start gap-4 md:flex-col md:gap-3">
                {index < page.roadmap.length - 1 ? (
                  <span aria-hidden="true" className="absolute top-5 left-5 h-[calc(100%+1.5rem)] w-px bg-sand-deep md:top-5 md:left-5 md:h-px md:w-[calc(100%-0.5rem)]" />
                ) : null}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-teal/30 bg-white text-sm font-semibold text-teal">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="pt-2 font-semibold text-ink md:pt-0">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <TrackedLink href={href(locale, 'how-we-work')} event={{ name: 'home_secondary_cta_click', placement: 'process' }} variant="secondary">
              {page.processCta}
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.offerTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.offerSupport}</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ECOSYSTEM.map((id) => {
              const card = page.cards[id];
              const Icon = serviceIcons[id];
              return (
                <li key={id}>
                  <TrackedLink
                    href={href(locale, id)}
                    event={{ name: 'home_service_click', service: id }}
                    variant="secondary"
                    className="h-full items-start justify-start gap-4 rounded-[var(--radius-card)] border-sand-deep bg-white p-5 text-left shadow-none hover:translate-y-0 hover:border-teal"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-wash text-teal">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-[0.12em] text-teal uppercase">{card.role}</span>
                      <span className="mt-1 block font-semibold text-ink">{dict.services[id].name}</span>
                      <span className="mt-2 block text-sm leading-6 text-muted">{card.body}</span>
                    </span>
                  </TrackedLink>
                </li>
              );
            })}
          </ul>
          <div className="mt-8">
            <TrackedLink href={href(locale, 'solutions')} event={{ name: 'home_secondary_cta_click', placement: 'solutions' }} variant="secondary">
              {page.solutionsCta}
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
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
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.differentiatorsTitle}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {page.differentiators.map((item, index) => {
              const Icon = DIFFERENTIATOR_ICONS[index] ?? Compass;
              return (
                <li key={item.title} className="rounded-[var(--radius-card)] bg-white p-5">
                  <Icon aria-hidden="true" className="h-5 w-5 text-teal" />
                  <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              );
            })}
          </ul>
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
            <p className="mt-4 font-semibold text-ink">{page.bookingOta}</p>
            <ul className="mt-6 grid gap-2 text-sm text-ink sm:grid-cols-2">
              {page.bookingPoints.map((point) => (
                <li key={point} className="rounded-2xl bg-sand px-3 py-2">
                  {point}
                </li>
              ))}
            </ul>
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
          <figure>
            <Image
              src="/home/booking-channel.webp"
              alt={page.bookingAlt}
              width={1024}
              height={682}
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-auto w-full rounded-[var(--radius-card)]"
            />
            <figcaption className="mt-3 text-sm leading-6 text-muted">{page.mockNote}</figcaption>
          </figure>
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
