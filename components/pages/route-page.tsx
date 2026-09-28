import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { FaqList } from '@/components/sections/faq-list';
import { ContactActions } from '@/components/conversion/contact-actions';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { JsonLd } from '@/components/seo/json-ld';
import type { Dictionary } from '@/content/types';
import { href, isServiceId, SERVICE_IDS, type Locale, type RouteId } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

export async function RoutePage({
  locale,
  routeId,
  dict,
  whatsapp,
}: {
  locale: Locale;
  routeId: RouteId;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  if (isServiceId(routeId)) {
    return <ServicePage locale={locale} routeId={routeId} dict={dict} whatsapp={whatsapp} />;
  }

  if (routeId === 'solutions') {
    const { SolutionsView } = await import('@/components/services/solutions-view');
    return <SolutionsView locale={locale} dict={dict} whatsapp={whatsapp} />;
  }
  if (routeId === 'accommodations') {
    const { AccommodationsView } = await import('@/components/pages/accommodations-view');
    return <AccommodationsView locale={locale} dict={dict} whatsapp={whatsapp} />;
  }
  if (routeId === 'how-we-work') {
    const { HowWeWorkView } = await import('@/components/pages/how-we-work-view');
    return <HowWeWorkView locale={locale} dict={dict} whatsapp={whatsapp} />;
  }
  if (routeId === 'cases') {
    return (
      <>
        <CasesPage locale={locale} dict={dict} />
        <DecisionBand locale={locale} dict={dict} whatsapp={whatsapp} placement="cases" />
      </>
    );
  }
  if (routeId === 'about') {
    const { AboutView } = await import('@/components/pages/about-view');
    return <AboutView locale={locale} dict={dict} whatsapp={whatsapp} />;
  }
  if (routeId === 'faq') {
    return (
      <>
        <FaqPage locale={locale} dict={dict} />
        <DecisionBand locale={locale} dict={dict} whatsapp={whatsapp} placement="faq" />
      </>
    );
  }
  if (routeId === 'contact') {
    const { ContactView } = await import('@/components/pages/contact-view');
    return <ContactView locale={locale} dict={dict} whatsapp={whatsapp} />;
  }
  if (routeId === 'terms') {
    const { TermsView } = await import('@/components/pages/terms-view');
    return <TermsView locale={locale} dict={dict} />;
  }
  if (routeId === 'privacy') return <LegalPage locale={locale} dict={dict} />;

  return null;
}

function DecisionBand({
  locale,
  dict,
  whatsapp,
  placement,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
  placement: string;
}) {
  return (
    <Section tone="ink">
      <Container>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{dict.home.finalTitle}</h2>
        <p className="mt-4 max-w-2xl leading-7 text-white/80">{dict.home.final}</p>
        <div className="mt-8">
          <ContactActions
            href={href(locale, 'contact')}
            primary={dict.chrome.primaryCta}
            whatsapp={whatsapp}
            locale={locale}
            whatsappLabel={dict.chrome.secondaryCta}
            whatsappContext="diagnosis"
            event={{ name: 'diagnosis_cta_click', placement }}
            steps={dict.chrome.ctaSteps}
            note={dict.chrome.ctaNote}
          />
        </div>
      </Container>
    </Section>
  );
}

function PageIntro({
  locale,
  title,
  lead,
  crumbs,
}: {
  locale: Locale;
  title: string;
  lead: string;
  crumbs: { label: string; routeId: RouteId }[];
}) {
  return (
    <Section tone="sand" className="pb-12">
      <Container>
        <Breadcrumbs locale={locale} items={crumbs} />
        <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{lead}</p>
      </Container>
    </Section>
  );
}

async function ServicePage({
  locale,
  routeId,
  dict,
  whatsapp,
}: {
  locale: Locale;
  routeId: Extract<RouteId, (typeof SERVICE_IDS)[number]>;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const service = dict.services[routeId];
  if (routeId === 'digital-check') {
    const { DigitalCheckView } = await import('@/components/services/digital-check-view');
    return <DigitalCheckView locale={locale} dict={dict} whatsapp={whatsapp} />;
  }
  if (routeId === 'andario-web') {
    const { AndarioWebView } = await import('@/components/services/andario-web-view');
    return <AndarioWebView locale={locale} dict={dict} whatsapp={whatsapp} />;
  }
  if (routeId === 'andario-visibility') {
    const { VisibilityView } = await import('@/components/services/visibility-view');
    return <VisibilityView locale={locale} dict={dict} whatsapp={whatsapp} />;
  }
  if (routeId === 'andario-connect') {
    const { ConnectView } = await import('@/components/services/connect-view');
    return <ConnectView locale={locale} dict={dict} whatsapp={whatsapp} />;
  }
  if (routeId === 'andario-content') {
    const { ContentView } = await import('@/components/services/content-view');
    return <ContentView locale={locale} dict={dict} whatsapp={whatsapp} />;
  }
  if (routeId === 'andario-growth') {
    const { GrowthView } = await import('@/components/services/growth-view');
    return <GrowthView locale={locale} dict={dict} whatsapp={whatsapp} />;
  }
  if (routeId === 'andario-booking-engine') {
    const { BookingEngineView } = await import('@/components/services/booking-engine-view');
    return <BookingEngineView locale={locale} dict={dict} whatsapp={whatsapp} />;
  }
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav.solutions, routeId: 'solutions' as const },
    { label: service.name, routeId },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          locale,
          routeId,
        })}
      />
      <PageIntro locale={locale} title={service.h1} lead={service.intro} crumbs={crumbs} />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-ink">{service.problemTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{service.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-ink">{service.solutionTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{service.solution}</p>
          </div>
        </Container>
      </Section>
      <Section tone="sand">
        <Container>
          <h2 className="text-2xl font-semibold text-ink">{service.includedTitle}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.included.map((item) => (
              <li key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-2xl font-semibold text-ink">{service.howTitle}</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {service.steps.map((step, index) => (
              <li key={step.title}>
                <p className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl leading-7 text-muted">{service.ecosystem}</p>
          {service.note ? <p className="mt-6 max-w-3xl font-semibold text-ink">{service.note}</p> : null}
          {service.futureTitle && service.future.length > 0 ? (
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-ink">{service.futureTitle}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.future.map((item) => (
                  <li key={item} className="rounded-full bg-sand px-3 py-1 text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </Section>
      <Section tone="sand">
        <Container>
          <h2 className="text-2xl font-semibold text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={service.faqs} />
          </div>
        </Container>
      </Section>
      <Section tone="ink">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold">{service.ctaTitle}</h2>
          <div className="mt-8">
            <ContactActions
              href={href(locale, 'contact')}
              primary={service.ctaLabel}
              whatsapp={whatsapp}
              locale={locale}
              whatsappLabel={dict.chrome.secondaryCta}
              whatsappContext="service"
              event={{ name: 'diagnosis_cta_click', placement: routeId }}
              steps={dict.chrome.ctaSteps}
              note={dict.chrome.ctaNote}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}

function CasesPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
      <PageIntro
        locale={locale}
        title={dict.casesPage.h1}
        lead={dict.casesPage.lead}
        crumbs={[
          { label: dict.nav.home, routeId: 'home' },
          { label: dict.nav.cases, routeId: 'cases' },
        ]}
      />
      <Section>
        <Container>
          <article className="max-w-3xl rounded-[var(--radius-card)] border border-sand-deep p-8">
            <p className="text-sm font-semibold text-teal">{dict.casesPage.label}</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">{dict.casesPage.name}</h2>
            <p className="mt-2 text-muted">{dict.casesPage.place}</p>
            {dict.casesPage.body.map((paragraph) => (
              <p key={paragraph} className="mt-6 leading-7 text-muted">
                {paragraph}
              </p>
            ))}
            <p className="mt-6 font-semibold text-ink">{dict.casesPage.pending}</p>
          </article>
        </Container>
      </Section>
    </>
  );
}

function FaqPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
      <JsonLd data={faqJsonLd(dict.faqPage.items)} />
      <PageIntro
        locale={locale}
        title={dict.faqPage.h1}
        lead={dict.faqPage.lead}
        crumbs={[
          { label: dict.nav.home, routeId: 'home' },
          { label: dict.nav.faq, routeId: 'faq' },
        ]}
      />
      <Section>
        <Container>
          <FaqList items={dict.faqPage.items} />
        </Container>
      </Section>
    </>
  );
}

function LegalPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const page = dict.legal.privacy;
  return (
    <>
      <PageIntro
        locale={locale}
        title={page.h1}
        lead={page.lead}
        crumbs={[
          { label: dict.nav.home, routeId: 'home' },
          { label: dict.nav.privacy, routeId: 'privacy' },
        ]}
      />
      <Section>
        <Container className="max-w-3xl">
          {page.sections.map((section) => (
            <section key={section.title} className="mt-10">
              <h2 className="text-2xl font-semibold text-ink">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-7 text-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <p className="mt-10 text-sm text-muted">{dict.legal.review}</p>
        </Container>
      </Section>
    </>
  );
}
