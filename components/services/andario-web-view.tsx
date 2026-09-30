import { Building2, Compass, HeartHandshake, MapPin, Sparkles, UserRound } from 'lucide-react';
import Image from 'next/image';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { AndarioWebDevices } from '@/components/graphics/andario-web-devices';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

const personalizeIcons = [Sparkles, HeartHandshake, Compass] as const;
const experienceIcons = [Building2, UserRound, MapPin] as const;

export function AndarioWebView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const service = dict.services['andario-web'];
  const page = dict.andarioWeb;
  const contactHref = href(locale, 'contact');
  const bookingHref = href(locale, 'andario-booking-engine');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: service.name, routeId: 'andario-web' as const },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          locale,
          routeId: 'andario-web',
        })}
      />

      <Section tone="sand" className="overflow-hidden py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="mt-5 text-sm font-semibold tracking-[0.16em] text-teal">ANDARIO WEB</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
              {service.h1}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">{page.support}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href={contactHref} event={{ name: 'andario_web_cta_click', placement: 'hero' }} cue>
                {page.primaryCta}
              </TrackedLink>
              {whatsapp ? (
                <WhatsAppButton
                  phone={whatsapp}
                  locale={locale}
                  context="andario-web"
                  label={page.talkCta}
                  event={{ name: 'andario_web_whatsapp_click' }}
                />
              ) : (
                <TrackedLink
                  href={contactHref}
                  event={{ name: 'andario_web_cta_click', placement: 'hero-talk' }}
                  variant="secondary"
                >
                  {page.talkCta}
                </TrackedLink>
              )}
            </div>
            <p className="mt-5 text-sm font-semibold text-ink">{page.concepts.join(' · ')}</p>
          </div>
          <AndarioWebDevices
            property={page.mockProperty}
            nav={page.mockNav}
            reserve={page.mockReserve}
            label={page.mockLabel}
            heroImage="/andario-web/hero-property.webp"
          />
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-80 overflow-hidden rounded-[var(--radius-card)] sm:min-h-[28rem]">
            <Image
              src={page.personalizeImage}
              alt={page.personalizeAlt}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.personalizeTitle}</h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted">{page.personalizeBody}</p>
            <ul className="mt-8 space-y-5">
              {page.personalizeItems.map((item, index) => {
                const Icon = personalizeIcons[index] ?? Sparkles;
                return (
                  <li key={item.title} className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-wash text-teal">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] text-muted">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="sand" className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.findTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{page.findBody}</p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.findItems.map((item, index) => (
              <li
                key={item.title}
                className="overflow-hidden rounded-[var(--radius-card)] border border-sand-deep/70 bg-white shadow-[var(--shadow-soft)]"
              >
                {item.image ? (
                  <div className="relative aspect-[16/10]">
                    <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
                  </div>
                ) : null}
                <div className="p-5">
                  <p className="text-xs font-semibold tracking-[0.12em] text-teal">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative min-h-80 overflow-hidden rounded-[var(--radius-card)] sm:min-h-[30rem]">
            <Image
              src={page.experienceImage}
              alt={page.experienceAlt}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">{page.experienceEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.experienceTitle}</h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted">{page.experienceBody}</p>
            <ul className="mt-8 space-y-5">
              {page.experienceItems.map((item, index) => {
                const Icon = experienceIcons[index] ?? Building2;
                return (
                  <li key={item.title} className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sand-deep bg-sand text-teal">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>

        <Container className="mt-12">
          <div className="rounded-[var(--radius-card)] border border-sand-deep bg-sand px-6 py-8 sm:px-8">
            <ol className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {page.bookingSteps.map((step, index) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink shadow-[var(--shadow-soft)]">
                    {step}
                  </span>
                  {index < page.bookingSteps.length - 1 ? (
                    <span aria-hidden="true" className="font-semibold text-teal">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink">{page.bookingTitle}</p>
            <div className="mt-6">
              <TrackedLink
                href={bookingHref}
                event={{ name: 'andario_web_booking_click' }}
                variant="secondary"
                cue
              >
                {page.bookingCta}
              </TrackedLink>
            </div>
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <Image src={page.finalImage} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/70" />
        <Container className="relative flex flex-col items-center text-center">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">{page.finalBody}</p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <TrackedLink href={contactHref} event={{ name: 'andario_web_cta_click', placement: 'final' }} cue>
              {page.primaryCta}
            </TrackedLink>
            <TrackedLink
              href={contactHref}
              event={{ name: 'andario_web_cta_click', placement: 'final-diagnosis' }}
              variant="inverse"
            >
              {page.diagnosisCta}
            </TrackedLink>
          </div>
          <p className="mt-6 text-sm text-white/75">{page.finalNote}</p>
        </Container>
      </section>
    </>
  );
}
