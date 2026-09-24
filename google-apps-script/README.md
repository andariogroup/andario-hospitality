# Google Apps Script

Este archivo es el receptor que escribe cada lead en Google Sheets. El navegador no lo llama. Solo lo llama el servidor de Next.js (`POST /api/leads`).

La guía completa, de la hoja al deploy en Vercel, está en `GOOGLE_SHEETS_SETUP.md`.

## Propiedades del script

En Apps Script: Proyecto → Configuración del proyecto → Propiedades del script.

| Propiedad | Obligatoria | Uso |
| --- | --- | --- |
| `SPREADSHEET_ID` | Sí | ID de la hoja, el tramo de la URL entre `/d/` y `/edit` |
| `WEBHOOK_TOKEN` | No | Si existe, el POST debe traer el mismo valor en `token`. No se escribe en la hoja ni en el correo |
| `NOTIFICATION_EMAIL` | No | Correo que recibe el aviso cuando llega un lead. Si falta o el envío falla, la fila igual se guarda |

No pegues el ID ni el token dentro de `Code.gs`.

## Deploy

1. Implementar → Nueva implementación → Aplicación web.
2. Ejecutar como: yo.
3. Quién tiene acceso: cualquier persona. Hace falta para que el servidor de Next.js pueda llamar el `/exec` sin una sesión de Google.
4. Copia la URL que termina en `/exec`.
5. Pégala en `GOOGLE_SHEETS_WEBHOOK_URL` del servidor. Si usas token, el mismo valor va en `GOOGLE_SHEETS_WEBHOOK_TOKEN` y en `WEBHOOK_TOKEN`.

## Columnas

La hoja se llama `Leads`. `Code.gs` escribe en este orden:

Fecha, Nombre, Alojamiento, Ubicación, Tipo de alojamiento, Email, WhatsApp, Necesidades, Mensaje, Fuente, Idioma, Página, Referrer, UTM Source, UTM Medium, UTM Campaign, Estado, Consentimiento, Submission ID.

Estado sale siempre como `NUEVO`. El token no se guarda.
