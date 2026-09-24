import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import {
  GrowthDataLoop,
  GrowthDecisionHub,
  GrowthEcosystem,
  GrowthMeasureMap,
  GrowthProcess,
  GrowthSourceScatter,
  StepList,
} from '@/components/graphics/growth';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import type { AnalyticsEvent } from '@/lib/analytics/events';
import { href, type Locale, type RouteId } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

const relationRoutes: { routeId: RouteId; event: AnalyticsEvent }[] = [
  { routeId: 'digital-check', event: { name: 'andario_growth_cta_click', placement: 'digital-check' } },
  { routeId: 'andario-web', event: { name: 'andario_growth_web_click' } },
  { routeId: 'andario-visibility', event: { name: 'andario_growth_cta_click', placement: 'visibility' } },
  { routeId: 'andario-connect', event: { name: 'andario_growth_cta_click', placement: 'connect' } },
  { routeId: 'andario-content', event: { name: 'andario_growth_cta_click', placement: 'content' } },
  { routeId: 'andario-booking-engine', event: { name: 'andario_growth_cta_click', placement: 'booking' } },
];

function LeadPair({
  locale,
  contactHref,
  primary,
  whatsapp,
  whatsappLabel,
  placement,
}: {
  locale: Locale;
  contactHref: string;
  primary: string;
  whatsapp: string | null;
  whatsappLabel: string;
  placement: string;
}) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <TrackedLink href={contactHref} event={{ name: 'andario_growth_cta_click', placement }} cue>
        {primary}
      </TrackedLink>
      {whatsapp ? (
        <WhatsAppButton
          phone={whatsapp}
          locale={locale}
          context="growth"
          label={whatsappLabel}
          event={{ name: 'andario_growth_whatsapp_click' }}
        />
      ) : null}
    </div>
  );
}

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
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav.solutions, routeId: 'solutions' as const },
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
      <JsonLd data={faqJsonLd(service.faqs)} />
      <Section tone="sand" className="overflow-hidden">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="text-sm font-semibold tracking-[0.14em] text-teal">
              ANDARIO GROWTH · {locale === 'es' ? 'ANALYTICS + OPTIMIZACIÓN' : 'ANALYTICS + OPTIMIZATION'}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{service.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{page.support}</p>
            <LeadPair
              locale={locale}
              contactHref={contactHref}
              primary={page.primaryCta}
              whatsapp={whatsapp}
              whatsappLabel={page.talkCta}
              placement="hero"
            />
            <p className="mt-4 max-w-xl text-sm text-muted">{page.audienceLine}</p>
          </div>
          <GrowthDataLoop steps={page.loop} note={page.loopNote} label={page.exampleLabel} />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{service.problemTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{service.problem}</p>
          <div className="mt-8">
            <GrowthSourceScatter sources={page.sources} note={page.sourceNote} />
          </div>
          <p className="mt-6 max-w-3xl text-sm font-semibold text-ink">{page.guessLine}</p>
          <div className="mt-10">
            <GrowthDecisionHub items={page.hub} />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.questionsTitle}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.questions.map((question) => (
              <li key={question} className="rounded-[var(--radius-card)] bg-white p-4 text-sm leading-6 text-ink">
                {question}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">{page.questionsNote}</p>
          <div className="mt-12 max-w-3xl">
            <h2 className="text-2xl font-semibold text-ink">{page.whatTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.whatBody}</p>
            <p className="mt-4 text-sm font-semibold text-ink">{page.whatNote}</p>
          </div>
          <div className="mt-10">
            <GrowthEcosystem caption={page.ecosystemCaption} columns={page.ecosystemColumns} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.measureTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.measureIntro}</p>
          <p className="mt-3 text-sm font-semibold text-teal">{page.scopeLabel}</p>
          <div className="mt-8">
            <GrowthMeasureMap groups={page.measureGroups} note={page.measureNote} />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.channelsTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.channelsBody}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.channels.map((channel) => (
              <li key={channel.title} className="rounded-[var(--radius-card)] bg-white p-4">
                <h3 className="font-semibold text-ink">{channel.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{channel.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">{page.channelsNote}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.includesTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.includesIntro}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {page.groups.map((group) => (
              <article key={group.title} className="rounded-[var(--radius-card)] bg-sand p-5">
                <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  <span className="font-semibold text-ink">{page.whatLabel}. </span>
                  {group.what}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  <span className="font-semibold text-ink">{page.purposeLabel}. </span>
                  {group.purpose}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 max-w-3xl">
            <h2 className="text-2xl font-semibold text-ink">{page.privacyTitle}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.privacyPoints.map((point) => (
                <li key={point} className="rounded-full border border-sand-deep px-3 py-1.5 text-sm text-ink">
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-muted">{page.privacyNote}</p>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-8 lg:grid-cols-2">
          {page.relations.map((relation, index) => {
            const link = relationRoutes[index];
            return (
              <article key={relation.title}>
                <h2 className="text-2xl font-semibold text-ink">{relation.title}</h2>
                <p className="mt-3 leading-7 text-muted">{relation.body}</p>
                <div className="mt-4">
                  <StepList steps={relation.steps} />
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{relation.note}</p>
                {link ? (
                  <TrackedLink href={href(locale, link.routeId)} event={link.event} variant="secondary" className="mt-4">
                    {relation.hrefLabel}
                  </TrackedLink>
                ) : null}
              </article>
            );
          })}
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.processTitle}</h2>
          <div className="mt-8">
            <GrowthProcess steps={page.process} />
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-ink">{page.receiveTitle}</h2>
              <ul className="mt-4 space-y-2">
                {page.receive.map((item) => (
                  <li key={item} className="rounded-2xl bg-sand px-4 py-3 text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-6 text-muted">{page.receiveNote}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-ink">{page.whoTitle}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {page.whoTypes.map((type) => (
                  <li key={type} className="rounded-full bg-sand px-3 py-1.5 text-sm font-semibold text-ink">
                    {type}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 grid gap-2">
                {page.whoFit.map((item) => (
                  <li key={item} className="rounded-2xl border border-sand-deep px-4 py-3 text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.notTitle}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.not.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] bg-white p-4">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-ink">{page.ecosystemTitle}</h2>
            <ol className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {page.ecosystemSteps.map((step, index) => (
                <li key={`${step}-${index}`} className="rounded-full border border-sand-deep bg-white px-3 py-1.5 text-sm font-semibold text-ink">
                  {String(index + 1).padStart(2, '0')} {step}
                </li>
              ))}
            </ol>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">{page.ecosystemNote}</p>
          </div>
          <article className="mt-10 max-w-3xl rounded-[var(--radius-card)] border border-sand-deep bg-white p-5">
            <h2 className="text-xl font-semibold text-ink">{page.pioneerTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{page.pioneerBody}</p>
          </article>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={service.faqs} openEvent={{ name: 'andario_growth_faq_open' }} />
          </div>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.talkCta}
            whatsapp={whatsapp}
            whatsappLabel={page.whatsappCta}
            placement="faq"
          />
        </Container>
      </Section>

      <Section tone="sand" className="pb-24">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.primaryCta}
            whatsapp={whatsapp}
            whatsappLabel={page.talkCta}
            placement="final"
          />
          <p className="mt-4 max-w-xl text-sm text-muted">{page.finalNote}</p>
        </Container>
      </Section>
    </>
  );
}
