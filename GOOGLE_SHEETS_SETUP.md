# Leads en Google Sheets

El formulario de contacto envía los datos a `POST /api/leads`. El servidor de Next.js valida, normaliza y reenvía el lead a un Web App de Google Apps Script. El script agrega una fila en la hoja `Leads`.

El navegador no conoce la URL de Apps Script ni el token.

## A. Crear el spreadsheet

1. Entra a Google Sheets con la cuenta que va a ser dueña de los leads.
2. Crea un libro nuevo. El nombre puede ser `Andario Hospitality — Leads`.

## B. Crear la hoja Leads

1. Renombra la primera pestaña a `Leads`. El nombre tiene que coincidir, con esa mayúscula.
2. En la fila 1 escribe estos encabezados, de la columna A a la S:

| Columna | Encabezado |
| --- | --- |
| A | Fecha |
| B | Nombre |
| C | Alojamiento |
| D | Ubicación |
| E | Tipo de alojamiento |
| F | Email |
| G | WhatsApp |
| H | Necesidades |
| I | Mensaje |
| J | Fuente |
| K | Idioma |
| L | Página |
| M | Referrer |
| N | UTM Source |
| O | UTM Medium |
| P | UTM Campaign |
| Q | Estado |
| R | Consentimiento |
| S | Submission ID |

Estado lo escribe el script como `NUEVO`. Consentimiento y Submission ID quedan para el seguimiento y para detectar un reintento más adelante. Todavía no hay una base que bloquee duplicados.

El tipo de alojamiento se guarda con el identificador del formulario: `hostel`, `small-hotel`, `posada`, `apartment`, `apart-hotel`, `cabin`, `villa`, `rural`, `other`.

Las necesidades se guardan con los identificadores del formulario, separadas por coma: `bookings`, `web`, `google`, `otas`, `organize`, `whatsapp`, `unsure`.

## C. Crear el Apps Script

1. En la hoja: Extensiones → Apps Script.
2. Borra el contenido de `Code.gs`.
3. Pega el archivo `google-apps-script/Code.gs` de este repositorio.
4. Guarda.

## D. Configurar Script Properties

1. En Apps Script: Configuración del proyecto → Propiedades de la secuencia de comandos → Añadir propiedad.
2. `SPREADSHEET_ID`: el ID que aparece en la URL de la hoja, entre `/d/` y `/edit`.
3. Opcional: `WEBHOOK_TOKEN`. Una cadena larga y aleatoria. Si la dejas vacía, el script no exige token.
4. Opcional: `NOTIFICATION_EMAIL`. Correo que recibe el aviso de cada lead. Si falta, o si Gmail no puede enviar, la fila igual se guarda.

No escribas estos valores en el código ni los subas al repositorio.

## E. Deploy

1. Implementar → Nueva implementación.
2. Tipo: Aplicación web.
3. Ejecutar como: yo (la cuenta dueña de la hoja).
4. Quién tiene acceso: Cualquier persona.
5. Implementar y autoriza el acceso a la hoja cuando Google lo pida.
6. Copia la URL de la aplicación web. Tiene que terminar en `/exec`.

Si cambias el código después, crea una nueva implementación o actualiza la existente. Una URL vieja puede seguir ejecutando el código anterior.

## F. Obtener la URL /exec

La URL se ve en Implementar → Administrar implementaciones. Usa la que termina en `/exec`, no la que termina en `/dev`.

## G. Configurar .env.local

En la raíz del proyecto, en `.env.local`:

```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXXXX/exec
GOOGLE_SHEETS_WEBHOOK_TOKEN=
```

Si configuraste `WEBHOOK_TOKEN` en el script, pon el mismo valor en `GOOGLE_SHEETS_WEBHOOK_TOKEN`.

No uses `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL`. Esa URL no debe llegar al navegador.

`.env.example` documenta las variables vacías. No pongas ahí la URL real.

La ruta anterior `POST /api/contact` sigue existiendo y usa `CONTACT_FORM_WEBHOOK_URL`. El formulario público ya no la llama. El destino del formulario es `/api/leads`.

## H. Configurar Vercel

1. Proyecto → Settings → Environment Variables.
2. Agrega `GOOGLE_SHEETS_WEBHOOK_URL`.
3. Si usas token, agrega `GOOGLE_SHEETS_WEBHOOK_TOKEN`.
4. Márcalas para Production. Repite en Preview y Development si esos entornos también deben recibir leads.
5. Vuelve a desplegar. Vercel no aplica una variable nueva al despliegue que ya está en marcha.

## I. Probar en local

1. Arranca `npm run dev`.
2. Abre `http://localhost:3000/es/contacto`.
3. Completa los dos pasos y envía.
4. La API debe responder `200` con `{ "success": true }`.
5. La hoja `Leads` debe tener una fila nueva.
6. La página debe mostrar la confirmación. No debe mostrarla si la hoja no respondió.

Repite en `http://localhost:3000/en/contact`.

## J. Probar en producción

1. Confirma que Vercel tiene la variable y que el deploy es posterior a esa configuración.
2. Envía un lead de prueba desde `/es/contacto`.
3. Revisa la fila en la hoja y borra el dato de prueba si no quieres conservarlo.

## K. Errores comunes

| Qué ves | Qué revisar |
| --- | --- |
| El formulario dice que no pudo enviar y en el servidor aparece `Server configuration missing` | `GOOGLE_SHEETS_WEBHOOK_URL` vacía, mal escrita o el deploy de Vercel no se repitió |
| `LEAD_DELIVERY_FAILED` | La URL no termina en `/exec`, el script no está desplegado como aplicación web, o el token no coincide |
| El script responde `Invalid request` | Falta `SPREADSHEET_ID`, la pestaña no se llama `Leads`, o el token del servidor no es el de `WEBHOOK_TOKEN` |
| La fila no aparece y el script sí respondió éxito | Estás mirando otro libro, o el ID de la propiedad apunta a otra hoja |
| Google pide autorización otra vez | El deploy se hizo con otra cuenta. Ejecutar como la cuenta dueña de la hoja |

El formulario no muestra la URL, el token ni el texto de error de Google.

## Pruebas manuales

### Test 1 — envío completo

Abre `/es/contacto`, completa el formulario y envía.

Esperado: `POST /api/leads` responde 200, Apps Script recibe el JSON, la hoja tiene una fila y el formulario muestra la confirmación.

### Test 2 — sin URL

Quita `GOOGLE_SHEETS_WEBHOOK_URL` y reinicia el servidor.

Esperado: el backend responde 500 con `SERVER_CONFIGURATION_ERROR`. El formulario no muestra éxito. Muestra el mensaje de problema al enviar.

### Test 3 — URL incorrecta

Pon una URL `https://example.com/no-es-el-script`.

Esperado: el backend responde 502 con `LEAD_DELIVERY_FAILED`. El formulario muestra el mismo mensaje amable, sin la URL ni un detalle técnico.
