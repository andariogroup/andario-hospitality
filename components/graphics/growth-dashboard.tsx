import type { GrowthContent } from '@/content/types';

type Dashboard = Pick<
  GrowthContent,
  | 'dashboardLabel'
  | 'dashboardNav'
  | 'dashboardMetrics'
  | 'dashboardChannelsTitle'
  | 'dashboardChannels'
  | 'dashboardDevicesTitle'
  | 'dashboardDevices'
>;

/** Conceptual product visual. Demo proportions only — not real property metrics. */
export function GrowthDashboard({ copy }: { copy: Dashboard }) {
  const maxChannel = Math.max(...copy.dashboardChannels.map((item) => item.value), 1);

  return (
    <figure className="relative mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-[1.4rem] border border-sand-deep bg-white shadow-[var(--shadow-soft)]">
        <div className="flex items-center justify-between border-b border-sand-deep/70 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-teal" />
            <span className="text-xs font-semibold tracking-[0.12em] text-ink">ANDARIO GROWTH</span>
          </div>
          <span className="rounded-full bg-sand px-2.5 py-1 text-[11px] font-semibold text-muted">{copy.dashboardLabel}</span>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-[4.5rem_1fr]">
          <aside className="hidden flex-col gap-2 sm:flex" aria-hidden="true">
            {copy.dashboardNav.map((item, index) => (
              <span
                key={item}
                className={`rounded-xl px-2 py-2 text-center text-[10px] font-semibold ${
                  index === 0 ? 'bg-teal-wash text-teal' : 'bg-sand text-muted'
                }`}
              >
                {item.slice(0, 3)}
              </span>
            ))}
          </aside>

          <div className="space-y-4">
            <div className="grid gap-2 sm:grid-cols-3">
              {copy.dashboardMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-sand-deep/80 bg-sand/60 p-3">
                  <p className="text-[11px] font-medium text-muted">{metric.label}</p>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-ink">{metric.value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-teal">{metric.trend}</p>
                  <svg viewBox="0 0 80 24" className="mt-2 h-6 w-full text-teal" aria-hidden="true">
                    <path
                      d="M2 18 C14 16, 18 8, 30 10 S48 20, 58 12 S72 6, 78 8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border border-sand-deep/80 p-3">
                <p className="text-xs font-semibold text-ink">{copy.dashboardChannelsTitle}</p>
                <ul className="mt-3 space-y-2">
                  {copy.dashboardChannels.map((channel) => (
                    <li key={channel.label} className="grid grid-cols-[4.5rem_1fr] items-center gap-2">
                      <span className="text-[11px] text-muted">{channel.label}</span>
                      <span className="h-2 overflow-hidden rounded-full bg-sand">
                        <span
                          className="block h-full rounded-full bg-teal"
                          style={{ width: `${(channel.value / maxChannel) * 100}%` }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-sand-deep/80 p-3">
                <p className="text-xs font-semibold text-ink">{copy.dashboardDevicesTitle}</p>
                <div className="mt-3 flex items-center gap-3">
                  <svg viewBox="0 0 72 72" className="h-16 w-16 shrink-0" aria-hidden="true">
                    <circle cx="36" cy="36" r="28" fill="none" stroke="#e8ddcc" strokeWidth="10" />
                    <circle
                      cx="36"
                      cy="36"
                      r="28"
                      fill="none"
                      stroke="#0e7c78"
                      strokeWidth="10"
                      strokeDasharray={`${(copy.dashboardDevices[0]?.value ?? 0) * 1.76} 176`}
                      strokeLinecap="round"
                      transform="rotate(-90 36 36)"
                    />
                    <circle
                      cx="36"
                      cy="36"
                      r="28"
                      fill="none"
                      stroke="#1e3440"
                      strokeWidth="10"
                      strokeDasharray={`${(copy.dashboardDevices[1]?.value ?? 0) * 1.76} 176`}
                      strokeDashoffset={`-${(copy.dashboardDevices[0]?.value ?? 0) * 1.76}`}
                      transform="rotate(-90 36 36)"
                    />
                  </svg>
                  <ul className="space-y-1">
                    {copy.dashboardDevices.map((device) => (
                      <li key={device.label} className="text-[11px] text-muted">
                        <span className="font-semibold text-ink">{device.label}</span> · {device.value}%
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">{copy.dashboardLabel}</figcaption>
    </figure>
  );
}
