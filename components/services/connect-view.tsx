import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import {
  AndarioConnectHeroVisual,
  ConnectAIroadmap,
  ConnectAutomationBoundary,
  ConnectBookingIntegration,
  ConnectConversationFlow,
  ConnectConversationLifecycle,
  ConnectHub,
  ConnectHumanAutomation,
  ConnectLeadFlow,
  ConnectProcess,
  ConnectSecurity,
  StepList,
} from '@/components/graphics/connect';
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
      <TrackedLink href={contactHref} event={{ name: 'andario_connect_cta_click', placement }} cue>
        {primary}
      </TrackedLink>
      {whatsapp ? (
        <WhatsAppButton
          phone={whatsapp}
          locale={locale}
          context="connect"
          label={whatsappLabel}
          event={{ name: 'andario_connect_whatsapp_click' }}
        />
      ) : null}
    </div>
  );
}

function ConnectFinalCTA({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const page = dict.connect;
  return (
    <Section tone="sand" className="pb-24">
      <Container>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.finalTitle}</h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
        <LeadPair
          locale={locale}
          contactHref={href(locale, 'contact')}
          primary={page.primaryCta}
          whatsapp={whatsapp}
          whatsappLabel={page.talkCta}
          placement="final"
        />
        <p className="mt-4 max-w-xl text-sm text-muted">{page.finalNote}</p>
      </Container>
    </Section>
  );
}

export function ConnectView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const service = dict.services['andario-connect'];
  const page = dict.connect;
  const contactHref = href(locale, 'contact');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav.solutions, routeId: 'solutions' as const },
    { label: service.name, routeId: 'andario-connect' as const },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          locale,
          routeId: 'andario-connect',
        })}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <Section tone="sand" className="overflow-hidden">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="text-sm font-semibold tracking-[0.14em] text-teal">
              ANDARIO CONNECT · WHATSAPP + {locale === 'es' ? 'COMUNICACIÓN + AUTOMATIZACIÓN' : 'COMMUNICATION + AUTOMATION'}
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
          <AndarioConnectHeroVisual
            caption={page.heroCaption}
            guest={page.heroGuest}
            guestMsg={page.heroGuestMsg}
            reply={page.heroReply}
            replyMsg={page.heroReplyMsg}
            action={page.heroAction}
            engine={page.heroEngine}
            availability={page.heroAvailability}
            reserve={page.heroReserve}
            label={page.exampleLabel}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{service.problemTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{service.problem}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {page.questions.map((question) => (
              <li key={question} className="rounded-full border border-sand-deep px-3 py-1.5 text-sm text-ink">
                {question}
              </li>
            ))}
          </ul>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.problems.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] bg-sand p-4">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">{page.problemNote}</p>
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
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.journeyTitle}</h2>
          <div className="mt-8 max-w-xl">
            <StepList steps={page.journeySteps} />
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">{page.journeyNote}</p>
          <div className="mt-12 max-w-3xl">
            <h2 className="text-2xl font-semibold text-ink">{page.whatTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.whatBody}</p>
            <p className="mt-4 text-sm font-semibold text-ink">{page.whatNote}</p>
          </div>
          <div className="mt-10">
            <ConnectHub caption={page.hubCaption} columns={page.hubColumns} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.autoTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.autoBody}</p>
          <div className="mt-8">
            <ConnectHumanAutomation
              autoTitle={page.autoRepeatTitle}
              auto={page.autoRepeat}
              humanTitle={page.autoHumanTitle}
              human={page.autoHuman}
              note={page.autoNote}
            />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.includesTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.includesIntro}</p>
          <p className="mt-3 text-sm font-semibold text-teal">{page.scopeLabel}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
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
                <p className="mt-2 text-sm leading-6 text-muted">
                  <span className="font-semibold text-ink">{page.exampleCardLabel}. </span>
                  {group.example}
                </p>
              </article>
            ))}
          </div>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.primaryCta}
            whatsapp={whatsapp}
            whatsappLabel={page.talkCta}
            placement="features"
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <ConnectConversationFlow title={page.flowTitle} steps={page.flow} note={page.flowNote} />
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.bookingTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.bookingBody}</p>
            <div className="mt-6">
              <ConnectBookingIntegration
                connectLabel="Andario Connect"
                connectPoints={page.bookingConnect}
                engineLabel="Andario Booking Engine"
                enginePoints={page.bookingEnginePoints}
                note={page.bookingNote}
              />
            </div>
            <LeadPair
              locale={locale}
              contactHref={contactHref}
              primary={page.bookingCta}
              whatsapp={whatsapp}
              whatsappLabel={page.talkCta}
              placement="booking"
            />
            <TrackedLink
              href={href(locale, 'andario-booking-engine')}
              event={{ name: 'andario_connect_booking_click' }}
              variant="secondary"
              className="mt-4"
            >
              Andario Booking Engine
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-2">
          <article>
            <h2 className="text-2xl font-semibold text-ink">{page.webTitle}</h2>
            <p className="mt-3 leading-7 text-muted">{page.webBody}</p>
            <div className="mt-4">
              <StepList steps={page.webSteps} />
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{page.webNote}</p>
            <TrackedLink href={href(locale, 'andario-web')} event={{ name: 'andario_connect_cta_click', placement: 'web' }} variant="secondary" className="mt-4">
              Andario Web
            </TrackedLink>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-ink">{page.checkTitle}</h2>
            <p className="mt-3 leading-7 text-muted">{page.checkBody}</p>
            <div className="mt-4">
              <StepList steps={page.checkSteps} />
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{page.checkNote}</p>
            <TrackedLink
              href={href(locale, 'digital-check')}
              event={{ name: 'andario_connect_cta_click', placement: 'digital-check' }}
              variant="secondary"
              className="mt-4"
            >
              Digital Check
            </TrackedLink>
          </article>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.leadTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.leadBody}</p>
            <div className="mt-6">
              <ConnectLeadFlow steps={page.leadSteps} note={page.leadNote} />
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.leadExamples.map((item) => (
                <li key={item} className="rounded-full bg-sand px-3 py-1.5 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.followTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.followBody}</p>
            <div className="mt-6">
              <StepList steps={page.followSteps} />
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">{page.followNote}</p>
            <div className="mt-8 grid gap-3">
              <article className="rounded-[var(--radius-card)] bg-sand p-4">
                <h3 className="font-semibold text-ink">{page.confirmTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{page.confirmBody}</p>
              </article>
              <article className="rounded-[var(--radius-card)] bg-sand p-4">
                <h3 className="font-semibold text-ink">{page.reminderTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{page.reminderBody}</p>
              </article>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{page.messagesNote}</p>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.faqLayerTitle}</h2>
            <div className="mt-6">
              <StepList steps={page.faqLayer} />
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">{page.faqLayerNote}</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.humanTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.humanBody}</p>
            <div className="mt-6">
              <ConnectAutomationBoundary
                autoTitle={locale === 'es' ? 'Automatización' : 'Automation'}
                auto={page.humanAuto}
                humanTitle={locale === 'es' ? 'Humano' : 'Human'}
                human={page.humanPerson}
                note={page.humanNote}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.aiTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.aiBody}</p>
            <div className="mt-6">
              <ConnectAIroadmap badge={page.roadmapLabel} rules={page.aiRules} note={page.aiNote} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.securityTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.securityBody}</p>
            <div className="mt-6">
              <ConnectSecurity points={page.securityPoints} note={page.securityNote} />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.channelTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.channelBody}</p>
          <div className="mt-6 max-w-xl">
            <StepList steps={page.channelSteps} />
          </div>
          <p className="mt-4 text-sm leading-6 text-muted">{page.channelNote}</p>
          <article className="mt-8 max-w-3xl rounded-[var(--radius-card)] border border-dashed border-teal bg-white p-5">
            <p className="text-xs font-semibold tracking-[0.12em] text-teal">{page.roadmapLabel}</p>
            <h3 className="mt-2 text-lg font-semibold text-ink">{page.otherChannelsTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{page.otherChannelsBody}</p>
          </article>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.casesTitle}</h2>
          <p className="mt-3 text-sm font-semibold text-teal">{page.casesNote}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {page.cases.map((item) => (
              <article key={item.title} className="rounded-[var(--radius-card)] bg-sand p-5">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">“{item.quote}”</p>
                <ol className="mt-3 flex flex-col gap-1">
                  {item.steps.map((step, index) => (
                    <li key={step} className="text-sm font-semibold text-ink">
                      {String(index + 1).padStart(2, '0')} {step}
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.ownerTitle}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.owner.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] bg-white p-4">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <h2 className="mt-12 text-2xl font-semibold text-ink">{page.teamTitle}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {page.team.map((item) => (
              <li key={item} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-muted">{page.teamNote}</p>
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
          <article className="mt-10 max-w-3xl rounded-[var(--radius-card)] border border-sand-deep bg-white p-5">
            <h2 className="text-xl font-semibold text-ink">{page.pioneerTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{page.pioneerBody}</p>
          </article>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.processTitle}</h2>
          <div className="mt-8">
            <ConnectProcess steps={page.process} />
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-ink">{page.receiveTitle}</h2>
              <ul className="mt-4 space-y-2">
                {page.receive.map((item) => (
                  <li key={item} className="rounded-2xl bg-sand px-4 py-3 text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-6 text-muted">{page.receiveNote}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-ink">{page.lifecycleTitle}</h2>
              <div className="mt-4">
                <ConnectConversationLifecycle title={page.lifecycleTitle} steps={page.lifecycle} />
              </div>
              <h2 className="mt-8 text-2xl font-semibold text-ink">{page.ecosystemTitle}</h2>
              <div className="mt-4">
                <StepList steps={page.ecosystemSteps} />
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">{page.ecosystemNote}</p>
              <div className="mt-8">
                <ConnectAutomationBoundary
                  autoTitle={page.boundaryAutoTitle}
                  auto={page.boundaryAuto}
                  humanTitle={page.boundaryHumanTitle}
                  human={page.boundaryHuman}
                  note={page.boundaryNote}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-ink">{page.growthTitle}</h2>
            <p className="mt-3 max-w-3xl leading-7 text-muted">{page.growthBody}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.growthPoints.map((point) => (
                <li key={point} className="rounded-full bg-sand px-3 py-1.5 text-sm font-semibold text-ink">
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-6 text-muted">{page.growthNote}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={service.faqs} openEvent={{ name: 'andario_connect_faq_open' }} />
          </div>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.talkCta}
            whatsapp={whatsapp}
            whatsappLabel={page.whatsappCta}
            placement="faq"
          />
        </Container>
      </Section>

      <ConnectFinalCTA locale={locale} dict={dict} whatsapp={whatsapp} />
    </>
  );
}
