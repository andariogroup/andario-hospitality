'use client';

export default function LocaleError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="text-3xl font-semibold text-ink">Algo no salió como esperábamos.</h1>
      <p className="mt-4 text-muted">Something did not go as expected.</p>
      <button type="button" className="mt-8 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white" onClick={() => reset()}>
        Reintentar
      </button>
    </section>
  );
}
