import { Building2, Eye, Layers, MapPin, Route, Search, type LucideIcon } from 'lucide-react';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';
import { breadcrumbJsonLd } from '@/lib/seo/structured-data';

const beliefIcons: LucideIcon[] = [Building2, Eye, Layers, Route];

export function AboutView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const page = dict.aboutView;
  const contact = href(locale, 'contact');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav.about, routeId: 'about' as const },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />

      <Section tone="sand">
        <Container className="max-w-3xl">
          <Breadcrumbs locale={locale} items={crumbs} />
          <p className="mt-6 text-sm font-semibold tracking-[0.14em] text-teal uppercase">{page.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{page.h1}</h1>
          <p className="mt-6 text-lg leading-8 text-muted">{page.support}</p>
          <p className="mt-4 text-sm font-semibold text-ink">{page.tags}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TalkButton locale={locale} label={page.talkCta} whatsapp={whatsapp} contact={contact} placement="hero" primary />
            <TrackedLink href={href(locale, 'how-we-work')} event={{ name: 'about_how_we_work_click', placement: 'hero' }} variant="secondary" cue>
              {page.howCta}
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.originTitle}</h2>
          {page.originBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink">
            <MapPin aria-hidden="true" className="h-4 w-4 text-teal" />
            {page.originPlace}
          </p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.whyTitle}</h2>
          {page.whyBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.purposeTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.purposeBody}</p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {page.purposeItems.map((item, index) => (
              <li key={item.title} className="rounded-[var(--radius-card)] border border-sand-deep bg-sand p-5">
                <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.beliefsTitle}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {page.beliefs.map((item, index) => {
              const Icon = beliefIcons[index] ?? Search;
              return (
                <li key={item.title} className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</span>
                    <Icon aria-hidden="true" className="h-5 w-5 text-teal" />
                  </div>
                  <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section className="pb-24">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.finalTitle}</h2>
          {page.finalBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TalkButton
              locale={locale}
              label={page.finalTalkCta}
              whatsapp={whatsapp}
              contact={contact}
              placement="final"
              primary
            />
            <TrackedLink href={contact} event={{ name: 'about_diagnosis_cta', placement: 'final' }} variant="secondary">
              {page.diagnosisCta}
            </TrackedLink>
          </div>
          <p className="mt-4 text-sm text-muted">{page.finalNote}</p>
        </Container>
      </Section>
    </>
  );
}

function TalkButton({
  locale,
  label,
  whatsapp,
  contact,
  placement,
  primary = false,
}: {
  locale: Locale;
  label: string;
  whatsapp: string | null;
  contact: string;
  placement: string;
  primary?: boolean;
}) {
  if (whatsapp) {
    return (
      <WhatsAppButton
        phone={whatsapp}
        locale={locale}
        context="about"
        label={label}
        variant={primary ? 'primary' : 'secondary'}
        event={{ name: 'about_primary_cta', placement }}
        extra={{ name: 'about_whatsapp_click' }}
      />
    );
  }

  return (
    <TrackedLink href={contact} event={{ name: 'about_primary_cta', placement }} variant={primary ? 'primary' : 'secondary'}>
      {label}
    </TrackedLink>
  );
}
