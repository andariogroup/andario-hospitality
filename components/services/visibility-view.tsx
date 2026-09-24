import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import {
  AndarioVisibilityHeroVisual,
  DiscoveryToBookingFlow,
  GoogleUnderstanding,
  LocalSEOFlow,
  SearchConsoleMockup,
  SearchIntentFlow,
  TechnicalSEOMap,
  VisibilityEcosystem,
  VisibilityFindingAction,
  VisibilityMatrix,
  VisibilityProcess,
  VisibilitySystem,
} from '@/components/graphics/visibility';
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
      <TrackedLink href={contactHref} event={{ name: 'andario_visibility_cta_click', placement }} cue>
        {primary}
      </TrackedLink>
      {whatsapp ? (
        <WhatsAppButton
          phone={whatsapp}
          locale={locale}
          context="visibility"
          label={whatsappLabel}
          event={{ name: 'andario_visibility_whatsapp_click' }}
        />
      ) : null}
    </div>
  );
}

export function VisibilityView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const service = dict.services['andario-visibility'];
  const page = dict.visibility;
  const contactHref = href(locale, 'contact');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav.solutions, routeId: 'solutions' as const },
    { label: service.name, routeId: 'andario-visibility' as const },
  ];
  const heroLayers =
    locale === 'es'
      ? ['Persona', 'Google', 'Web', 'Perfil', 'Contenido', 'Alojamiento', 'Información útil', 'Contacto / reserva']
      : ['Person', 'Google', 'Website', 'Profile', 'Content', 'Property', 'Useful information', 'Contact / booking'];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          locale,
          routeId: 'andario-visibility',
        })}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <Section tone="sand" className="overflow-hidden">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="text-sm font-semibold tracking-[0.14em] text-teal">
              ANDARIO VISIBILITY · SEO + GOOGLE + {locale === 'es' ? 'VISIBILIDAD' : 'VISIBILITY'}
            </p>
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
          <AndarioVisibilityHeroVisual caption={page.heroCaption} query={page.heroQuery} layers={heroLayers} />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{service.problemTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{service.problem}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.problems.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] bg-sand p-4">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.problemCta}
            whatsapp={whatsapp}
            whatsappLabel={page.talkCta}
            placement="problem"
          />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.systemTitle}</h2>
          <div className="mt-8">
            <VisibilitySystem parts={page.systemParts} equals={page.systemEquals} note={page.systemNote} chain={page.chain} />
          </div>
          <div className="mt-12 max-w-3xl">
            <h2 className="text-2xl font-semibold text-ink">{page.whatTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.whatBody}</p>
            <p className="mt-4 text-sm font-semibold text-ink">{page.whatNote}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.technicalTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.technicalBody}</p>
          <div className="mt-8">
            <TechnicalSEOMap items={page.technicalDo} caption={page.technicalWhy} />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.localTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.localBody}</p>
            <div className="mt-8">
              <LocalSEOFlow steps={page.localSteps} note={page.localNote} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.googleTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.googleBody}</p>
            <div className="mt-8">
              <GoogleUnderstanding parts={page.googleParts} note={page.googleNote} />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SearchConsoleMockup rows={page.consoleRows} label={page.exampleLabel} />
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.consoleTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.consoleBody}</p>
            <LeadPair
              locale={locale}
              contactHref={contactHref}
              primary={page.talkCta}
              whatsapp={whatsapp}
              whatsappLabel={page.whatsappCta}
              placement="seo"
            />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.contentTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.contentBody}</p>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-ink">{page.intentTitle}</h2>
            <p className="mt-3 max-w-3xl leading-7 text-muted">{page.intentIntro}</p>
            <div className="mt-6">
              <SearchIntentFlow steps={page.contentSteps} intents={page.intents} note={page.intentNote} />
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-ink">{page.destinationTitle}</h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted">{page.destinationBody}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {page.destinationPoints.map((point) => (
                <li key={point} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            {locale === 'es' ? 'Cómo se sostiene la visibilidad' : 'How visibility holds together'}
          </h2>
          <div className="mt-8">
            <VisibilityEcosystem caption={page.ecosystemCaption} columns={page.ecosystemColumns} />
          </div>
          <div className="mt-12">
            <h2 className="max-w-3xl text-2xl font-semibold text-ink">{page.discoveryTitle}</h2>
            <div className="mt-6 max-w-xl">
              <DiscoveryToBookingFlow steps={page.discoverySteps} note={page.discoveryNote} />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.includesTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.includesIntro}</p>
          <p className="mt-3 text-sm font-semibold text-teal">{page.scopeLabel}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {page.groups.map((group) => (
              <article key={group.title} className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  <span className="font-semibold text-ink">{page.whatLabel}. </span>
                  {group.what}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  <span className="font-semibold text-ink">{page.purposeLabel}. </span>
                  {group.purpose}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.matrixTitle}</h2>
          <div className="mt-8">
            <VisibilityMatrix center={page.matrixCenter} points={page.matrixPoints} note={page.matrixNote} />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.processTitle}</h2>
          <div className="mt-8">
            <VisibilityProcess steps={page.process} />
          </div>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.reviewCta}
            whatsapp={whatsapp}
            whatsappLabel={page.talkCta}
            placement="process"
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.receiveTitle}</h2>
            <ul className="mt-6 space-y-2">
              {page.receive.map((item) => (
                <li key={item} className="rounded-2xl bg-sand px-4 py-3 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-muted">{page.receiveNote}</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.structureTitle}</h2>
            <p className="mt-3 text-sm font-semibold text-teal">{page.exampleLabel}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[var(--radius-card)] border border-sand-deep p-4">
                <p className="text-xs font-semibold text-muted">{locale === 'es' ? 'Antes' : 'Before'}</p>
                <ul className="mt-3 space-y-1">
                  {page.structureBefore.map((item) => (
                    <li key={item} className="text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[var(--radius-card)] bg-ink p-4 text-white">
                <p className="text-xs font-semibold text-white/70">{locale === 'es' ? 'Después' : 'After'}</p>
                <ul className="mt-3 space-y-1">
                  {page.structureAfter.map((item) => (
                    <li key={item} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
        <Container className="mt-10">
          <VisibilityFindingAction items={page.finding} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article>
            <h2 className="text-2xl font-semibold text-ink">{page.webTitle}</h2>
            <p className="mt-3 leading-7 text-muted">{page.webBody}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{page.webNote}</p>
            <TrackedLink
              href={href(locale, 'andario-web')}
              event={{ name: 'andario_visibility_web_click' }}
              variant="secondary"
              className="mt-4"
            >
              Andario Web
            </TrackedLink>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-ink">{page.checkTitle}</h2>
            <p className="mt-3 leading-7 text-muted">{page.checkBody}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{page.checkNote}</p>
            <TrackedLink
              href={href(locale, 'digital-check')}
              event={{ name: 'andario_visibility_cta_click', placement: 'digital-check' }}
              variant="secondary"
              className="mt-4"
            >
              Digital Check
            </TrackedLink>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-ink">{page.bookingTitle}</h2>
            <p className="mt-3 leading-7 text-muted">{page.bookingBody}</p>
            <TrackedLink
              href={href(locale, 'andario-booking-engine')}
              event={{ name: 'andario_visibility_booking_click' }}
              variant="secondary"
              className="mt-4"
            >
              Andario Booking Engine
            </TrackedLink>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-ink">{page.growthTitle}</h2>
            <p className="mt-3 leading-7 text-muted">{page.growthBody}</p>
          </article>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.whoTitle}</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {page.whoTypes.map((type) => (
              <li key={type} className="rounded-full bg-sand px-3 py-1.5 text-sm font-semibold text-ink">
                {type}
              </li>
            ))}
          </ul>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {page.whoFit.map((item) => (
              <li key={item} className="rounded-[var(--radius-card)] border border-sand-deep p-4 text-sm leading-6 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <h2 className="mt-12 text-2xl font-semibold text-ink">{page.whenTitle}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {page.when.map((item) => (
              <li key={item} className="rounded-[var(--radius-card)] bg-sand p-4 text-sm leading-6 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.notTitle}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.not.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] bg-white p-4">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-ink">{page.adsTitle}</h2>
            <p className="mt-3 max-w-3xl leading-7 text-muted">{page.adsIntro}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <article className="rounded-[var(--radius-card)] bg-white p-5">
                <h3 className="font-semibold text-ink">{page.organicTitle}</h3>
                <ul className="mt-3 space-y-1">
                  {page.organicPoints.map((point) => (
                    <li key={point} className="text-sm text-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-[var(--radius-card)] bg-white p-5">
                <h3 className="font-semibold text-ink">{page.paidTitle}</h3>
                <ul className="mt-3 space-y-1">
                  {page.paidPoints.map((point) => (
                    <li key={point} className="text-sm text-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">{page.adsNote}</p>
          </div>
          <article className="mt-10 max-w-3xl rounded-[var(--radius-card)] border border-sand-deep bg-white p-5">
            <h2 className="text-xl font-semibold text-ink">{page.pioneerTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{page.pioneerBody}</p>
          </article>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={service.faqs} openEvent={{ name: 'andario_visibility_faq_open' }} />
          </div>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.infoCta}
            whatsapp={whatsapp}
            whatsappLabel={page.whatsappCta}
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
            primary={page.primaryCta}
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
