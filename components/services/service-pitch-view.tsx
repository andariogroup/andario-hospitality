import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary, ServicePitchContent } from '@/content/types';
import type { AnalyticsEvent } from '@/lib/analytics/events';
import { href, type Locale, type ServiceId } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';
import type { WhatsAppContext } from '@/lib/whatsapp/url';

type PitchEvents = {
  cta: (placement: string) => AnalyticsEvent;
  whatsapp: AnalyticsEvent;
  crossSell: AnalyticsEvent;
};

export function ServicePitchView({
  locale,
  dict,
  whatsapp,
  serviceId,
  page,
  eyebrow,
  whatsappContext,
  events,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
  serviceId: ServiceId;
  page: ServicePitchContent;
  eyebrow: string;
  whatsappContext: WhatsAppContext;
  events: PitchEvents;
}) {
  const service = dict.services[serviceId];
  const contactHref = href(locale, 'contact');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: service.name, routeId: serviceId },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          locale,
          routeId: serviceId,
        })}
      />

      <Section tone="sand">
        <Container className="max-w-3xl">
          <Breadcrumbs locale={locale} items={crumbs} />
          <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
          <p className="mt-6 text-sm font-semibold tracking-[0.14em] text-teal">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{service.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{page.support}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href={contactHref} event={events.cta('hero')} cue>
              {page.primaryCta}
            </TrackedLink>
            {whatsapp ? (
              <WhatsAppButton
                phone={whatsapp}
                locale={locale}
                context={whatsappContext}
                label={page.talkCta}
                event={events.whatsapp}
              />
            ) : (
              <TrackedLink href={contactHref} event={events.cta('hero-talk')} variant="secondary">
                {page.talkCta}
              </TrackedLink>
            )}
          </div>
          <p className="mt-5 text-sm font-semibold text-ink">{page.concepts.join(' · ')}</p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.opportunityTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.opportunityBody}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {page.opportunityPoints.map((point) => (
              <li key={point} className="rounded-full bg-sand px-4 py-2 text-sm font-semibold text-ink">
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.doTitle}</h2>
          <ul className="mt-8 space-y-6">
            {page.doItems.map((item, index) => (
              <li key={item.title} className="grid gap-2 sm:grid-cols-[auto_1fr] sm:gap-5">
                <span className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 leading-7 text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.getTitle}</h2>
          <ul className="mt-8 space-y-3">
            {page.getItems.map((item) => (
              <li key={item} className="border-l-2 border-teal pl-4 leading-7 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <p className="max-w-2xl leading-7 text-muted">{page.crossSellBody}</p>
          <div className="mt-5">
            <TrackedLink
              href={href(locale, page.crossSellRoute)}
              event={events.crossSell}
              variant="secondary"
              cue
            >
              {page.crossSellCta}
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {whatsapp ? (
              <WhatsAppButton
                phone={whatsapp}
                locale={locale}
                context={whatsappContext}
                label={page.talkCta}
                event={events.whatsapp}
                variant="primary"
              />
            ) : (
              <TrackedLink href={contactHref} event={events.cta('final')} cue>
                {page.talkCta}
              </TrackedLink>
            )}
            <TrackedLink href={contactHref} event={events.cta('final-diagnosis')} variant="secondary">
              {page.diagnosisCta}
            </TrackedLink>
          </div>
          <p className="mt-5 max-w-xl text-sm text-muted">{page.finalNote}</p>
        </Container>
      </Section>
    </>
  );
}
