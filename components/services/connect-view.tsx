import {
  Clock3,
  Compass,
  HeartHandshake,
  MessageCircle,
  MessagesSquare,
  Route,
  Sparkles,
  UserRound,
} from 'lucide-react';
import Image from 'next/image';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { ConnectDiscoveryVisual } from '@/components/graphics/connect-discovery';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { VisibilityEcosystemLink } from '@/components/services/visibility-ecosystem-link';
import { JsonLd } from '@/components/seo/json-ld';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

const whatIcons = [MessagesSquare, Compass, Sparkles, HeartHandshake] as const;
const problemIcons = [MessagesSquare, Clock3, Route] as const;
const benefitIcons = [Clock3, MessagesSquare, Route, HeartHandshake] as const;

export function ConnectView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const service = dict.services['andario-connect'];
  const page = dict.connect;
  const contactHref = href(locale, 'contact');
  const bookingHref = href(locale, 'andario-booking-engine');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: service.name, routeId: 'andario-connect' as const },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          locale,
          routeId: 'andario-connect',
        })}
      />

      {/* 1 — Hero */}
      <Section tone="sand" className="overflow-hidden py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="mt-5 text-sm font-semibold tracking-[0.16em] text-teal">ANDARIO CONNECT</p>
            <h1 className="mt-4 max-w-xl whitespace-pre-line text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
              {service.h1.replace('. ', '.\n')}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">{page.support}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={contactHref}
                event={{ name: 'andario_connect_cta_click', placement: 'hero' }}
                cue
              >
                {page.primaryCta}
              </TrackedLink>
              {whatsapp ? (
                <WhatsAppButton
                  phone={whatsapp}
                  locale={locale}
                  context="connect"
                  label={page.talkCta}
                  event={{ name: 'andario_connect_whatsapp_click' }}
                />
              ) : (
                <TrackedLink
                  href={contactHref}
                  event={{ name: 'andario_connect_cta_click', placement: 'hero-talk' }}
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
          <ConnectDiscoveryVisual
            image={page.heroImage}
            imageAlt={page.heroAlt}
            guestLabel={page.chatGuestLabel}
            guestMessage={page.chatGuestMessage}
            propertyLabel={page.chatPropertyLabel}
            propertyMessage={page.chatPropertyMessage}
            options={page.chatOptions}
            caption={page.chatCaption}
          />
        </Container>
      </Section>

      {/* 2 — Opportunity */}
      <Section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.opportunityTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{page.opportunityBody}</p>
          </div>

          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {page.floatingMessages.map((message, index) => (
              <li
                key={message}
                className={`rounded-[var(--radius-card)] border border-sand-deep/70 bg-sand px-4 py-3 text-sm font-medium text-ink shadow-[var(--shadow-soft)] ${
                  index % 2 === 1 ? 'sm:mt-6' : ''
                }`}
              >
                <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-wash text-teal">
                  <MessageCircle aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
                “{message}”
              </li>
            ))}
          </ul>

          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {page.problems.map((item, index) => {
              const Icon = problemIcons[index] ?? MessagesSquare;
              return (
                <li
                  key={item.title}
                  className="rounded-[var(--radius-card)] border border-sand-deep/70 bg-white p-5 shadow-[var(--shadow-soft)]"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-wash text-teal">
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

      {/* 3 — What Connect is */}
      <Section tone="sand" className="py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="relative min-h-80 overflow-hidden rounded-[var(--radius-card)] sm:min-h-[28rem]">
            <Image
              src={page.whatImage}
              alt={page.whatAlt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <ul className="absolute inset-x-4 bottom-4 space-y-2 sm:inset-x-6 sm:bottom-6">
              {page.whatChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 text-sm font-semibold text-ink shadow-[var(--shadow-soft)] backdrop-blur-sm"
                >
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal text-[10px] text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">{page.whatEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.whatTitle}</h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted">{page.whatBody}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {page.whatItems.map((item, index) => {
                const Icon = whatIcons[index] ?? MessagesSquare;
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

      {/* 4 — Conversation demo */}
      <Section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.demoTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{page.demoBody}</p>
          </div>

          <ol className="mt-10 grid gap-4 lg:grid-cols-4">
            {page.demoSteps.map((step, index) => (
              <li key={step.title} className="relative">
                {index < page.demoSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-10 right-[-0.65rem] z-10 hidden text-teal lg:block"
                  >
                    →
                  </span>
                ) : null}
                <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-sand-deep/70 bg-sand p-4 shadow-[var(--shadow-soft)]">
                  <p className="text-xs font-semibold tracking-[0.12em] text-teal">{step.label}</p>
                  <h3 className="mt-2 text-base font-semibold text-ink">{step.title}</h3>
                  <div className="mt-4 flex-1 rounded-2xl bg-white p-3 shadow-[var(--shadow-soft)]">
                    <p className="whitespace-pre-line text-sm leading-6 text-ink">{step.body}</p>
                    {step.options ? (
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {step.options.map((option) => (
                          <span
                            key={option}
                            className="rounded-full border border-teal/20 bg-teal-wash/60 px-2 py-1.5 text-center text-[11px] font-semibold text-teal"
                          >
                            {option}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {step.cta ? (
                      <span className="mt-3 inline-flex rounded-full bg-teal px-3 py-1.5 text-xs font-semibold text-white">
                        {step.cta}
                      </span>
                    ) : null}
                    {step.actions ? (
                      <div className="mt-3 space-y-2">
                        {step.actions.map((action, actionIndex) => (
                          <span
                            key={action}
                            className={`block rounded-full px-3 py-2 text-center text-xs font-semibold ${
                              actionIndex === 0
                                ? 'bg-teal text-white'
                                : 'border border-sand-deep bg-sand text-ink'
                            }`}
                          >
                            {action}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  {index < page.demoSteps.length - 1 ? (
                    <p className="mt-3 text-center text-teal lg:hidden" aria-hidden="true">
                      ↓
                    </p>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 5 — Benefits */}
      <Section tone="sand" className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">{page.benefitsEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.benefitsTitle}</h2>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {page.benefits.map((item, index) => {
              const Icon = benefitIcons[index] ?? HeartHandshake;
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

      {/* 6 — Automation + human */}
      <Section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.balanceTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{page.balanceBody}</p>
          </div>

          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
            <article className="rounded-[var(--radius-card)] border border-sand-deep/80 bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                {page.balanceRepetitiveTitle}
              </p>
              <ul className="mt-4 space-y-3">
                {page.balanceRepetitive.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sand text-teal">
                      <MessageCircle aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <div className="flex flex-col items-center justify-center gap-3 py-2 lg:px-2">
              <div className="rounded-[var(--radius-card)] bg-teal px-5 py-6 text-center text-white shadow-[var(--shadow-soft)]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                  <MessagesSquare aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-semibold">{page.balanceCenterTitle}</p>
                <p className="mt-1 text-xs text-white/85">{page.balanceCenterBody}</p>
              </div>
              <span className="text-teal lg:hidden" aria-hidden="true">
                ↓
              </span>
            </div>

            <article className="rounded-[var(--radius-card)] border border-teal/20 bg-teal-wash/50 p-6 shadow-[var(--shadow-soft)]">
              <p className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">{page.balanceHumanTitle}</p>
              <ul className="mt-4 space-y-3">
                {page.balanceHuman.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-ink">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-teal">
                      <UserRound aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-start gap-2 rounded-2xl bg-white/80 px-3 py-3 text-sm leading-6 text-ink">
                <HeartHandshake aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                {page.balanceHumanNote}
              </p>
            </article>
          </div>
        </Container>
      </Section>

      {/* 7 — Connect + Booking Engine */}
      <Section tone="sand" className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.bridgeTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{page.bridgeBody}</p>
          </div>

          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {page.bridge.map((item, index) => {
              const isBooking = item.title.includes('Booking');
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
                  {isBooking ? (
                    <VisibilityEcosystemLink
                      href={bookingHref}
                      event={{ name: 'andario_connect_booking_click' }}
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
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-muted">{page.bridgeNote}</p>
        </Container>
      </Section>

      {/* 8 — Final CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <Image src={page.finalImage} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/65 to-ink/55" />
        <Container className="relative flex flex-col items-center text-center">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">{page.finalBody}</p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <TrackedLink
              href={contactHref}
              event={{ name: 'andario_connect_cta_click', placement: 'final' }}
              cue
            >
              {page.primaryCta}
            </TrackedLink>
            {whatsapp ? (
              <WhatsAppButton
                phone={whatsapp}
                locale={locale}
                context="connect"
                label={page.talkCta}
                variant="inverse"
                event={{ name: 'andario_connect_whatsapp_click' }}
              />
            ) : (
              <TrackedLink
                href={contactHref}
                event={{ name: 'andario_connect_cta_click', placement: 'final-talk' }}
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
