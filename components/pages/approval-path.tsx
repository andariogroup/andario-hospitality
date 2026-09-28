'use client';

import { ChartLine, Compass, FileText, Handshake, Layers, Search, type LucideIcon } from 'lucide-react';
import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';

const ICONS: LucideIcon[] = [Search, Compass, FileText, Handshake, Layers, ChartLine];

type Step = { label: string; title: string; body: string; result: string; mark?: string };

export function ApprovalPath({
  steps,
  resultLabel,
  close,
}: {
  steps: Step[];
  resultLabel: string;
  close: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  useEffect(() => {
    if (paused || active !== 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setTimeout(() => setActive(1), 6000);
    return () => window.clearTimeout(timer);
  }, [paused, active]);

  function select(index: number, focus = false) {
    setPaused(true);
    setActive(index);
    if (focus) buttons.current[index]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = steps.length - 1;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      select(index === last ? 0 : index + 1, true);
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      select(index === 0 ? last : index - 1, true);
    } else if (event.key === 'Home') {
      event.preventDefault();
      select(0, true);
    } else if (event.key === 'End') {
      event.preventDefault();
      select(last, true);
    }
  }

  const last = steps.length - 1;

  return (
    <div>
      <ol role="tablist" aria-orientation="vertical">
        {steps.map((step, index) => {
          const selected = index === active;
          const Icon = ICONS[index] ?? Search;
          const panelId = `${baseId}-panel-${index}`;
          const tabId = `${baseId}-tab-${index}`;
          const traveled = index < active;
          const rowTone = step.mark
            ? selected
              ? 'bg-teal-wash'
              : 'bg-teal-wash/40 hover:bg-teal-wash/70'
            : selected
              ? 'bg-white'
              : 'hover:bg-white';
          return (
            <li key={step.label} className="relative">
              {index < last ? (
                <span aria-hidden="true" className="pointer-events-none absolute top-[26px] left-4 h-full w-px -translate-x-1/2 bg-sand-deep">
                  <span
                    className="absolute inset-x-0 top-0 w-px bg-teal transition-[height] duration-300 ease-out motion-reduce:transition-none"
                    style={{ height: traveled ? '100%' : selected ? '0.75rem' : '0%' }}
                  />
                </span>
              ) : null}
              <button
                ref={(node) => {
                  buttons.current[index] = node;
                }}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={panelId}
                aria-expanded={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className="flex min-h-11 w-full cursor-pointer items-start gap-3 rounded-2xl py-2 pr-2 text-left"
              >
                <span
                  aria-hidden="true"
                  className={`relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-200 motion-reduce:transition-none ${
                    selected ? 'bg-teal text-white' : 'border border-sand-deep bg-white text-teal'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`min-w-0 flex-1 rounded-2xl px-3 py-1.5 transition-colors duration-200 motion-reduce:transition-none ${rowTone}`}>
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-teal" />
                    <span className="text-sm font-semibold text-ink">{step.label}</span>
                    {step.mark ? <span className="text-xs font-semibold tracking-wide text-teal">{step.mark}</span> : null}
                  </span>
                  <span className="mt-0.5 block text-sm leading-5 text-muted">{step.title}</span>
                </span>
              </button>
              <div
                id={panelId}
                role="tabpanel"
                aria-labelledby={tabId}
                aria-hidden={!selected}
                className={`grid overflow-hidden pl-11 transition-[grid-template-rows,opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
                  selected ? 'grid-rows-[1fr] translate-y-0 opacity-100' : 'grid-rows-[0fr] -translate-y-1 opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-md px-3 pt-1 text-sm leading-6 text-muted">{step.body}</p>
                  <p className="mt-2 max-w-md px-3 pb-3 text-sm leading-6 text-ink">
                    <span className="font-semibold text-teal">{resultLabel}. </span>
                    {step.result}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-3 pl-11 text-sm font-semibold text-ink">{close}</p>
    </div>
  );
}
