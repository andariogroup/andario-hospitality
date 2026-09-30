import {
  BarChart3,
  ChartPie,
  Compass,
  Lightbulb,
  LineChart,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';
import Image from 'next/image';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { GrowthDashboard } from '@/components/graphics/growth-dashboard';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

const doIcons = [BarChart3, Search, Target, Lightbulb] as const;
const getIcons = [LineChart, ChartPie, Compass, Sparkles] as const;
const loopIcons = [BarChart3, Search, Lightbulb, TrendingUp] as const;

export function GrowthView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const service = dict.services['andario-growth'];
  const page = dict.growth;
  const contactHref = href(locale, 'contact');
  const howHref = href(locale, 'how-we-work');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: service.name, routeId: 'andario-growth' as const },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          locale,
          routeId: 'andario-growth',
        })}
      />

      <Section tone="sand" className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block" aria-hidden="true">
          <Image
            src={page.heroAtmosphere}
            alt=""
            fill
            priority
            sizes="46vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sand via-sand/80 to-sand/30" />
        </div>
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="mt-5 text-sm font-semibold tracking-[0.14em] text-teal">
              ANDARIO GROWTH · {service.subtitle}
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {service.h1}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">{page.support}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href={contactHref} event={{ name: 'andario_growth_cta_click', placement: 'hero' }} cue>
                {page.primaryCta}
              </TrackedLink>
              {whatsapp ? (
                <WhatsAppButton
                  phone={whatsapp}
                  locale={locale}
                  context="growth"
                  label={page.talkCta}
                  event={{ name: 'andario_growth_whatsapp_click' }}
                />
              ) : (
                <TrackedLink
                  href={contactHref}
                  event={{ name: 'andario_growth_cta_click', placement: 'hero-talk' }}
                  variant="secondary"
                >
                  {page.talkCta}
                </TrackedLink>
              )}
            </div>
            <p className="mt-5 text-sm font-semibold text-ink">{page.concepts.join(' · ')}</p>
          </div>
          <div className="lg:pl-2">
            <GrowthDashboard copy={page} />
          </div>
        </Container>
      </Section>

      <Section className="py-12 sm:py-14">
        <Container>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {page.loop.map((step, index) => {
              const Icon = loopIcons[index] ?? BarChart3;
              return (
                <li key={step.title} className="relative text-center lg:text-left">
                  {index < page.loop.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-5 right-[-0.65rem] hidden text-teal lg:block"
                    >
                      →
                    </span>
                  ) : null}
                  <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-sand-deep bg-white text-teal shadow-[var(--shadow-soft)] lg:mx-0">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-xs font-semibold tracking-[0.12em] text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-ink">{step.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
                </li>
              );
            })}
          </ol>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm italic leading-6 text-muted">{page.loopNote}</p>
        </Container>
      </Section>

      <Section tone="sand" className="py-12 sm:py-16">
        <Container>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.doTitle}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.doItems.map((item, index) => {
              const Icon = doIcons[index] ?? BarChart3;
              return (
                <li
                  key={item.title}
                  className="rounded-[var(--radius-card)] border border-sand-deep/70 bg-white p-5 shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-wash text-teal">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-muted">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.getTitle}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{page.getSupport}</p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {page.getItems.map((item, index) => {
              const Icon = getIcons[index] ?? LineChart;
              return (
                <li key={item.title}>
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

      <Section tone="sand" className="py-0 sm:py-0">
        <Container className="grid overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)] lg:grid-cols-2">
          <div className="relative min-h-72 sm:min-h-96">
            <Image
              src={page.editorialImage}
              alt={page.editorialAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-sand/40 px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">{page.editorialEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.editorialTitle}</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-muted">{page.editorialBody}</p>
            <div className="mt-7">
              <TrackedLink
                href={howHref}
                event={{ name: 'andario_growth_web_click' }}
                variant="secondary"
                cue
              >
                {page.editorialCta}
              </TrackedLink>
            </div>
          </div>
        </Container>
      </Section>

      <section className="relative mt-12 overflow-hidden py-16 sm:mt-16 sm:py-20">
        <Image src={page.finalImage} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/70" />
        <Container className="relative flex flex-col items-center text-center">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">{page.finalBody}</p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <TrackedLink
              href={contactHref}
              event={{ name: 'andario_growth_cta_click', placement: 'final-diagnosis' }}
              cue
            >
              {page.diagnosisCta}
            </TrackedLink>
            {whatsapp ? (
              <WhatsAppButton
                phone={whatsapp}
                locale={locale}
                context="growth"
                label={page.talkCta}
                variant="inverse"
                event={{ name: 'andario_growth_whatsapp_click' }}
              />
            ) : (
              <TrackedLink
                href={contactHref}
                event={{ name: 'andario_growth_cta_click', placement: 'final-talk' }}
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
