import {
  ArrowUp,
  Building2,
  CalendarCheck,
  Compass,
  Cpu,
  Eye,
  Layers,
  MapPin,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { BrandTriad, Formula, PathStack, RegionMark } from '@/components/graphics/identity';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { LocationBlock } from '@/components/sections/location-block';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { AboutViewContent, Dictionary } from '@/content/types';
import type { AnalyticsEvent } from '@/lib/analytics/events';
import { COMPANY } from '@/lib/config/site';
import { CASES_PUBLISHED, href, SERVICE_IDS, type Locale, type ServiceId } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd, itemListJsonLd } from '@/lib/seo/structured-data';

const shortName: Record<ServiceId, string> = {
  'digital-check': 'Digital Check',
  'andario-web': 'Web',
  'andario-visibility': 'Visibility',
  'andario-booking-engine': 'Booking Engine',
  'andario-connect': 'Connect',
  'andario-content': 'Content',
  'andario-growth': 'Growth',
};

const differentIcons: LucideIcon[] = [Compass, Layers, Cpu, Users, Route];
const principleIcons: LucideIcon[] = [Building2, Search, Layers, Route, ShieldCheck, ArrowUp];
const valueIcons: LucideIcon[] = [Search, Eye, ShieldCheck, Sparkles];

const card = 'rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]';

export function AboutView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const page = dict.aboutView;
  const contact = href(locale, 'contact');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav.about, routeId: 'about' as const },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(page.faqs)} />
      <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
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
            <p className="mt-6 text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{page.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{page.support}</p>
            <p className="mt-4 text-sm font-semibold text-ink">{page.tags}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href={href(locale, 'how-we-work')} event={{ name: 'about_how_we_work_click', placement: 'hero' }} cue>
                {page.howCta}
              </TrackedLink>
              <TalkButton locale={locale} page={page} whatsapp={whatsapp} contact={contact} placement="hero" />
            </div>
            <p className="mt-4 max-w-xl text-sm text-muted">{page.micro}</p>
          </div>
          <BrandTriad brand={page.brand} columns={page.brandColumns} lodging={page.lodging} caption={page.brandCaption} />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.ideaTitle}</h2>
          {page.idea.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          <p className="mt-8 text-2xl font-semibold tracking-tight text-ink">{page.ideaMark}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.whyTitle}</h2>
            {page.why.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-7 text-muted">
                {paragraph}
              </p>
            ))}
            <p className="mt-6 font-semibold text-ink">{page.whyClose}</p>
          </div>
          <PathStack steps={page.whySteps} caption={page.whyCaption} />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.differentTitle}</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.different.map((item, index) => {
              const Icon = differentIcons[index] ?? Compass;
              return (
                <li key={item.title} className={card}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-wash text-teal">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.guideTitle}</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.principles.map((item, index) => {
              const Icon = principleIcons[index] ?? Compass;
              return (
                <li key={item.title} className={card}>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</span>
                    <Icon aria-hidden="true" className="h-5 w-5 text-teal" />
                  </div>
                  <h3 className="mt-3 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              );
            })}
          </ol>
          <div className="mt-8">
            <TrackedLink href={href(locale, 'how-we-work')} event={{ name: 'about_how_we_work_click', placement: 'principles' }} variant="secondary" cue>
              {page.methodCta}
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink">{page.techTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.techBody}</p>
            <p className="mt-4 font-semibold text-ink">{page.techClose}</p>
            <div className="mt-8">
              <TrackedLink
                href={href(locale, 'andario-booking-engine')}
                event={{ name: 'about_booking_engine_click', placement: 'technology' }}
                extra={{ name: 'booking_engine_cta', placement: 'about-technology' }}
                cue
              >
                {page.techCta}
              </TrackedLink>
            </div>
          </div>
          <PathStack steps={page.techSteps} caption={page.techCaption} chip="sand" />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">
              <MapPin aria-hidden="true" className="mr-2 inline h-7 w-7 text-teal" />
              {page.regionTitle}
            </h2>
            {page.region.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <RegionMark origin={page.regionOrigin} horizon={page.regionHorizon} caption={page.regionCaption} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-[var(--radius-card)] bg-sand p-6 sm:p-8">
              <Eye aria-hidden="true" className="h-5 w-5 text-teal" />
              <h2 className="mt-4 text-2xl font-semibold text-ink">{page.visionTitle}</h2>
              <p className="mt-3 leading-7 text-muted">{page.vision}</p>
            </article>
            <article className="rounded-[var(--radius-card)] bg-sand p-6 sm:p-8">
              <CalendarCheck aria-hidden="true" className="h-5 w-5 text-teal" />
              <h2 className="mt-4 text-2xl font-semibold text-ink">{page.missionTitle}</h2>
              <p className="mt-3 leading-7 text-muted">{page.mission}</p>
            </article>
          </div>
          <Formula parts={page.formulaParts} equals={page.formulaEquals} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.behindTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.behindBody}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.values.map((item, index) => {
              const Icon = valueIcons[index] ?? Sparkles;
              return (
                <li key={item.title} className={card}>
                  <Icon aria-hidden="true" className="h-5 w-5 text-teal" />
                  <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.12em] text-teal uppercase">{page.pioneerEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">{page.pioneerTitle}</h2>
          {page.pioneer.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          <p className="mt-6 font-semibold text-ink">{page.pioneerClose}</p>
          {CASES_PUBLISHED ? (
            <div className="mt-8">
              <TrackedLink href={href(locale, 'cases')} event={{ name: 'about_case_click' }} variant="secondary" cue>
                {page.pioneerCta}
              </TrackedLink>
            </div>
          ) : null}
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.futureTitle}</h2>
            {page.future.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-7 text-muted">
                {paragraph}
              </p>
            ))}
            <p className="mt-8 font-semibold text-ink">{page.exploreTitle}</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href={href(locale, 'accommodations')} event={{ name: 'about_solution_click', target: 'accommodations' }} variant="secondary">
                {page.stayCta}
              </TrackedLink>
              <TrackedLink href={href(locale, 'solutions')} event={{ name: 'about_solution_click', target: 'solutions' }} variant="secondary">
                {page.solutionsCta}
              </TrackedLink>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {SERVICE_IDS.map((id) => (
                <TrackedLink
                  key={id}
                  href={href(locale, id)}
                  event={serviceEvent(id)}
                  variant="secondary"
                  className="px-3 py-1.5 text-xs shadow-none"
                >
                  {shortName[id]}
                </TrackedLink>
              ))}
            </div>
          </div>
          <PathStack steps={page.futureSteps} caption={page.futureCaption} />
        </Container>
      </Section>

      <Section>
        <Container>
          <article className="max-w-xl rounded-[var(--radius-card)] border border-sand-deep p-6 sm:p-8">
            <p className="text-sm font-semibold tracking-[0.12em] text-teal uppercase">{COMPANY.parent}</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">{COMPANY.brand}</h2>
            <p className="mt-2 text-muted">{page.companyRole}</p>
            <p className="mt-4 text-sm font-semibold text-ink">NIT {COMPANY.nit}</p>
            <div className="mt-4 text-sm leading-6 text-ink">
              <LocationBlock mapLabel={dict.chrome.map} />
            </div>
          </article>
        </Container>
      </Section>

      <Section className="border-t border-sand-deep">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={page.faqs} openEvent={{ name: 'about_faq_open' }} />
          </div>
        </Container>
      </Section>

      <Section tone="sand" className="pb-24">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TalkButton locale={locale} page={page} whatsapp={whatsapp} contact={contact} placement="final" primary />
            <TrackedLink href={contact} event={{ name: 'about_diagnosis_cta', placement: 'final' }} variant="secondary">
              {page.diagnosisCta}
            </TrackedLink>
          </div>
          <p className="mt-4 max-w-xl text-sm text-muted">{page.finalNote}</p>
        </Container>
      </Section>
    </>
  );
}

function serviceEvent(id: ServiceId): AnalyticsEvent {
  if (id === 'andario-booking-engine') return { name: 'about_booking_engine_click', placement: 'explore' };
  return { name: 'about_solution_click', target: id };
}

function TalkButton({
  locale,
  page,
  whatsapp,
  contact,
  placement,
  primary = false,
}: {
  locale: Locale;
  page: AboutViewContent;
  whatsapp: string | null;
  contact: string;
  placement: string;
  primary?: boolean;
}) {
  if (whatsapp) {
    return (
      <WhatsAppButton
        phone={whatsapp}
        locale={locale}
        context="about"
        label={page.talkCta}
        variant={primary ? 'primary' : 'secondary'}
        event={{ name: 'about_primary_cta', placement }}
        extra={{ name: 'about_whatsapp_click' }}
      />
    );
  }

  return (
    <TrackedLink href={contact} event={{ name: 'about_primary_cta', placement }} variant={primary ? 'primary' : 'secondary'}>
      {page.talkCta}
    </TrackedLink>
  );
}
