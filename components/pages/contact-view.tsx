import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { ContactForm } from '@/components/forms/contact-form';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';

export function ContactView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const page = dict.contactPage;
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav.contact, routeId: 'contact' as const },
  ];

  return (
    <>
      <Section tone="sand">
        <Container className="max-w-3xl">
          <Breadcrumbs locale={locale} items={crumbs} />
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{page.h1}</h1>
          <p className="mt-6 text-lg leading-8 text-muted">{page.lead}</p>
          <p className="mt-4 font-semibold text-ink">{page.micro}</p>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            {whatsapp ? (
              <div className="mb-8 rounded-[var(--radius-card)] border border-sand-deep bg-sand p-5">
                <p className="font-semibold text-ink">{page.whatsappTitle}</p>
                <div className="mt-4">
                  <WhatsAppButton phone={whatsapp} locale={locale} context="contact" label={page.whatsappCta} variant="primary" />
                </div>
              </div>
            ) : null}
            <p className="mb-6 text-sm text-muted">{page.orForm}</p>
            <ContactForm locale={locale} copy={page} />
          </div>
          <aside className="rounded-[var(--radius-card)] bg-sand p-6 lg:sticky lg:top-28">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">{page.afterTitle}</h2>
            <ol className="mt-6 space-y-5">
              {page.after.map((step, index) => (
                <li key={step.title} className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{step.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-muted">{step.body}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm font-semibold text-ink">{page.afterNote}</p>
          </aside>
        </Container>
      </Section>

      <Section tone="sand" className="pb-24">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.unsureTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{page.unsureBody}</p>
          <div className="mt-8">
            <TrackedLink
              href={href(locale, 'digital-check')}
              event={{ name: 'digital_check_cta_click', placement: 'contact' }}
              variant="secondary"
              cue
            >
              {page.checkCta}
            </TrackedLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
