'use client';

import { useState } from 'react';
import { TrackedLink } from '@/components/conversion/tracked-link';
import type { AnalyticsEvent } from '@/lib/analytics/events';

export function AccommodationDigitalMaturity({
  label,
  contactHref,
  scenarios,
  idPrefix = 'scenario',
  track = 'solutions',
}: {
  label: string;
  contactHref: string;
  idPrefix?: string;
  track?: 'solutions' | 'home' | 'accommodations';
  scenarios: {
    title: string;
    body?: string;
    cta: string;
    placement: string;
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
          return (
            <button
              key={scenario.title}
              id={`${idPrefix}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${idPrefix}-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                selected ? 'border-teal bg-teal-wash text-ink' : 'border-sand-deep bg-white text-ink hover:border-teal/40'
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
              <span className="mr-2 text-teal">{String(index + 1).padStart(2, '0')}</span>
              {scenario.title}
            </button>
          );
        })}
      </div>
      <div
        id={`${idPrefix}-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`${idPrefix}-tab-${active}`}
        className="mt-4 rounded-[var(--radius-card)] border border-sand-deep bg-white p-5"
      >
        {current.body ? <p className="text-sm leading-6 text-muted">{current.body}</p> : null}
        <ul className={`flex flex-wrap gap-2 ${current.body ? 'mt-4' : ''}`}>
          {current.services.map((service) => (
            <li key={service.href}>
              <TrackedLink href={service.href} variant="secondary" event={serviceEvent(service.service)}>
                {service.name}
              </TrackedLink>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <TrackedLink href={contactHref} event={ctaEvent(current.placement)} cue>
            {current.cta}
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
