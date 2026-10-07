import {
  Camera,
  Eye,
  Globe2,
  Heart,
  ImageIcon,
  Layers,
  Share2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { ContentDiscoveryVisual } from '@/components/graphics/content-discovery';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { VisibilityEcosystemLink } from '@/components/services/visibility-ecosystem-link';
import { JsonLd } from '@/components/seo/json-ld';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

const whatIcons = [Camera, Globe2, Share2, Layers] as const;
const benefitIcons = [Eye, ShieldCheck, Sparkles, ImageIcon] as const;
const channelIcons = [Globe2, Eye, Share2, Heart] as const;

function mosaicClass(span?: 'wide' | 'tall' | 'normal') {
  if (span === 'tall') return 'sm:row-span-2 min-h-56 sm:min-h-full';
  if (span === 'wide') return 'sm:col-span-2 min-h-44';
  return 'min-h-44';
}

export function ContentView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const service = dict.services['andario-content'];
  const page = dict.contentPage;
  const contactHref = href(locale, 'contact');
  const webHref = href(locale, 'andario-web');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: service.name, routeId: 'andario-content' as const },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          locale,
          routeId: 'andario-content',
        })}
      />

      {/* 1 — Hero */}
      <Section tone="sand" className="overflow-hidden py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="mt-5 text-sm font-semibold tracking-[0.14em] text-teal">
              ANDARIO CONTENT · {service.subtitle.toUpperCase()}
            </p>
            <h1 className="mt-4 max-w-xl whitespace-pre-line text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
              {service.h1}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">{page.support}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={contactHref}
                event={{ name: 'andario_content_cta_click', placement: 'hero' }}
                cue
              >
                {page.primaryCta}
              </TrackedLink>
              {whatsapp ? (
                <WhatsAppButton
                  phone={whatsapp}
                  locale={locale}
                  context="content"
                  label={page.talkCta}
                  event={{ name: 'andario_content_whatsapp_click' }}
                />
              ) : (
                <TrackedLink
                  href={contactHref}
                  event={{ name: 'andario_content_cta_click', placement: 'hero-talk' }}
                  variant="secondary"
                >
                  {page.talkCta}
                </TrackedLink>
              )}
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
          <ContentDiscoveryVisual image={page.heroImage} imageAlt={page.heroAlt} cards={page.heroCards} />
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
                  <span aria-hidden="true" className="absolute top-10 right-[-0.55rem] z-10 text-teal">
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

      {/* 3 — Comparison */}
      <Section tone="sand" className="py-12 sm:py-16">
        <Container>
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {page.compareTitle}
          </h2>
          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-5">
            <article className="rounded-[var(--radius-card)] border border-sand-deep/80 bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6">
              <div className="mb-5 grid grid-cols-2 gap-2">
                {page.improvisedImages.map((src) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-cover grayscale contrast-75 brightness-90"
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">{page.improvisedTitle}</h3>
              <ul className="mt-4 space-y-3">
                {page.improvisedPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>

            <div className="flex items-center justify-center py-1 lg:py-0" aria-hidden="true">
              <span className="rounded-full bg-teal px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-white">
                →
              </span>
            </div>

            <article className="rounded-[var(--radius-card)] border border-teal/20 bg-teal-wash/40 p-5 shadow-[var(--shadow-soft)] sm:p-6">
              <div className="mb-5 grid grid-cols-2 gap-2">
                {page.polishedImages.map((src) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image src={src} alt="" fill sizes="160px" className="object-cover" />
                  </div>
                ))}
              </div>
              <h3 className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">{page.polishedTitle}</h3>
              <ul className="mt-4 space-y-3">
                {page.polishedPoints.map((point) => (
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

      {/* 4 — What Content does */}
      <Section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.whatTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{page.whatBody}</p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.whatItems.map((item, index) => {
              const Icon = whatIcons[index] ?? Camera;
              return (
                <li
                  key={item.title}
                  className="rounded-[var(--radius-card)] border border-sand-deep/70 bg-white p-5 shadow-[var(--shadow-soft)] transition duration-200 motion-safe:hover:-translate-y-0.5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-wash text-teal">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* 5 — Mosaic */}
      <Section tone="sand" className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.mosaicTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{page.mosaicBody}</p>
          </div>
          <ul className="mt-8 grid auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
            {page.mosaic.map((item) => (
              <li
                key={item.label}
                className={`group relative overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] ${mosaicClass(item.span)}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-300 motion-safe:group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
                <p className="absolute bottom-3 left-3 text-sm font-semibold tracking-wide text-white">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 6 — Channels */}
      <Section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.channelsTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{page.channelsBody}</p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.channels.map((item, index) => {
              const Icon = channelIcons[index] ?? Globe2;
              return (
                <li
                  key={item.title}
                  className="overflow-hidden rounded-[var(--radius-card)] border border-sand-deep/70 bg-white shadow-[var(--shadow-soft)]"
                >
                  <div className="relative aspect-[16/11]">
                    <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-wash text-teal">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted">{item.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* 7 — Experience */}
      <Section tone="sand" className="py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="relative min-h-80 overflow-hidden rounded-[var(--radius-card)] sm:min-h-[28rem]">
            <Image
              src={page.experienceImage}
              alt={page.experienceAlt}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.experienceTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{page.experienceBody}</p>
            <p className="mt-5 max-w-md border-l-2 border-teal pl-4 text-base font-semibold leading-7 text-ink">
              {page.experienceHighlight}
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {page.experienceMoments.map((moment) => (
                <li key={moment.label} className="overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-soft)]">
                  <div className="relative aspect-square">
                    <Image src={moment.image} alt="" fill sizes="120px" className="object-cover" />
                  </div>
                  <p className="px-2 py-2 text-center text-xs font-semibold text-ink">{moment.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 8 — Benefits */}
      <Section className="py-12 sm:py-16">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.benefitsTitle}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.benefits.map((item, index) => {
              const Icon = benefitIcons[index] ?? Eye;
              return (
                <li
                  key={item.title}
                  className="rounded-[var(--radius-card)] border border-sand-deep/70 bg-white p-5 shadow-[var(--shadow-soft)]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-wash text-teal">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* 9 — Content + Web */}
      <Section tone="sand" className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="whitespace-pre-line text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {page.bridgeTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">{page.bridgeLead}</p>
          </div>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {page.bridge.map((item, index) => {
              const isWeb = item.title.includes('Web');
              const card = (
                <>
                  <p className="text-xs font-semibold tracking-[0.12em] text-teal">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-5 text-muted">{item.role}</p>
                </>
              );

              return (
                <li key={item.title}>
                  {isWeb ? (
                    <VisibilityEcosystemLink
                      href={webHref}
                      event={{ name: 'andario_content_web_click' }}
                      className="flex h-full flex-col rounded-[var(--radius-card)] border border-sand-deep/70 bg-white px-4 py-5 text-left no-underline shadow-[var(--shadow-soft)] transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                    >
                      {card}
                    </VisibilityEcosystemLink>
                  ) : (
                    <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-sand-deep/70 bg-white px-4 py-5 shadow-[var(--shadow-soft)]">
                      {card}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <Image src={page.finalImage} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/65 to-ink/55" />
        <Container className="relative flex flex-col items-center text-center">
          <h2 className="max-w-3xl whitespace-pre-line text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {page.finalTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">{page.finalBody}</p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <TrackedLink
              href={contactHref}
              event={{ name: 'andario_content_cta_click', placement: 'final' }}
              cue
            >
              {page.primaryCta}
            </TrackedLink>
            {whatsapp ? (
              <WhatsAppButton
                phone={whatsapp}
                locale={locale}
                context="content"
                label={page.talkCta}
                variant="inverse"
                event={{ name: 'andario_content_whatsapp_click' }}
              />
            ) : (
              <TrackedLink
                href={contactHref}
                event={{ name: 'andario_content_cta_click', placement: 'final-talk' }}
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
