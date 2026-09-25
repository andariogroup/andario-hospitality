import { audienceIcons, serviceIcons } from '@/components/graphics/icons';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo/structured-data';
import { Camera, ChartLine, MessageCircle, Search, Sprout, Store, type LucideIcon } from 'lucide-react';
import Image from 'next/image';

const SITUATION_ICONS: LucideIcon[] = [Sprout, Search, MessageCircle, Store, Camera, ChartLine];

export function AccommodationsView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const page = dict.accommodationsPage;
  const contact = href(locale, 'contact');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav.accommodations, routeId: 'accommodations' as const },
  ];
  const readyLabel = locale === 'es' ? 'En orden' : 'In place';
  const priorityLabel = locale === 'es' ? 'Prioridad' : 'Priority';

  return (
    <>
      <JsonLd data={faqJsonLd(page.faqs)} />
      <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />

      <Section tone="sand">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <p className="mt-6 text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{page.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{page.support}</p>
            <p className="mt-4 max-w-2xl leading-7 text-muted">{page.complement}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href={contact} event={{ name: 'accommodations_diagnosis_click', placement: 'hero' }} cue>
                {page.primaryCta}
              </TrackedLink>
              {whatsapp ? (
                <WhatsAppButton
                  phone={whatsapp}
                  locale={locale}
                  context="accommodations"
                  label={page.secondaryCta}
                  event={{ name: 'accommodations_whatsapp_click' }}
                />
              ) : (
                <TrackedLink href={contact} event={{ name: 'accommodations_diagnosis_click', placement: 'hero-secondary' }} variant="secondary">
                  {page.secondaryCta}
                </TrackedLink>
              )}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">{page.micro}</p>
          </div>
          <Image
            src="/home/andario-city-building.webp"
            alt={page.heroAlt}
            width={1024}
            height={769}
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.typesTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.typesSupport}</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.types.map((type, index) => {
              const Icon = audienceIcons[index];
              return (
                <li key={type.id} className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-6">
                  {Icon ? (
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-wash text-teal">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  ) : null}
                  <h3 className="mt-4 text-xl font-semibold text-ink">{type.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{type.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.improveTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.improveSupport}</p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.situations.map((situation, index) => {
              const Icon = SITUATION_ICONS[index] ?? Sprout;
              return (
                <li key={situation.title} className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-wash text-teal">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{situation.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{situation.body}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <article className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.checkLabel}</p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.checkTitle}</h2>
              <p className="mt-4 max-w-xl font-semibold text-ink">{page.checkSupport}</p>
              <p className="mt-4 max-w-xl leading-7 text-muted">{page.checkBody}</p>
              <p className="mt-4 max-w-xl font-semibold text-ink">{page.checkMark}</p>
              <div className="mt-6">
                <TrackedLink href={contact} event={{ name: 'accommodations_diagnosis_click', placement: 'digital-check' }} cue>
                  {page.checkCta}
                </TrackedLink>
              </div>
              <p className="mt-3 text-sm text-muted">{page.checkDisclaimer}</p>
            </div>
            <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-sand p-4 sm:p-6">
              <p className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">{page.checkBoardTitle}</p>
              <p className="mt-2 text-lg font-semibold text-ink">{page.checkStatus}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {page.checkItems.map((item) => {
                  const ready = item.tone === 'steady';
                  return (
                    <li key={item.label} className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-ink">
                      <span>{item.label}</span>
                      <span className={ready ? 'font-semibold text-teal' : 'font-semibold text-ink'}>
                        <span aria-hidden="true">{ready ? '✓' : '!'}</span>
                        <span className="sr-only">{ready ? readyLabel : priorityLabel}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-ink">{page.checkAreasTitle}</p>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-muted">
                    {page.checkAreas.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{page.checkOpportunitiesTitle}</p>
                  <ol className="mt-2 space-y-1 text-sm leading-6 text-muted">
                    {page.checkOpportunities.map((item, index) => (
                      <li key={item}>
                        {index + 1}. {item}
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 text-sm font-semibold text-ink">{page.checkNextTitle}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{page.checkNext}</p>
                </div>
              </div>
              <figcaption className="mt-4 text-sm leading-6 text-muted">{page.checkNote}</figcaption>
            </figure>
          </article>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.solutionsTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.solutionsSupport}</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.solutions.map((item) => {
              const Icon = serviceIcons[item.id];
              return (
                <li key={item.id}>
                  <TrackedLink
                    href={href(locale, item.id)}
                    event={{ name: 'accommodations_service_click', service: item.id }}
                    variant="secondary"
                    className="h-full items-start justify-start gap-4 rounded-[var(--radius-card)] border-sand-deep bg-white p-5 text-left shadow-none hover:translate-y-0 hover:border-teal"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-wash text-teal">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-[0.12em] text-teal uppercase">{dict.services[item.id].name}</span>
                      <span className="mt-1 block font-semibold text-ink">{item.title}</span>
                      <span className="mt-2 block text-sm leading-6 text-muted">{item.body}</span>
                    </span>
                  </TrackedLink>
                </li>
              );
            })}
          </ul>
          <div className="mt-10 max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight text-ink">{page.unsureTitle}</h3>
            <p className="mt-3 leading-7 text-muted">{page.unsureBody}</p>
            <div className="mt-6">
              <TrackedLink href={contact} event={{ name: 'accommodations_diagnosis_click', placement: 'solutions' }} cue>
                {page.primaryCta}
              </TrackedLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.bookingTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.bookingBody}</p>
            <p className="mt-4 font-semibold text-ink">{page.bookingPhrase}</p>
            <div className="mt-8">
              <TrackedLink
                href={href(locale, 'andario-booking-engine')}
                event={{ name: 'accommodations_booking_engine_click', placement: 'feature' }}
                extra={{ name: 'booking_engine_cta', placement: 'accommodations-feature' }}
                cue
              >
                {page.bookingCta}
              </TrackedLink>
            </div>
          </div>
          <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-sand p-4 sm:p-6">
            <div className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
              <p className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">Andario Booking Engine</p>
              <p className="mt-2 text-lg font-semibold text-ink">{locale === 'es' ? 'Tu alojamiento' : 'Your property'}</p>
              <p className="mt-4 text-sm font-semibold text-ink">
                {locale === 'es' ? 'Llegada · Salida' : 'Arrival · Departure'}
                <span className="mx-2 text-muted">·</span>
                {locale === 'es' ? 'Huéspedes' : 'Guests'}
              </p>
              <p className="mt-4 rounded-2xl bg-teal-wash px-4 py-3 text-sm font-semibold text-ink">
                {locale === 'es' ? 'Habitación disponible' : 'Room available'}
              </p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-ink">{locale === 'es' ? 'Tarifa del alojamiento' : 'Property rate'}</p>
                <span className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white">{locale === 'es' ? 'Reservar' : 'Book'}</span>
              </div>
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-muted">{page.bookingNote}</figcaption>
          </figure>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.humanTitle}</h2>
            {page.humanBody.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-7 text-muted">
                {paragraph}
              </p>
            ))}
            <p className="mt-8 text-xl font-semibold tracking-tight text-ink">{page.humanMark}</p>
          </div>
          <Image
            src="/home/known-reception.webp"
            alt={page.humanAlt}
            width={1024}
            height={769}
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.startTitle}</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {page.steps.map((step, index) => (
              <li key={step.title} className="rounded-[var(--radius-card)] bg-sand p-5">
                <p className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.baruchEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">{page.baruchTitle}</h2>
          <p className="mt-2 text-sm font-semibold text-ink">{page.baruchPlace}</p>
          <p className="mt-4 leading-7 text-muted">{page.baruch}</p>
        </Container>
      </Section>

      <Section className="border-t border-sand-deep">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={page.faqs} openEvent={{ name: 'accommodations_faq_open' }} />
          </div>
        </Container>
      </Section>

      <Section tone="sand" className="pb-24">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href={contact} event={{ name: 'accommodations_diagnosis_click', placement: 'final' }} cue>
              {page.finalPrimary}
            </TrackedLink>
            {whatsapp ? (
              <WhatsAppButton
                phone={whatsapp}
                locale={locale}
                context="accommodations"
                label={page.finalSecondary}
                event={{ name: 'accommodations_whatsapp_click' }}
              />
            ) : null}
          </div>
          <p className="mt-4 max-w-xl text-sm text-muted">{page.finalNote}</p>
        </Container>
      </Section>
    </>
  );
}
