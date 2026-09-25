import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { FlowSteps, PillarGrid } from '@/components/graphics/solutions';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { CASES_PUBLISHED, href, type Locale, type ServiceId } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo/structured-data';
import Image from 'next/image';

function Actions({
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
      <TrackedLink href={contact} event={{ name: 'how_we_work_diagnosis_cta', placement }} cue>
        {page.primaryCta}
      </TrackedLink>
      {whatsapp ? (
        <WhatsAppButton
          phone={whatsapp}
          locale={locale}
          context="how-we-work"
          label={page.secondaryCta}
          event={{ name: 'how_we_work_primary_cta', placement }}
        />
      ) : null}
    </div>
  );
}

function NumberedSteps({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
      {items.map((item, index) => (
        <li key={item.title} className="border-t border-sand-deep pt-5">
          <p aria-hidden="true" className="text-sm font-semibold text-teal">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-ink">{item.title}</h3>
          <p className="mt-2 leading-7 text-muted">{item.body}</p>
        </li>
      ))}
    </ol>
  );
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

  return (
    <>
      <JsonLd data={faqJsonLd(page.faqs)} />
      <Section tone="sand">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{page.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{page.support}</p>
            <Actions locale={locale} page={page} whatsapp={whatsapp} contact={contact} placement="hero" />
            <p className="mt-4 max-w-xl text-sm text-muted">{page.micro}</p>
          </div>
          <Image
            src="/how-we-work/hero-facade.jpg"
            alt={page.heroAlt}
            width={1024}
            height={935}
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="h-auto w-full rounded-[var(--radius-card)]"
          />
        </Container>
      </Section>

      <Section id="metodo" className="scroll-mt-28">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.methodTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.methodBody}</p>
          <NumberedSteps items={page.method} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.checkTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.checkBody}</p>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {page.questions.map((item, index) => (
              <li key={item.title}>
                <p aria-hidden="true" className="text-sm font-semibold text-teal">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.receiveTitle}</h2>
          <NumberedSteps items={page.receive} />
          <Actions locale={locale} page={page} whatsapp={whatsapp} contact={contact} placement="receive" />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.roadmapTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.roadmapBody}</p>
          </div>
          <FlowSteps steps={page.roadmap} caption={page.roadmapLabel} chip="white" />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.decisionTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.decisionBody}</p>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-ink">
            {page.decisionParts.map((part, index) => (
              <span key={part} className="inline-flex items-center gap-3">
                {index > 0 ? <span>+</span> : null}
                <span className="rounded-full bg-sand px-4 py-2">{part}</span>
              </span>
            ))}
            <span>=</span>
            <span className="rounded-full bg-teal px-4 py-2 text-white">{page.decisionEquals}</span>
          </p>
          <p className="mt-6 font-semibold text-ink">{page.decisionNote}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.approveTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.approveBody}</p>
          <ol className="mt-8 flex flex-col gap-4 border-l border-teal/30 pl-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:border-l-0 sm:pl-0">
            {page.approveFlow.map((step, index) => (
              <li key={step} className="flex items-center gap-2 text-sm font-semibold text-ink">
                {index > 0 ? <span className="hidden text-teal sm:inline">→</span> : null}
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-6 leading-7 text-muted">{page.approveNote}</p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.paceTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-muted">{page.paceBody}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.knownTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-muted">{page.knownBody}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.principlesTitle}</h2>
          <div className="mt-10">
            <PillarGrid items={page.principles} />
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-semibold text-ink">{page.principlesMark}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <p className="text-lg leading-8 text-ink">{page.solutionsBody}</p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {page.solutionIds.map((id) => (
              <li key={id}>
                <TrackedLink
                  href={href(locale, id)}
                  variant="ghost"
                  className="h-auto min-h-11 rounded-md px-1 py-2 text-teal shadow-none hover:translate-y-0 hover:bg-transparent hover:text-teal-dark"
                  event={solutionEvent(id)}
                >
                  {dict.services[id].name}
                </TrackedLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <p className="text-lg leading-8 text-ink">{page.bookingBody}</p>
          <div className="mt-6">
            <TrackedLink
              href={href(locale, 'andario-booking-engine')}
              event={{ name: 'how_we_work_booking_engine_click', placement: 'feature' }}
              extra={{ name: 'booking_engine_cta', placement: 'how-we-work-feature' }}
              cue
            >
              {page.bookingCta}
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{page.pioneerTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.pioneerBody}</p>
          {CASES_PUBLISHED ? (
            <div className="mt-6">
              <TrackedLink href={href(locale, 'cases')} event={{ name: 'how_we_work_case_click' }} variant="secondary" cue>
                {page.pioneerCta}
              </TrackedLink>
            </div>
          ) : null}
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={page.faqs} openEvent={{ name: 'how_we_work_faq_open' }} />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
          <Actions locale={locale} page={page} whatsapp={whatsapp} contact={contact} placement="final" />
          <p className="mt-4 max-w-xl text-sm text-muted">{page.finalNote}</p>
        </Container>
      </Section>
    </>
  );
}

function solutionEvent(id: ServiceId) {
  return { name: 'how_we_work_solution_click' as const, service: id };
}
