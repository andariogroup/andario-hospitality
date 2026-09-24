import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { FlowSteps } from '@/components/graphics/solutions';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale, type ServiceId } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo/structured-data';

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
          <FlowSteps steps={page.route} />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.lostTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.lostBody}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.situations.map((item) => (
              <li key={item} className="rounded-[var(--radius-card)] border border-sand-deep bg-sand px-4 py-3 text-sm leading-6 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-semibold text-ink">{page.lostClose}</p>
          <p className="mt-2 text-lg font-semibold text-ink">{page.lostMark}</p>
        </Container>
      </Section>

      <Section id="digital-check" tone="sand" className="scroll-mt-28">
        <Container>
          <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.checkLabel}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.checkTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.checkBody}</p>
          <p className="mt-4 max-w-2xl text-lg font-semibold text-ink">{page.checkMark}</p>
          <h3 className="mt-12 text-2xl font-semibold text-ink">{page.reviewTitle}</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.reviews.map((item, index) => (
              <li key={item.title} className="rounded-[var(--radius-card)] bg-white p-5">
                <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h4 className="mt-2 font-semibold text-ink">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.receiveTitle}</h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.receive.map((item, index) => (
              <li key={item.title} className="rounded-[var(--radius-card)] border border-sand-deep p-5">
                <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-lg font-semibold text-ink">{page.receiveMark}</p>
          <p className="mt-3 max-w-2xl leading-7 text-muted">{page.receiveNote}</p>
          <Actions locale={locale} page={page} whatsapp={whatsapp} contact={contact} placement="check" />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.mapTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.mapBody}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5">
              <h3 className="font-semibold text-ink">{page.beforeLabel}</h3>
              <ul className="mt-4 space-y-2">
                {page.before.map((item) => (
                  <li key={item} className="text-sm leading-6 text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[var(--radius-card)] bg-teal-wash p-5">
              <h3 className="font-semibold text-ink">{page.afterLabel}</h3>
              <ul className="mt-4 space-y-2">
                {page.after.map((item) => (
                  <li key={item} className="text-sm leading-6 text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.goalsTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.goalsIntro}</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {page.goals.map((goal) => (
              <li key={goal.title} className="rounded-[var(--radius-card)] border border-sand-deep p-5">
                <h3 className="font-semibold text-ink">{goal.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {goal.services.map((id) => (
                    <TrackedLink key={id} href={href(locale, id)} variant="secondary" event={solutionEvent(id)}>
                      {dict.services[id].name}
                    </TrackedLink>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-[var(--radius-card)] bg-teal-wash p-5">
            <p className="text-lg font-semibold text-ink">{page.unsure}</p>
            <div className="mt-4">
              <TrackedLink href={contact} event={{ name: 'how_we_work_diagnosis_cta', placement: 'unsure' }} cue>
                {page.primaryCta}
              </TrackedLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.processTitle}</h2>
            <p className="mt-6 text-lg font-semibold text-ink">{page.processClose}</p>
          </div>
          <ol className="grid gap-3">
            {page.process.map((step, index) => (
              <li key={step.title} className="rounded-[var(--radius-card)] bg-white p-4">
                <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.paceTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.paceBody}</p>
          <div className="mt-8">
            <FlowSteps steps={page.pace} />
          </div>
          <p className="mt-6 max-w-2xl leading-7 text-muted">{page.paceNote}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.solutionsTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.solutionsBody}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.solutions.map((item) => (
              <li key={item.id}>
                <TrackedLink
                  href={href(locale, item.id)}
                  variant="secondary"
                  className="h-auto w-full justify-start whitespace-normal text-left"
                  event={item.id === 'digital-check' ? { name: 'how_we_work_diagnosis_cta', placement: 'solutions' } : solutionEvent(item.id)}
                >
                  {`${dict.services[item.id].name} — ${item.body}`}
                </TrackedLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <p className="text-3xl font-semibold tracking-tight whitespace-pre-line text-ink">{page.knownMark}</p>
          <p className="mt-6 leading-7 text-muted">{page.knownBody}</p>
          <ul className="mt-8 space-y-3">
            {page.beliefs.map((item) => (
              <li key={item} className="text-sm font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.bookingTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.bookingBody}</p>
          <p className="mt-4 leading-7 text-muted">{page.bookingNote}</p>
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
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-ink">{page.pioneerTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.pioneerBody}</p>
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
          <Actions locale={locale} page={page} whatsapp={whatsapp} contact={contact} placement="final" />
          <p className="mt-4 max-w-xl text-sm text-muted">{page.finalNote}</p>
        </Container>
      </Section>
    </>
  );
}

function solutionEvent(id: ServiceId) {
  if (id === 'andario-booking-engine') return { name: 'how_we_work_booking_engine_click' as const, placement: 'goal' };
  return { name: 'how_we_work_solution_click' as const, service: id };
}
