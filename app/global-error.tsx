'use client';

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, minHeight: '100vh', display: 'grid', placeItems: 'center', fontFamily: 'sans-serif', background: '#f8f5ef', color: '#10212b' }}>
        <main style={{ maxWidth: 520, padding: 24 }}>
          <h1>Algo no salió como esperábamos.</h1>
          <p>Something did not go as expected.</p>
          <button type="button" onClick={() => reset()}>
            Reintentar
          </button>
        </main>
      </body>
    </html>
  );
}
