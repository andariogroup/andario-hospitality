import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="text-3xl font-semibold text-ink">No encontramos esta página.</h1>
      <p className="mt-4 text-muted">We could not find this page.</p>
      <p className="mt-6 flex gap-4 font-semibold">
        <Link href="/es" className="text-teal">
          Inicio
        </Link>
        <Link href="/en" className="text-teal">
          Home
        </Link>
      </p>
    </section>
  );
}
