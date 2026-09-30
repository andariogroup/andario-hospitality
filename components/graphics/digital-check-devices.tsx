import Image from 'next/image';
import type { DigitalCheckContent } from '@/content/types';

type Dashboard = Pick<
  DigitalCheckContent,
  'dashboardLabel' | 'dashboardScoreLabel' | 'dashboardScoreNote' | 'dashboardAreas'
>;

/** Conceptual Digital Check report visual. Demo proportions only. */
export function DigitalCheckDevices({
  copy,
  photo,
}: {
  copy: Dashboard;
  photo: string;
}) {
  return (
    <figure className="relative mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-[1.4rem] border border-ink/15 bg-ink shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-soft px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="ml-3 text-[10px] font-semibold tracking-[0.12em] text-white/70">DIGITAL CHECK</span>
          <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70">{copy.dashboardLabel}</span>
        </div>
        <div className="grid gap-3 bg-white p-4 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-sand-deep bg-sand/50 p-4">
            <p className="text-xs font-semibold text-muted">{copy.dashboardScoreLabel}</p>
            <div className="relative mx-auto mt-3 h-28 w-28">
              <svg viewBox="0 0 96 96" className="h-full w-full" aria-hidden="true">
                <circle cx="48" cy="48" r="36" fill="none" stroke="#e8ddcc" strokeWidth="8" />
                <circle
                  cx="48"
                  cy="48"
                  r="36"
                  fill="none"
                  stroke="#0e7c78"
                  strokeWidth="8"
                  strokeDasharray="170 226"
                  strokeLinecap="round"
                  transform="rotate(-90 48 48)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-semibold text-ink">—</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-teal">
                  {copy.dashboardScoreNote}
                </span>
              </div>
            </div>
            <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-xl">
              <Image src={photo} alt="" fill sizes="180px" className="object-cover" />
            </div>
          </div>
          <div className="space-y-2.5">
            {copy.dashboardAreas.map((area) => (
              <div key={area.label}>
                <div className="mb-1 flex items-center justify-between text-[11px]">
                  <span className="font-medium text-ink">{area.label}</span>
                  <span className="text-muted">{copy.dashboardScoreNote}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-sand">
                  <span className="block h-full rounded-full bg-teal" style={{ width: `${area.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -right-1 -bottom-5 w-[30%] overflow-hidden rounded-[1.35rem] border-[5px] border-ink bg-white shadow-[var(--shadow-soft)] sm:-right-2 sm:bottom-[-1rem]">
        <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-ink/20" />
        <div className="space-y-2 p-2.5">
          <p className="text-[9px] font-semibold tracking-[0.1em] text-teal">CHECK</p>
          <div className="rounded-lg bg-sand p-2">
            <p className="text-[10px] font-semibold text-ink">—</p>
            <p className="text-[9px] text-muted">{copy.dashboardScoreNote}</p>
          </div>
          <div className="space-y-1.5" aria-hidden="true">
            {copy.dashboardAreas.slice(0, 3).map((area) => (
              <div key={area.label} className="h-1.5 rounded-full bg-sand">
                <div className="h-full rounded-full bg-teal" style={{ width: `${area.value}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mt-8 text-center text-xs font-medium text-muted sm:mt-10">{copy.dashboardLabel}</figcaption>
    </figure>
  );
}
