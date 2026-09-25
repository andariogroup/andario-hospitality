import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { PillarGrid } from '@/components/graphics/solutions';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { serviceIcons } from '@/components/graphics/icons';
import { AccommodationDigitalMaturity } from '@/components/services/maturity-picker';
import { NeedPathCard } from '@/components/services/need-path-card';
import { ServiceCard } from '@/components/services/service-card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, SERVICE_IDS, type Locale, type ServiceId } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd, itemListJsonLd } from '@/lib/seo/structured-data';
import { CalendarDays, ChartLine, Megaphone, MessageCircle, Monitor, Search, type LucideIcon } from 'lucide-react';
import Image from 'next/image';

function serviceHref(locale: Locale, id: ServiceId) {
  return href(locale, id);
}

const PROBLEM_ICONS: LucideIcon[] = [Monitor, Search, MessageCircle, CalendarDays, Megaphone, ChartLine];

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
  const CheckIcon = serviceIcons['digital-check'];
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav.solutions, routeId: 'solutions' as const },
  ];
  const scenarios = page.scenarios.map((scenario) => ({
    title: scenario.title,
    summary: scenario.summary,
    body: scenario.result,
    cta: scenario.cta,
    placement: scenario.placement,
    actionHref: serviceHref(locale, scenario.service),
    actionService: scenario.service,
    services: [
      {
        href: serviceHref(locale, scenario.service),
        name: dict.services[scenario.service].name,
        service: scenario.service,
      },
    ],
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
      <Section tone="sand">
        <Container className="grid items-center gap-8 lg:max-w-[90rem] lg:grid-cols-[34rem_minmax(0,1fr)] lg:gap-8">
          <div className="min-w-0">
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{page.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{page.support}</p>
            <p className="mt-4 max-w-2xl font-semibold text-ink">{page.assist}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href={contactHref} event={{ name: 'solutions_diagnosis_click', placement: 'hero' }} cue>
                {page.primaryCta}
              </TrackedLink>
              {whatsapp ? (
                <WhatsAppButton
                  phone={whatsapp}
                  locale={locale}
                  context="solutions"
                  label={page.secondaryCta}
                  event={{ name: 'solutions_whatsapp_click' }}
                />
              ) : (
                <TrackedLink href={contactHref} event={{ name: 'solutions_diagnosis_click', placement: 'hero-talk' }} variant="secondary">
                  {page.secondaryCta}
                </TrackedLink>
              )}
            </div>
            <p className="mt-4 max-w-xl text-sm text-muted">{page.micro}</p>
          </div>
          <Image
            src="/solutions/digital-journey.webp"
            alt={page.heroAlt}
            width={1024}
            height={682}
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="h-auto w-full"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.problemTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.problemIntro}</p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.problems.map((problem, index) => {
              const Icon = PROBLEM_ICONS[index] ?? Monitor;
              return (
                <li
                  key={problem}
                  className="group rounded-[var(--radius-card)] border border-sand-deep bg-sand p-5 transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-teal"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-ink transition duration-200 group-hover:text-teal">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                  </div>
                  <p className="mt-4 text-base leading-7 text-ink">{problem}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      <Section id="situacion" tone="sand" className="scroll-mt-28">
        <Container className="grid items-start gap-8 lg:grid-cols-[0.82fr_1fr] lg:gap-10">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.whereTitle}</h2>
            <p className="mt-4 max-w-md leading-7 text-muted">{page.whereIntro}</p>
            <Image
              src="/solutions/reception.webp"
              alt={page.whereAlt}
              width={1024}
              height={663}
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="mt-8 aspect-[4/3] w-[88%] rounded-[var(--radius-card)] border border-sand-deep object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
          <AccommodationDigitalMaturity
            label={page.whereTitle}
            contactHref={contactHref}
            resultLabel={page.resultLabel}
            scenarios={scenarios}
          />
        </Container>
      </Section>

      <Section id="soluciones" className="scroll-mt-28">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.cardsTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.cardsSupport}</p>
          <article className="mt-10 grid items-center gap-6 rounded-[var(--radius-card)] border border-sand-deep bg-sand p-6 sm:p-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-teal">
                <CheckIcon aria-hidden="true" className="h-6 w-6" />
              </span>
              <p className="mt-5 text-sm font-semibold text-teal">{page.checkPrompt}</p>
              <h3 className="mt-2 text-2xl font-semibold text-ink">{dict.services['digital-check'].name}</h3>
              <p className="mt-1 text-sm font-medium text-ink">{page.cards['digital-check'].category}</p>
              <p className="mt-4 max-w-2xl leading-7 text-muted">{page.cards['digital-check'].body}</p>
              <p className="mt-3 max-w-2xl font-semibold text-ink">{page.checkNote}</p>
            </div>
            <TrackedLink href={serviceHref(locale, 'digital-check')} event={{ name: 'solutions_service_click', service: 'digital-check' }} variant="secondary" cue>
              {page.cards['digital-check'].cta}
            </TrackedLink>
          </article>
          <h3 className="mt-14 max-w-3xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{page.portfolioTitle}</h3>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.portfolioBody}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_IDS.filter((id) => id !== 'digital-check').map((id) => {
              const card = page.cards[id];
              const featured = id === 'andario-booking-engine';
              return (
                <ServiceCard
                  key={id}
                  href={serviceHref(locale, id)}
                  name={dict.services[id].name}
                  subtitle={card.category}
                  summary={card.body}
                  cta={card.cta}
                  serviceId={id}
                  featured={featured}
                  badge={featured ? page.ownTech : undefined}
                  event={{ name: 'solutions_service_click', service: id }}
                />
              );
            })}
          </div>
          <div className="mt-14 max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight text-ink">{page.unsureTitle}</h3>
            <p className="mt-3 leading-7 text-muted">{page.unsureBody}</p>
            <div className="mt-6">
              <TrackedLink href={contactHref} event={{ name: 'solutions_diagnosis_click', placement: 'portfolio' }} cue>
                {page.unsureCta}
              </TrackedLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="caminos" tone="sand" className="scroll-mt-28">
        <Container>
          <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.paceEyebrow}</p>
          <h2 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{page.paceTitle}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{page.paceBody}</p>
          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {page.paths.map((item) => (
              <li
                key={item.service}
                className="h-full md:[&:last-child:nth-child(odd)]:col-span-2 md:[&:last-child:nth-child(odd)]:w-[calc(50%-0.625rem)] md:[&:last-child:nth-child(odd)]:justify-self-center"
              >
                <NeedPathCard
                  href={serviceHref(locale, item.service)}
                  need={item.need}
                  support={item.support}
                  solution={dict.services[item.service].name}
                  serviceId={item.service}
                  badge={item.service === 'andario-booking-engine' ? page.ownTech : undefined}
                />
              </li>
            ))}
          </ul>
          <div className="mt-16 max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{page.paceCloseTitle}</h3>
            <p className="mt-4 leading-7 text-muted">{page.paceCloseBody}</p>
            <div className="mt-6">
              <TrackedLink href={contactHref} event={{ name: 'solutions_diagnosis_click', placement: 'pace' }} cue>
                {page.paceCta}
              </TrackedLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.trustTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{page.trustSupport}</p>
          <div className="mt-10">
            <PillarGrid items={page.pillars} />
          </div>
          <div className="mx-auto mt-10 max-w-2xl border-t border-sand-deep pt-8 text-center">
            <p className="font-semibold text-ink">{page.trustNoteTitle}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{page.trustNoteBody}</p>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={page.faqs} openEvent={{ name: 'solutions_faq_open' }} />
          </div>
        </Container>
      </Section>

      <Section>
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
