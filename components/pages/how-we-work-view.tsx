import {
  ArrowUp,
  Blocks,
  ChartLine,
  CircleCheck,
  Compass,
  Eye,
  Handshake,
  Layers,
  MessagesSquare,
  Search,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { MethodStack, RelationPath, RoutePath } from '@/components/graphics/method';
import { FlowSteps } from '@/components/graphics/solutions';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import type { AnalyticsEvent } from '@/lib/analytics/events';
import { CASES_PUBLISHED, href, type Locale, type ServiceId } from '@/lib/i18n/routes';
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

const stepIcons: LucideIcon[] = [Search, Target, Blocks, ChartLine, Compass];
const pillarIcons: LucideIcon[] = [Search, Target, Layers, ArrowUp];
const expectIcons: LucideIcon[] = [CircleCheck, Eye, Layers, Users, MessagesSquare, Compass];
const togetherIcons: LucideIcon[] = [Handshake, Target, MessagesSquare, Users];

const methodRow: ServiceId[] = ['andario-web', 'andario-visibility', 'andario-content'];
const methodRest: ServiceId[] = ['andario-connect', 'andario-booking-engine', 'andario-growth'];

function solutionEvent(id: ServiceId): AnalyticsEvent {
  if (id === 'andario-booking-engine') return { name: 'how_we_work_booking_engine_click', placement: 'method' };
  return { name: 'how_we_work_solution_click', service: id };
}

export function HowWeWorkView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const page = dict.howWeWorkPage;
  const contact = href(locale, 'contact');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav['how-we-work'], routeId: 'how-we-work' as const },
  ];
  const chip = (id: ServiceId) => (
    <TrackedLink key={id} href={href(locale, id)} event={solutionEvent(id)} variant="secondary" className="px-3 py-2 text-xs shadow-none">
      {shortName[id]}
    </TrackedLink>
  );

  return (
    <>
      <JsonLd data={faqJsonLd(page.faqs)} />
      <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
      <JsonLd
        data={itemListJsonLd(locale, [
          { name: dict.services['digital-check'].name, routeId: 'digital-check' },
          ...methodRow.map((id) => ({ name: dict.services[id].name, routeId: id })),
          ...methodRest.map((id) => ({ name: dict.services[id].name, routeId: id })),
        ])}
      />
      <Section tone="sand" className="overflow-hidden">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <p className="mt-6 text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{page.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{page.support}</p>
            <TalkActions locale={locale} page={page} whatsapp={whatsapp} contact={contact} placement="hero" />
            <p className="mt-4 max-w-xl text-sm text-muted">{page.micro}</p>
          </div>
          <RoutePath steps={page.route} caption={page.routeCaption} />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.firstTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.firstBody}</p>
          <p className="mt-8 text-2xl font-semibold tracking-tight text-ink">{page.firstMark}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.whyTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.whyBody}</p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {page.pillars.map((item, index) => {
              const Icon = pillarIcons[index];
              return (
                <li key={item.title} className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5">
                  {Icon ? (
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-wash text-teal">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  ) : null}
                  <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.stepsTitle}</h2>
          <ol className="mt-10 grid gap-5">
            {page.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <li
                  key={step.title}
                  className="grid gap-5 rounded-[var(--radius-card)] border border-sand-deep bg-white p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[auto_1fr]"
                >
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                    <span className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</span>
                    {Icon ? (
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-wash text-teal">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                    ) : null}
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-[0.12em] text-teal uppercase">{step.title}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-ink">{step.headline}</h3>
                    <p className="mt-3 max-w-3xl leading-7 text-muted">{step.body}</p>
                    {step.points.length > 0 ? (
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {step.points.map((point) => (
                          <li key={point} className="rounded-2xl bg-sand px-3 py-2 text-sm font-semibold text-ink">
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {step.bridge.length > 0 ? (
                      <p className="mt-4 text-sm font-semibold text-ink">{step.bridge.join(' → ')}</p>
                    ) : null}
                    <p className="mt-4 text-sm text-muted">
                      <span className="font-semibold text-ink">{page.resultLabel}. </span>
                      {step.result}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="mt-8 text-xl font-semibold text-ink">{page.stepsClose}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.expectTitle}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.expect.map((item, index) => {
              const Icon = expectIcons[index];
              return (
                <li
                  key={item.title}
                  className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
                >
                  {Icon ? <Icon aria-hidden="true" className="h-5 w-5 text-teal" /> : null}
                  <h3 className="mt-3 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.togetherTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.togetherBody}</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {page.together.map((item, index) => {
              const Icon = togetherIcons[index];
              return (
                <li key={item.title} className="rounded-[var(--radius-card)] bg-sand p-5">
                  {Icon ? <Icon aria-hidden="true" className="h-5 w-5 text-teal" /> : null}
                  <h3 className="mt-3 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-2xl font-semibold tracking-tight text-ink">{page.togetherClose}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.fitTitle}</h2>
          <ul className="mt-6 grid gap-3">
            {page.fit.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink">
                <CircleCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-7 text-muted">{page.fitClose}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.honestTitle}</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {page.honest.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] border border-sand-deep p-5">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-[1fr_0.8fr]">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink">{page.thinkTitle}</h2>
          <FlowSteps steps={page.thinkFlow} />
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.exampleTitle}</h2>
            <p className="mt-4 text-sm leading-6 text-muted">{page.exampleNote}</p>
          </div>
          <ol className="grid gap-3">
            {page.exampleSteps.map((step, index) => (
              <li key={step.title} className="rounded-[var(--radius-card)] bg-sand p-4">
                <p className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink">{page.methodTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.methodBody}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={href(locale, 'accommodations')}
                event={{ name: 'how_we_work_solution_click', service: 'accommodations' }}
                variant="secondary"
              >
                {page.stayCta}
              </TrackedLink>
              {CASES_PUBLISHED ? (
                <TrackedLink href={href(locale, 'cases')} event={{ name: 'case_view' }} variant="secondary">
                  {page.casesCta}
                </TrackedLink>
              ) : null}
            </div>
          </div>
          <MethodStack
            caption={page.methodCaption}
            diagnosis={chip('digital-check')}
            row={methodRow.map((id) => chip(id))}
            rest={methodRest.map((id) => chip(id))}
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink">{page.bookingTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.bookingBody}</p>
            <p className="mt-4 text-sm leading-6 text-muted">{page.bookingNote}</p>
            <div className="mt-8">
              <TrackedLink
                href={href(locale, 'andario-booking-engine')}
                event={{ name: 'how_we_work_booking_engine_click', placement: 'feature' }}
                extra={{ name: 'booking_engine_cta', placement: 'how-we-work-feature' }}
                cue
              >
                {page.bookingCta}
              </TrackedLink>
            </div>
          </div>
          <FlowSteps steps={['Web', 'WhatsApp', 'Booking Engine']} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_1fr]">
          <RelationPath steps={page.relationFlow} />
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.relationTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.relationBody}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.clearTitle}</h2>
          <ol className="mt-8 grid gap-4 lg:grid-cols-3">
            {page.clear.map((item, index) => (
              <li key={item.title} className="rounded-[var(--radius-card)] bg-sand p-5">
                <p className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="border-t border-sand-deep">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={page.faqs} openEvent={{ name: 'how_we_work_faq_open' }} />
          </div>
        </Container>
      </Section>

      <Section tone="sand" className="pb-24">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
          <TalkActions locale={locale} page={page} whatsapp={whatsapp} contact={contact} placement="final" />
          <p className="mt-4 max-w-xl text-sm text-muted">{page.finalNote}</p>
        </Container>
      </Section>
    </>
  );
}

function TalkActions({
  locale,
  page,
  whatsapp,
  contact,
  placement,
}: {
  locale: Locale;
  page: Dictionary['howWeWorkPage'];
  whatsapp: string | null;
  contact: string;
  placement: string;
}) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {whatsapp ? (
        <WhatsAppButton
          phone={whatsapp}
          locale={locale}
          context="how-we-work"
          label={page.primaryCta}
          variant="primary"
          event={{ name: 'how_we_work_primary_cta', placement }}
        />
      ) : (
        <TrackedLink href={contact} event={{ name: 'how_we_work_primary_cta', placement }} cue>
          {page.primaryCta}
        </TrackedLink>
      )}
      <TrackedLink href={contact} event={{ name: 'how_we_work_diagnosis_cta', placement }} variant="secondary">
        {page.secondaryCta}
      </TrackedLink>
    </div>
  );
}
