import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { DeliverableSheet, DigitalCheckPanel, MethodTimeline } from '@/components/graphics/how-we-work';
import { FlowSteps } from '@/components/graphics/solutions';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo/structured-data';
import { Compass, Eye, Handshake, Layers, type LucideIcon } from 'lucide-react';
import Image from 'next/image';

const PRINCIPLE_ICONS: LucideIcon[] = [Compass, Layers, Handshake, Eye];

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
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
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
            src="/how-we-work/hero-facade.webp"
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
          <MethodTimeline steps={page.method} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.businessTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-muted">{page.businessBody}</p>
          </div>
          <Image
            src="/home/known-reception.webp"
            alt={page.businessAlt}
            width={1024}
            height={769}
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="aspect-[4/3] h-auto w-full rounded-[var(--radius-card)] object-cover"
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.checkTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-muted">{page.checkBody}</p>
          </div>
          <DigitalCheckPanel name={page.checkName} rows={page.checkRows} label={page.checkLabel} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.reviewTitle}</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2">
            {page.questions.map((item, index) => (
              <li key={item.title} className="border-t border-sand-deep pt-5">
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
        <Container className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.receiveTitle}</h2>
            <ol className="mt-8 grid gap-6">
              {page.receive.map((item, index) => (
                <li key={item.title}>
                  <p aria-hidden="true" className="text-sm font-semibold text-teal">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <DeliverableSheet title={page.deliverableTitle} items={page.deliverableItems} label={page.deliverableLabel} />
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
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.knownTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-muted">{page.knownBody}</p>
          </div>
          <Image
            src="/how-we-work/known-digital.webp"
            alt={page.knownAlt}
            width={1024}
            height={576}
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="h-auto w-full rounded-[var(--radius-card)]"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.principlesTitle}</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {page.principles.map((item, index) => {
              const Icon = PRINCIPLE_ICONS[index] ?? Compass;
              return (
                <li key={item.title} className="rounded-[var(--radius-card)] border border-sand-deep p-6 sm:p-7">
                  <Icon aria-hidden="true" className="h-5 w-5 text-teal" />
                  <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              );
            })}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-semibold text-ink">{page.principlesMark}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={page.faqs} openEvent={{ name: 'how_we_work_faq_open' }} />
          </div>
        </Container>
      </Section>

      <Section>
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
