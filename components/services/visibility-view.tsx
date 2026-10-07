import {
  Compass,
  Eye,
  Link2,
  MapPin,
  MessageCircle,
  Route,
  Search,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { VisibilityDiscoveryVisual } from '@/components/graphics/visibility-discovery';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { VisibilityEcosystemLink } from '@/components/services/visibility-ecosystem-link';
import { JsonLd } from '@/components/seo/json-ld';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import type { AnalyticsEvent } from '@/lib/analytics/events';
import { href, type Locale, type RouteId } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

const whatIcons = [Search, MapPin, Sparkles, Compass] as const;
const benefitIcons = [Eye, Sparkles, Route, Compass] as const;

function CtaPair({
  contactHref,
  primaryLabel,
  talkLabel,
  whatsapp,
  locale,
  placement,
}: {
  contactHref: string;
  primaryLabel: string;
  talkLabel: string;
  whatsapp: string | null;
  locale: Locale;
  placement: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <TrackedLink
        href={contactHref}
        event={{ name: 'andario_visibility_cta_click', placement }}
        cue
      >
        {primaryLabel}
      </TrackedLink>
      {whatsapp ? (
        <WhatsAppButton
          phone={whatsapp}
          locale={locale}
          context="visibility"
          label={talkLabel}
          event={{ name: 'andario_visibility_whatsapp_click' }}
        />
      ) : (
        <TrackedLink
          href={contactHref}
          event={{ name: 'andario_visibility_cta_click', placement: `${placement}-talk` }}
          variant="secondary"
        >
          {talkLabel}
        </TrackedLink>
      )}
    </div>
  );
}

function ecosystemEvent(id: RouteId): AnalyticsEvent | null {
  if (id === 'andario-web') return { name: 'andario_visibility_web_click' };
  if (id === 'andario-booking-engine') return { name: 'andario_visibility_booking_click' };
  return null;
}

export function VisibilityView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const service = dict.services['andario-visibility'];
  const page = dict.visibility;
  const contactHref = href(locale, 'contact');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: service.name, routeId: 'andario-visibility' as const },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          locale,
          routeId: 'andario-visibility',
        })}
      />

      {/* 1 — Hero */}
      <Section tone="sand" className="overflow-hidden py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="mt-5 text-sm font-semibold tracking-[0.16em] text-teal">ANDARIO VISIBILITY</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
              {service.h1}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">{page.support}</p>
            <div className="mt-7">
              <CtaPair
                contactHref={contactHref}
                primaryLabel={page.primaryCta}
                talkLabel={page.talkCta}
                whatsapp={whatsapp}
                locale={locale}
                placement="hero"
              />
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {page.concepts.map((concept) => (
                <li
                  key={concept}
                  className="rounded-full border border-sand-deep/80 bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-[var(--shadow-soft)] sm:text-sm"
                >
                  {concept}
                </li>
              ))}
            </ul>
          </div>
          <VisibilityDiscoveryVisual
            image={page.heroImage}
            imageAlt={page.heroAlt}
            searchLabel={page.searchLabel}
            searchQuery={page.searchQuery}
            resultName={page.searchResultName}
            resultMeta={page.searchResultMeta}
            caption={page.searchCaption}
          />
        </Container>
      </Section>

      {/* 2 — Journey */}
      <Section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.journeyTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{page.journeyBody}</p>
          </div>

          <ol className="mt-10 hidden gap-3 lg:grid lg:grid-cols-6">
            {page.journey.map((step, index) => (
              <li key={step.title} className="relative text-center">
                {index < page.journey.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-10 right-[-0.55rem] z-10 text-teal"
                  >
                    →
                  </span>
                ) : null}
                <div className="relative mx-auto aspect-square w-20 overflow-hidden rounded-full border-2 border-white shadow-[var(--shadow-soft)]">
                  <Image src={step.image} alt="" fill sizes="80px" className="object-cover" />
                </div>
                <p className="mt-3 text-xs font-semibold tracking-[0.12em] text-teal">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-1 text-sm font-semibold leading-5 text-ink">{step.title}</p>
              </li>
            ))}
          </ol>

          <ol className="mt-8 space-y-3 lg:hidden">
            {page.journey.map((step, index) => (
              <li key={step.title}>
                <div className="flex items-center gap-4 rounded-[var(--radius-card)] border border-sand-deep/70 bg-sand p-3 shadow-[var(--shadow-soft)]">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white">
                    <Image src={step.image} alt="" fill sizes="64px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-teal">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-ink">{step.title}</p>
                  </div>
                </div>
                {index < page.journey.length - 1 ? (
                  <p className="py-1 text-center text-teal" aria-hidden="true">
                    ↓
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 3 — What Visibility does */}
      <Section tone="sand" className="py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="relative min-h-80 overflow-hidden rounded-[var(--radius-card)] sm:min-h-[28rem]">
            <Image
              src={page.whatImage}
              alt={page.whatAlt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">{page.whatEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.whatTitle}</h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted">{page.whatBody}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {page.whatItems.map((item, index) => {
                const Icon = whatIcons[index] ?? Search;
                return (
                  <li
                    key={item.title}
                    className="rounded-[var(--radius-card)] border border-sand-deep/70 bg-white p-4 shadow-[var(--shadow-soft)] transition duration-200 motion-safe:hover:-translate-y-0.5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-wash text-teal">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted">{item.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 4 — Benefits */}
      <Section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">{page.benefitsEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.benefitsTitle}</h2>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {page.benefits.map((item, index) => {
              const Icon = benefitIcons[index] ?? Eye;
              return (
                <li
                  key={item.title}
                  className="grid overflow-hidden rounded-[var(--radius-card)] border border-sand-deep/70 bg-white shadow-[var(--shadow-soft)] transition duration-200 motion-safe:hover:-translate-y-0.5 sm:grid-cols-[0.85fr_1.15fr]"
                >
                  <div className="relative min-h-40 sm:min-h-full">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 20vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-5 sm:p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-wash text-teal">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* 5 — Comparison */}
      <Section tone="sand" className="py-12 sm:py-16">
        <Container>
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {page.compareTitle}
          </h2>
          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-5">
            <article className="rounded-[var(--radius-card)] border border-sand-deep/80 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="relative mb-6 h-28 overflow-hidden rounded-2xl bg-sand" aria-hidden="true">
                <div className="absolute top-4 left-4 h-10 w-24 rotate-[-6deg] rounded-xl border border-dashed border-ink/25 bg-white/80" />
                <div className="absolute top-8 right-8 h-12 w-20 rotate-[8deg] rounded-xl border border-dashed border-ink/25 bg-white/70" />
                <div className="absolute bottom-3 left-1/3 h-9 w-28 rotate-[3deg] rounded-xl border border-dashed border-ink/20 bg-white/60" />
                <span className="absolute inset-0 flex items-center justify-center text-muted">
                  <Link2 className="h-5 w-5 opacity-40" />
                </span>
              </div>
              <h3 className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">{page.scatteredTitle}</h3>
              <ul className="mt-4 space-y-3">
                {page.scatteredPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>

            <div className="flex items-center justify-center py-1 lg:py-0" aria-hidden="true">
              <span className="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-white">
                VS
              </span>
            </div>

            <article className="rounded-[var(--radius-card)] border border-teal/20 bg-teal-wash/50 p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="relative mb-6 h-28 overflow-hidden rounded-2xl bg-white/70" aria-hidden="true">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute h-14 w-14 rounded-full bg-teal/15" />
                  <span className="absolute top-4 left-8 h-8 w-8 rounded-full bg-teal/25" />
                  <span className="absolute top-5 right-10 h-8 w-8 rounded-full bg-teal/25" />
                  <span className="absolute bottom-5 left-14 h-8 w-8 rounded-full bg-teal/25" />
                  <span className="absolute bottom-4 right-12 h-8 w-8 rounded-full bg-teal/25" />
                  <svg viewBox="0 0 200 100" className="absolute inset-x-6 top-6 h-16 w-auto text-teal/40">
                    <path
                      d="M40 30 L100 50 L160 28 M40 70 L100 50 L160 72"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <h3 className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">{page.workedTitle}</h3>
              <ul className="mt-4 space-y-3">
                {page.workedPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-6 text-ink">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      {/* 6 — Ecosystem */}
      <Section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.ecosystemTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{page.ecosystemBody}</p>
          </div>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {page.ecosystem.map((item, index) => {
              const isCurrent = item.id === 'andario-visibility';
              const event = ecosystemEvent(item.id);
              const cardClass = isCurrent
                ? 'flex h-full flex-col rounded-[var(--radius-card)] border border-teal/30 bg-teal px-4 py-5 text-left shadow-[var(--shadow-soft)]'
                : 'flex h-full flex-col rounded-[var(--radius-card)] border border-sand-deep/70 bg-white px-4 py-5 text-left no-underline shadow-[var(--shadow-soft)] transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal';

              const inner = (
                <>
                  <p className={`text-xs font-semibold tracking-[0.12em] ${isCurrent ? 'text-white/75' : 'text-teal'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className={`mt-2 text-sm font-semibold ${isCurrent ? 'text-white' : 'text-ink'}`}>{item.name}</p>
                  <p className={`mt-1 text-sm leading-5 ${isCurrent ? 'text-white/85' : 'text-muted'}`}>{item.role}</p>
                  {index < page.ecosystem.length - 1 ? (
                    <span aria-hidden="true" className="mt-3 text-sm font-semibold text-teal lg:hidden">
                      ↓
                    </span>
                  ) : null}
                </>
              );

              return (
                <li key={item.id} className="relative">
                  {isCurrent ? (
                    <div className={cardClass}>{inner}</div>
                  ) : (
                    <VisibilityEcosystemLink href={href(locale, item.id)} event={event} className={cardClass}>
                      {inner}
                    </VisibilityEcosystemLink>
                  )}
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      {/* 7 — Final CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <Image src={page.finalImage} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/65 to-ink/55" />
        <Container className="relative flex flex-col items-center text-center">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">{page.finalBody}</p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <TrackedLink
              href={contactHref}
              event={{ name: 'andario_visibility_cta_click', placement: 'final' }}
              cue
            >
              {page.primaryCta}
            </TrackedLink>
            {whatsapp ? (
              <WhatsAppButton
                phone={whatsapp}
                locale={locale}
                context="visibility"
                label={page.talkCta}
                variant="inverse"
                event={{ name: 'andario_visibility_whatsapp_click' }}
              />
            ) : (
              <TrackedLink
                href={contactHref}
                event={{ name: 'andario_visibility_cta_click', placement: 'final-talk' }}
                variant="inverse"
              >
                {page.talkCta}
              </TrackedLink>
            )}
          </div>
          <p className="mt-6 text-sm text-white/75">{page.finalNote}</p>
        </Container>
      </section>
    </>
  );
}
