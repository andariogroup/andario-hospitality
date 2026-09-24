import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'Manrope, sans-serif',
          background: '#f8f5ef',
          color: '#10212b',
        }}
      >
        <main style={{ maxWidth: 520, padding: 24 }}>
          <h1>No encontramos esta página.</h1>
          <p>We could not find this page.</p>
          <p>
            <Link href="/es">Español</Link> · <Link href="/en">English</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
