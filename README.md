# Andario Hospitality

Sitio comercial de Andario Hospitality, línea de Andario Group. Español en `/es`, inglés en `/en`.

## Requisitos

- Node.js 20 o superior
- npm

## Puesta en marcha

```bash
npm install
cp .env.example .env.local
npm run dev
```

En Windows, copia `.env.example` a `.env.local`. El sitio local abre en `http://localhost:3000` y redirige a `/es`.

## Variables de entorno

Los datos de contacto, ubicación, redes y analítica no van en el código. Se leen desde el entorno y se documentan en `.env.example`.

Públicas (`NEXT_PUBLIC_*`):

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Origen canónico, sin barra final |
| `NEXT_PUBLIC_PUBLIC_EMAIL` | Correo público |
| `NEXT_PUBLIC_WHATSAPP_PHONE` | WhatsApp en dígitos internacionales |
| `NEXT_PUBLIC_ADDRESS` | Dirección. Si contiene `#`, va entre comillas |
| `NEXT_PUBLIC_CITY` | Ciudad |
| `NEXT_PUBLIC_COUNTRY` | País |
| `NEXT_PUBLIC_LATITUDE` / `NEXT_PUBLIC_LONGITUDE` | Pin del mapa. Las dos o ninguna |
| `NEXT_PUBLIC_FACEBOOK_URL` | Perfil, si existe |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Perfil, si existe |
| `NEXT_PUBLIC_LINKEDIN_URL` | Perfil, si existe |
| `NEXT_PUBLIC_YOUTUBE_URL` | Canal, si existe |
| `NEXT_PUBLIC_TIKTOK_URL` | Perfil, si existe |
| `NEXT_PUBLIC_GOOGLE_PROFILE_URL` | Perfil de Google, si existe |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | GA4. Vacío = sin analítica |

Solo servidor:

| Variable | Uso |
| --- | --- |
| `GOOGLE_SHEETS_WEBHOOK_URL` | URL `/exec` de Apps Script. El formulario público la usa solo desde el servidor |
| `GOOGLE_SHEETS_WEBHOOK_TOKEN` | Opcional. El servidor lo envía a Apps Script. No sale al navegador |
| `CONTACT_FORM_WEBHOOK_URL` | Webhook anterior de `POST /api/contact`. El formulario público ya no lo llama |
| `CONTACT_FORM_WEBHOOK_SECRET` | Opcional. Se envía como `Authorization: Bearer` en esa ruta anterior |

No inventar coordenadas, redes, el ID de GA4 ni la URL del webhook. No uses el prefijo `NEXT_PUBLIC_` en el webhook ni en el secreto.

En Vercel: **Settings → Environment Variables**. Después de cambiar una variable `NEXT_PUBLIC_*`, hay que volver a desplegar.

## Validación

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

`npm run e2e` ejecuta Playwright. Hace falta instalar los navegadores con `npx playwright install chromium` la primera vez.

## Producción

El framework es Next.js. Vercel lo detecta en la raíz del repositorio. Los previews no se indexan (`VERCEL_ENV` distinto de `production`).

El sitio no procesa reservas. Andario Booking Engine es un producto aparte y aquí solo se explica.
