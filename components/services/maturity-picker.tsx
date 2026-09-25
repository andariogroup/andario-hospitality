'use client';

import { useState } from 'react';
import { TrackedLink } from '@/components/conversion/tracked-link';
import type { AnalyticsEvent } from '@/lib/analytics/events';
import { CalendarDays, ChartLine, Check, Layers, MessageCircle, Monitor, Search, type LucideIcon } from 'lucide-react';

const SITUATION_ICONS: LucideIcon[] = [Monitor, Search, CalendarDays, MessageCircle, Layers, ChartLine];

export function AccommodationDigitalMaturity({
  label,
  contactHref,
  scenarios,
  resultLabel,
  solutionLabel,
  idPrefix = 'scenario',
  track = 'solutions',
}: {
  label: string;
  contactHref: string;
  resultLabel?: string;
  solutionLabel?: string;
  idPrefix?: string;
  track?: 'solutions' | 'home' | 'accommodations';
  scenarios: {
    title: string;
    summary?: string;
    body?: string;
    cta: string;
    placement: string;
    actionHref?: string;
    actionService?: string;
    services: { href: string; name: string; service: string }[];
  }[];
}) {
  const [active, setActive] = useState(0);
  const current = scenarios[active];
  const serviceEvent = (service: string): AnalyticsEvent => {
    if (track === 'home') return { name: 'home_service_click', service };
    if (track === 'accommodations') return { name: 'accommodations_service_click', service };
    return { name: 'solutions_service_click', service };
  };
  const ctaEvent = (placement: string): AnalyticsEvent => {
    if (track === 'home') return { name: 'home_scenario_click', placement };
    if (track === 'accommodations') return { name: 'accommodations_scenario_click', placement };
    return { name: 'solutions_diagnosis_click', placement };
  };

  if (!current) return null;

  return (
    <div>
      <div role="tablist" aria-label={label} className="grid gap-2">
        {scenarios.map((scenario, index) => {
          const selected = index === active;
          const Icon = SITUATION_ICONS[index] ?? Monitor;
          return (
            <button
              key={scenario.title}
              id={`${idPrefix}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${idPrefix}-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-left transition duration-200 motion-safe:hover:-translate-y-0.5 ${
                selected ? 'border-teal bg-teal-wash text-ink' : 'border-sand-deep bg-white text-ink hover:border-teal'
              }`}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
                event.preventDefault();
                const next =
                  event.key === 'ArrowDown' ? (index + 1) % scenarios.length : (index - 1 + scenarios.length) % scenarios.length;
                setActive(next);
                document.getElementById(`${idPrefix}-tab-${next}`)?.focus();
              }}
            >
              <span className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${selected ? 'bg-white text-teal' : 'bg-sand text-ink'}`}>
                <Icon aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-teal">{String(index + 1).padStart(2, '0')}</span>
                  <span className="font-semibold text-ink">{scenario.title}</span>
                </span>
                {scenario.summary ? <span className="mt-1 block text-sm font-normal leading-6 text-muted">{scenario.summary}</span> : null}
              </span>
              {selected ? <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-teal" /> : null}
            </button>
          );
        })}
      </div>
      <div
        key={active}
        id={`${idPrefix}-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`${idPrefix}-tab-${active}`}
        className="mt-4 rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 motion-safe:animate-[dc-fade_0.2s_ease]"
      >
        {current.body ? (
          <div>
            {resultLabel ? <p className="text-sm font-semibold text-teal">{resultLabel}</p> : null}
            <p className={`leading-7 text-muted ${resultLabel ? 'mt-2' : ''}`}>{current.body}</p>
          </div>
        ) : null}
        {current.actionHref && current.services[0] ? (
          <div className="mt-4">
            {solutionLabel ? <p className="text-sm font-semibold text-teal">{solutionLabel}</p> : null}
            <p className="mt-1 font-semibold text-ink">{current.services[0].name}</p>
          </div>
        ) : (
          <ul className={`flex flex-wrap gap-2 ${current.body ? 'mt-4' : ''}`}>
            {current.services.map((service) => (
              <li key={service.href}>
                <TrackedLink href={service.href} variant="secondary" event={serviceEvent(service.service)}>
                  {service.name}
                </TrackedLink>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4">
          <TrackedLink
            href={current.actionHref ?? contactHref}
            event={current.actionService ? serviceEvent(current.actionService) : ctaEvent(current.placement)}
            cue
          >
            {current.cta}
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
