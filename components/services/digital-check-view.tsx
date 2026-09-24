import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import {
  DiagnosticMethodology,
  DiagnosticReportMockup,
  DigitalCheckOverview,
  DigitalEcosystemMap,
  FindingToAction,
  PriorityMatrix,
  ServicePath,
} from '@/components/graphics/digital-check';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

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
      <TrackedLink href={contactHref} event={{ name: 'digital_check_cta_click', placement }} cue>
        {primary}
      </TrackedLink>
      {whatsapp ? (
        <WhatsAppButton
          phone={whatsapp}
          locale={locale}
          context="digital-check"
          label={whatsappLabel}
          event={{ name: 'digital_check_whatsapp_click' }}
        />
      ) : null}
    </div>
  );
}

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
    { label: dict.nav.solutions, routeId: 'solutions' as const },
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
      <JsonLd data={faqJsonLd(service.faqs)} />
      <Section tone="sand" className="overflow-hidden">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="text-sm font-semibold tracking-[0.14em] text-teal">DIGITAL CHECK · {service.subtitle}</p>
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
          <DigitalCheckOverview
            caption={page.overviewCaption}
            pieces={page.overviewPieces}
            core={page.overviewCore}
            result={page.overviewResult}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{service.problemTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{service.problem}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.situations.map((situation) => (
              <li key={situation} className="rounded-[var(--radius-card)] bg-sand p-4 text-sm leading-6 text-ink">
                {situation}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.valueTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.valueBody}</p>
            <p className="mt-4 font-semibold text-ink">{page.valueClose}</p>
          </div>
          <ol className="space-y-3">
            {page.valueSteps.map((step, index) => (
              <li key={step} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink">
                <span className="text-teal">{String(index + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.whatTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.whatBody}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.areasTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.areasIntro}</p>
            <p className="mt-4 text-sm leading-6 text-muted">{page.areasNote}</p>
          </div>
          <DigitalEcosystemMap caption={page.mapCaption} center={page.mapCenter} nodes={page.mapNodes} />
        </Container>
        <Container className="mt-10">
          <ol className="grid gap-4 lg:grid-cols-2">
            {page.areas.map((area, index) => (
              <li key={area.title} className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <p className="text-xs font-semibold tracking-wide text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{area.title}</h3>
                <p className="mt-3 text-xs font-semibold tracking-wide text-teal">{page.reviewsLabel}</p>
                <ul className="mt-2 space-y-1">
                  {area.reviews.map((item) => (
                    <li key={item} className="text-sm leading-6 text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm leading-6 text-muted">
                  <span className="font-semibold text-ink">{page.whyLabel}. </span>
                  {area.why}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  <span className="font-semibold text-ink">{page.outcomeLabel}. </span>
                  {area.outcome}
                </p>
              </li>
            ))}
          </ol>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.areasCta}
            whatsapp={whatsapp}
            whatsappLabel={page.talkCta}
            placement="areas"
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.methodTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.methodIntro}</p>
            <LeadPair
              locale={locale}
              contactHref={contactHref}
              primary={page.methodCta}
              whatsapp={whatsapp}
              whatsappLabel={page.talkCta}
              placement="method"
            />
          </div>
          <DiagnosticMethodology steps={page.method} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.matrixTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.matrixIntro}</p>
            <div className="mt-8">
              <PriorityMatrix
                example={page.matrixExample}
                impact={page.matrixImpact}
                effort={page.matrixEffort}
                zones={page.matrixZones}
                points={page.matrixPoints}
              />
            </div>
          </div>
          <FindingToAction example={page.findingExample} steps={page.finding} />
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.receiveTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.receiveIntro}</p>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2">
              {page.receive.map((item, index) => (
                <li key={item.title} className="rounded-[var(--radius-card)] bg-sand p-4">
                  <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              ))}
            </ol>
            <LeadPair
              locale={locale}
              contactHref={contactHref}
              primary={page.receiveCta}
              whatsapp={whatsapp}
              whatsappLabel={page.talkCta}
              placement="receive"
            />
          </div>
          <DiagnosticReportMockup
            note={page.reportNote}
            brand="ANDARIO HOSPITALITY · DIGITAL CHECK"
            heading={page.reportHeading}
            rows={page.reportRows}
            prioritiesTitle={page.reportPrioritiesTitle}
            priorities={page.reportPriorities}
            nextTitle={page.reportNextTitle}
            next={page.reportNext}
          />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.priorityTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.priorityBody}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {page.priorityCriteria.map((item) => (
                <li key={item} className="rounded-full bg-white px-3 py-1.5 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.priorityLevels.map((item) => (
                <li key={item} className="rounded-full bg-teal-wash px-3 py-1.5 text-sm font-semibold text-teal-dark">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.decisionsTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.decisionsIntro}</p>
            <ul className="mt-6 space-y-2">
              {page.decisions.map((item) => (
                <li key={item} className="text-sm leading-6 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.pathTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.pathIntro}</p>
          <div className="mt-8">
            <ServicePath services={page.pathServices} close={page.pathClose} />
          </div>
          <div className="mt-10 max-w-3xl">
            <h2 className="text-2xl font-semibold text-ink">{page.modelTitle}</h2>
            <ol className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {page.model.map((step, index) => (
                <li key={step} className="rounded-full border border-sand-deep px-3 py-1.5 text-sm font-semibold text-ink">
                  {String(index + 1).padStart(2, '0')} {step}
                </li>
              ))}
            </ol>
            <p className="mt-4 leading-7 text-muted">{page.modelClose}</p>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.whoTitle}</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {page.whoTypes.map((type) => (
                <li key={type} className="rounded-full bg-white px-3 py-1.5 text-sm text-ink">
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.whenTitle}</h2>
            <ul className="mt-6 space-y-2">
              {page.when.map((item) => (
                <li key={item} className="text-sm leading-6 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.notTitle}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.not.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] bg-sand p-4">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={service.faqs} openEvent={{ name: 'digital_check_faq_open' }} />
          </div>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.finalCta}
            whatsapp={whatsapp}
            whatsappLabel={page.talkCta}
            placement="faq"
          />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.finalCta}
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
