import {
  BarChart3,
  CalendarCheck,
  ClipboardList,
  Compass,
  Eye,
  FileSearch,
  Lightbulb,
  ListChecks,
  Map,
  Route,
  Search,
  Sparkles,
  Target,
} from 'lucide-react';
import Image from 'next/image';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { DigitalCheckDevices } from '@/components/graphics/digital-check-devices';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

const benefitIcons = [Search, Route, ListChecks, Map] as const;
const lensIcons = [Eye, Sparkles, CalendarCheck, BarChart3] as const;
const receiveIcons = [FileSearch, Search, ListChecks, Target, Map] as const;
const actionIcons = [ClipboardList, Route, Lightbulb, BarChart3, Compass] as const;

export function DigitalCheckView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const service = dict.services['digital-check'];
  const page = dict.digitalCheck;
  const contactHref = href(locale, 'contact');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: service.name, routeId: 'digital-check' as const },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          locale,
          routeId: 'digital-check',
        })}
      />

      <Section tone="sand" className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] lg:block" aria-hidden="true">
          <Image src={page.heroAtmosphere} alt="" fill sizes="44vw" className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-sand via-sand/85 to-sand/25" />
        </div>
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="mt-5 text-sm font-semibold tracking-[0.14em] text-teal">
              DIGITAL CHECK · {service.subtitle}
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.1rem] lg:leading-[1.12]">
              {service.h1}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">{page.support}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href={contactHref} event={{ name: 'digital_check_cta_click', placement: 'hero' }} cue>
                {page.primaryCta}
              </TrackedLink>
              {whatsapp ? (
                <WhatsAppButton
                  phone={whatsapp}
                  locale={locale}
                  context="digital-check"
                  label={page.talkCta}
                  event={{ name: 'digital_check_whatsapp_click' }}
                />
              ) : (
                <TrackedLink
                  href={contactHref}
                  event={{ name: 'digital_check_cta_click', placement: 'hero-talk' }}
                  variant="secondary"
                >
                  {page.talkCta}
                </TrackedLink>
              )}
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
              {page.benefits.map((item, index) => {
                const Icon = benefitIcons[index] ?? Search;
                return (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-teal shadow-[var(--shadow-soft)]">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <DigitalCheckDevices copy={page} photo="/digital-check/dashboard-photo.webp" />
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.problemTitle}</h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-muted">{page.problemBody}</p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {page.problemSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="overflow-hidden rounded-[var(--radius-card)] border border-sand-deep bg-white shadow-[var(--shadow-soft)]"
                >
                  <div className="relative aspect-[16/10]">
                    <Image src={step.image} alt={step.title} fill sizes="220px" className="object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold tracking-[0.12em] text-teal">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="sand" className="py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative min-h-80 overflow-hidden rounded-[var(--radius-card)] sm:min-h-[30rem]">
            <Image
              src={page.whatImage}
              alt={page.whatAlt}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">{page.whatEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.whatTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{page.whatBody}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {page.lenses.map((item, index) => {
                const Icon = lensIcons[index] ?? Eye;
                return (
                  <li key={item.title} className="rounded-[var(--radius-card)] border border-sand-deep/70 bg-white p-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-wash text-teal">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 flex gap-3 rounded-[var(--radius-card)] bg-teal-wash px-4 py-4 text-sm leading-6 text-ink">
              <Lightbulb aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <span>{page.whatNote}</span>
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container>
          <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">{page.receiveEyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.receiveTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{page.receiveBody}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {page.receive.map((item, index) => {
              const Icon = receiveIcons[index] ?? FileSearch;
              return (
                <li
                  key={item.title}
                  className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 shadow-[var(--shadow-soft)]"
                >
                  <p className="text-xs font-semibold tracking-[0.12em] text-teal">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <span className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-wash text-teal">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section tone="sand" className="py-12 sm:py-14">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.resultTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{page.resultBody}</p>
          <ol className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {page.resultFlow.map((step, index) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink shadow-[var(--shadow-soft)]">
                  {step}
                </span>
                {index < page.resultFlow.length - 1 ? (
                  <span aria-hidden="true" className="font-semibold text-teal">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.actionTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{page.actionBody}</p>
          <ol className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            {page.actionFlow.map((step, index) => {
              const Icon = actionIcons[index] ?? ClipboardList;
              return (
                <li key={step} className="relative flex flex-1 flex-col items-center text-center">
                  {index < page.actionFlow.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-6 left-[calc(50%+1.75rem)] hidden h-px w-[calc(100%-3.5rem)] border-t border-dashed border-teal/40 sm:block"
                    />
                  ) : null}
                  <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-sand-deep bg-sand text-teal">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink">{step}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <Image src={page.finalImage} alt={page.finalAlt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/70" />
        <Container className="relative flex flex-col items-center text-center">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">{page.finalBody}</p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <TrackedLink href={contactHref} event={{ name: 'digital_check_cta_click', placement: 'final' }} cue>
              {page.primaryCta}
            </TrackedLink>
            {whatsapp ? (
              <WhatsAppButton
                phone={whatsapp}
                locale={locale}
                context="digital-check"
                label={page.talkCta}
                variant="inverse"
                event={{ name: 'digital_check_whatsapp_click' }}
              />
            ) : (
              <TrackedLink
                href={contactHref}
                event={{ name: 'digital_check_cta_click', placement: 'final-talk' }}
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
