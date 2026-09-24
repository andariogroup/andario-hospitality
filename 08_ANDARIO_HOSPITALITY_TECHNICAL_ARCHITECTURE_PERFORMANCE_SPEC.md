# 08 — ANDARIO HOSPITALITY
# TECHNICAL ARCHITECTURE & PERFORMANCE SPEC

**Versión:** 1.0  
**Estado:** Arquitectura técnica base para implementación  
**Marca:** Andario Hospitality  
**Parent brand:** Andario Group  
**Producto tecnológico relacionado:** Andario Booking Engine  
**Mercado inicial:** Colombia  
**Expansión:** Latinoamérica  
**Idiomas:** Español / Inglés

---

# 1. OBJETIVO

Este documento define la arquitectura técnica recomendada para el sitio corporativo y comercial de Andario Hospitality.

El sitio debe ser:

- rápido;
- seguro;
- escalable;
- accesible;
- optimizado para SEO;
- preparado para español e inglés;
- fácil de mantener;
- preparado para crecimiento de contenido;
- preparado para integrar productos propios;
- preparado para futuras herramientas de IA;
- compatible con una estrategia comercial de largo plazo.

La arquitectura debe evitar complejidad innecesaria.

Principio:

> **Construir una plataforma corporativa sólida, no una aplicación innecesariamente compleja.**

---

# 2. STACK TECNOLÓGICO OFICIAL

## Frontend

**Next.js**

Responsabilidades:

- rendering;
- routing;
- metadata;
- páginas;
- componentes;
- optimización de imágenes;
- generación de sitemap;
- robots;
- internacionalización;
- integración con APIs.

## Lenguaje

**TypeScript**

Razones:

- tipado;
- mantenibilidad;
- reducción de errores;
- mejor soporte IDE;
- escalabilidad.

## UI

**React**

Responsabilidad:

- componentes;
- interacción;
- formularios;
- elementos dinámicos.

## CSS

**Tailwind CSS**

Responsabilidad:

- implementación del Design System;
- responsive;
- utilities;
- tokens visuales;
- consistencia.

## Componentes

**shadcn/ui + componentes propios**

Regla:

shadcn/ui se utiliza como base técnica cuando sea conveniente.

La identidad visual de Andario Hospitality debe estar definida por los componentes propios y el Design System, no por el estilo predeterminado de una librería.

## Hosting

**Vercel**

Responsabilidades:

- deployment;
- CDN;
- HTTPS;
- previews;
- producción;
- integración con Git.

## Repositorio

**GitHub**

Responsabilidades:

- versionamiento;
- branches;
- pull requests;
- CI/CD;
- historial.

---

# 3. TECNOLOGÍAS COMPLEMENTARIAS

## Formularios

**React Hook Form + Zod**

Para:

- validación;
- formularios;
- mensajes de error;
- validación cliente;
- contratos de datos.

La validación del servidor siempre debe existir cuando haya procesamiento backend.

## Animación

Preferencia:

1. CSS;
2. Web APIs;
3. Motion únicamente cuando aporte valor real.

No utilizar una librería de animación pesada para efectos que CSS puede resolver.

## Contenido

Inicialmente:

**MDX / contenido versionado en Git**

No incorporar CMS desde el primer día si no existe una necesidad real.

Cuando el volumen editorial lo justifique, podrá incorporarse un CMS.

---

# 4. ARQUITECTURA GENERAL

```text
                    ANDARIO HOSPITALITY
                           │
                           ▼
                    Next.js + React
                           │
             ┌─────────────┼─────────────┐
             │             │             │
             ▼             ▼             ▼
           Pages       Components      Content
             │             │             │
             └─────────────┼─────────────┘
                           │
                    TypeScript
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
         SEO          Forms / APIs       Analytics
          │                │                │
          │                ▼                │
          │          Email / Services       │
          │                                 │
          └───────────────┬─────────────────┘
                          ▼
                        Vercel
                          │
                          ▼
                 Andario Booking Engine
                    (integración futura)
```

---

# 5. PRINCIPIO DE SEPARACIÓN

El sitio corporativo **no debe convertirse en el Booking Engine**.

Son productos diferentes.

## Andario Hospitality Website

Responsabilidad:

- marca;
- comunicación;
- SEO;
- captación;
- contenido;
- generación de leads;
- explicación de servicios;
- presentación del producto.

## Andario Booking Engine

Responsabilidad:

- disponibilidad;
- inventario;
- tarifas;
- huéspedes;
- reservas;
- reglas;
- lógica de booking;
- canales;
- operación del alojamiento.

La integración debe producirse mediante APIs o mecanismos explícitos.

Nunca duplicar la lógica de reservas dentro del sitio corporativo.

---

# 6. ESTRUCTURA DE PROYECTO

Estructura inicial recomendada:

```text
andario-hospitality/
│
├── app/
│   ├── [locale]/
│   │   ├── page.tsx
│   │   ├── soluciones/
│   │   ├── alojamientos/
│   │   ├── como-trabajamos/
│   │   ├── booking-engine/
│   │   ├── casos/
│   │   ├── nosotros/
│   │   ├── faq/
│   │   └── contacto/
│   │
│   ├── sitemap.ts
│   ├── robots.ts
│   └── ...
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── services/
│   ├── booking/
│   ├── forms/
│   ├── ui/
│   └── seo/
│
├── content/
│   ├── es/
│   └── en/
│
├── lib/
│   ├── seo/
│   ├── i18n/
│   ├── validation/
│   ├── analytics/
│   └── utils/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── styles/
│   └── ...
│
├── types/
│   └── ...
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

La estructura final puede ajustarse a la versión concreta de Next.js utilizada durante implementación.

---

# 7. ROUTING INTERNACIONAL

La arquitectura debe contemplar:

```text
/es/
/en/
```

Ejemplos:

```text
/es/
/en/

/es/soluciones
/en/solutions

/es/booking-engine
/en/booking-engine

/es/contacto
/en/contact
```

El inglés no debe ser una traducción improvisada de último momento.

Debe existir contenido localizado.

---

# 8. REGLA DE URLS

Las URLs deben ser:

- cortas;
- descriptivas;
- estables;
- legibles;
- sin parámetros innecesarios;
- coherentes entre idiomas.

Ejemplo:

```text
/es/soluciones/andario-booking-engine
/en/solutions/andario-booking-engine
```

Evitar:

```text
/page?id=123
/service?id=7
```

---

# 9. RENDERING STRATEGY

El sitio será principalmente de contenido.

Por tanto, debe privilegiarse:

- Static Rendering;
- Server Components;
- generación estática cuando sea posible;
- revalidación cuando exista contenido que cambie.

No convertir cada componente en Client Component.

## Server Components

Preferencia para:

- páginas;
- textos;
- SEO;
- cards estáticas;
- contenido;
- navegación no interactiva.

## Client Components

Reservarlos para:

- menú mobile interactivo;
- formularios;
- animaciones complejas;
- elementos dinámicos;
- componentes que realmente necesiten estado del navegador.

Principio:

> **Client JavaScript solamente cuando exista una razón funcional.**

---

# 10. SERVER ACTIONS / API

Cuando el proyecto necesite procesamiento de formularios, se debe elegir una estrategia explícita.

Posibles opciones:

- Server Actions;
- Route Handlers;
- servicio externo.

La decisión debe hacerse según el caso de uso.

No crear APIs internas simplemente para trasladar datos de un componente a otro.

---

# 11. FORMULARIO DE DIAGNÓSTICO

Flujo:

```text
Usuario
   │
   ▼
Formulario
   │
   ▼
Validación cliente
   │
   ▼
Validación servidor
   │
   ▼
Anti-abuse / rate limit
   │
   ▼
Servicio de email / CRM
   │
   ▼
Confirmación
```

Nunca confiar exclusivamente en la validación del navegador.

---

# 12. SEGURIDAD

La seguridad debe implementarse desde la arquitectura.

## HTTPS

Todo tráfico productivo debe utilizar HTTPS.

## Headers

Configurar headers apropiados, incluyendo según compatibilidad:

- Content-Security-Policy;
- Strict-Transport-Security;
- X-Content-Type-Options;
- Referrer-Policy;
- Permissions-Policy;
- frame protection mediante CSP.

Los valores finales deben probarse para no romper analytics, formularios o integraciones legítimas.

## Cookies

Evitar cookies innecesarias.

Cuando se utilicen:

- Secure;
- HttpOnly cuando corresponda;
- SameSite apropiado.

## Secrets

Nunca colocar:

- API keys;
- secretos;
- credenciales;
- tokens privados

en el repositorio ni en código cliente.

Usar variables de entorno y secretos del proveedor de deployment.

---

# 13. CONTENT SECURITY POLICY

CSP debe diseñarse después de conocer las integraciones reales.

Debe permitir únicamente los orígenes necesarios.

Ejemplo conceptual:

```text
default-src 'self'
script-src 'self' ...
style-src 'self' ...
img-src 'self' data: https: ...
font-src 'self' ...
connect-src 'self' ...
frame-ancestors 'none'
```

No copiar una CSP genérica sin analizar las dependencias reales.

---

# 14. PROTECCIÓN DE FORMULARIOS

Los formularios públicos son una superficie de abuso.

Implementar:

- validación;
- rate limiting;
- honeypot o mecanismo anti-bot;
- límites de longitud;
- sanitización;
- protección contra spam;
- logging de errores sin exponer datos sensibles.

CAPTCHA solo si el abuso real lo justifica.

---

# 15. DATOS PERSONALES

El formulario de contacto puede procesar:

- nombre;
- email;
- teléfono/WhatsApp;
- información del alojamiento;
- descripción de necesidades.

Debe existir:

- consentimiento cuando corresponda;
- política de privacidad;
- finalidad clara;
- mecanismo adecuado para solicitudes de titulares.

La implementación legal debe ser revisada antes de producción.

---

# 16. SEO TÉCNICO

Cada página debe tener:

- title;
- meta description;
- canonical;
- Open Graph;
- Twitter/X metadata cuando aplique;
- idioma;
- alternates;
- headings semánticos.

No generar metadata genérica para todo el sitio.

---

# 17. HREFLANG

Para las versiones bilingües:

```text
es
en
x-default
```

Cada versión debe:

- apuntar a sí misma;
- apuntar a su alternativa;
- utilizar URLs absolutas correctas;
- mantener reciprocidad.

La configuración debe alinearse con la arquitectura SEO definida en el Documento 06.

---

# 18. SITEMAP

Generar sitemap mediante Next.js.

Debe incluir únicamente URLs:

- indexables;
- canónicas;
- públicas;
- relevantes.

No incluir:

- páginas de error;
- URLs internas;
- duplicados;
- páginas noindex.

---

# 19. ROBOTS.TXT

Debe:

- permitir crawling de páginas públicas;
- bloquear únicamente recursos o rutas que realmente no deban rastrearse;
- declarar sitemap.

No utilizar robots.txt como sustituto de noindex.

---

# 20. DATOS ESTRUCTURADOS

Utilizar structured data cuando aporte comprensión semántica.

Posibles tipos:

- Organization;
- LocalBusiness cuando corresponda;
- WebSite;
- WebPage;
- BreadcrumbList;
- Article para contenidos editoriales;
- FAQPage únicamente cuando el contenido y las condiciones de uso lo justifiquen.

El marcado debe representar fielmente el contenido visible.

No utilizar structured data como mecanismo para inventar información.

---

# 21. IMÁGENES

Utilizar el sistema de optimización de imágenes de Next.js.

Reglas:

- dimensiones conocidas;
- responsive images;
- formatos modernos cuando sea apropiado;
- compresión;
- alt text;
- lazy loading fuera del viewport;
- prioridad solamente para imágenes críticas.

El hero puede requerir tratamiento especial por LCP.

---

# 22. LCP

El elemento LCP de la página inicial debe estar identificado durante QA.

Si es una imagen hero:

- debe optimizarse;
- debe tener dimensiones;
- debe cargarse con prioridad cuando corresponda;
- no debe depender de JavaScript innecesario.

Evitar colocar una imagen enorme como background CSS si perjudica la carga principal.

---

# 23. CLS

Para reducir Cumulative Layout Shift:

- definir width/height o aspect ratio;
- reservar espacio para imágenes;
- evitar inyección tardía de banners;
- evitar fuentes que produzcan saltos visibles;
- reservar espacio para elementos dinámicos.

---

# 24. INP

Para mejorar interacción:

- minimizar JavaScript;
- evitar listeners innecesarios;
- evitar componentes cliente excesivos;
- dividir tareas largas;
- optimizar formularios;
- evitar animaciones costosas.

---

# 25. FUENTES

La estrategia inicial:

- una familia tipográfica;
- pocos pesos;
- carga optimizada;
- preferiblemente self-hosting si las condiciones de implementación lo permiten.

No cargar seis o siete variantes de una fuente.

La tipografía debe ser parte del performance budget.

---

# 26. PERFORMANCE BUDGET

Como objetivo inicial:

- HTML inicial razonable;
- JavaScript cliente mínimo;
- imágenes optimizadas;
- fuentes limitadas;
- sin dependencias innecesarias.

El objetivo no es cumplir únicamente una cifra de Lighthouse.

Debe optimizarse la experiencia real.

Métricas prioritarias:

- LCP;
- INP;
- CLS;
- TTFB;
- peso de página;
- JavaScript ejecutado.

---

# 27. ANALYTICS

Implementar:

**Google Analytics 4**

Eventos relevantes:

- `generate_lead`
- `contact_submit`
- `whatsapp_click`
- `booking_engine_view`
- `booking_engine_cta`
- `case_view`
- `language_change`

Los nombres definitivos deben documentarse en una especificación de analítica.

No medir eventos irrelevantes solamente para aumentar la cantidad de métricas.

---

# 28. GOOGLE SEARCH CONSOLE

Debe configurarse:

- propiedad del dominio;
- sitemap;
- inspección de URLs;
- cobertura;
- rendimiento;
- consultas;
- indexación.

Search Console será una fuente para validar hipótesis SEO.

---

# 29. TRACKING DE CONVERSIONES

El sitio debe permitir distinguir:

```text
Visita
   ↓
Página
   ↓
Interacción
   ↓
CTA
   ↓
Formulario / WhatsApp
   ↓
Lead
```

Cuando sea técnicamente posible y legalmente apropiado:

```text
Lead
   ↓
Diagnóstico
   ↓
Propuesta
   ↓
Cliente
```

Esto permitirá posteriormente evaluar el verdadero rendimiento comercial del sitio.

---

# 30. BOOKING ENGINE INTEGRATION

El sitio debe poder enlazar o integrar Andario Booking Engine.

Primera fase:

CTA / navegación hacia Booking Engine.

Fases posteriores:

- widget;
- disponibilidad;
- reserva;
- deep links;
- identificación del alojamiento;
- tracking del origen.

La integración debe utilizar contratos API documentados.

No duplicar disponibilidad ni precios en la web corporativa.

---

# 31. FUTURA IA

La arquitectura debe permitir posteriormente integrar:

- asistente;
- chatbot;
- generación de contenido;
- soporte;
- recomendación;
- automatización.

Pero no se debe añadir IA únicamente porque sea una tendencia.

Para reservas, cualquier agente debe consultar el Booking Engine como fuente de verdad.

Principio:

> **La IA conversa; el Booking Engine decide la disponibilidad y la lógica de reserva.**

---

# 32. ACCESIBILIDAD

Objetivo:

**WCAG 2.2 AA como referencia.**

Implementar:

- HTML semántico;
- labels;
- focus;
- navegación teclado;
- contraste;
- alt;
- landmarks;
- aria únicamente cuando sea necesario;
- mensajes de error accesibles.

No utilizar ARIA para corregir HTML semántico mal construido.

---

# 33. TESTING

## Unit

Para:

- utilidades;
- validaciones;
- funciones;
- transformaciones.

## Integration

Para:

- formularios;
- APIs;
- integraciones.

## E2E

Para flujos críticos:

1. Home.
2. Navegación.
3. Cambio de idioma.
4. Solicitud de diagnóstico.
5. CTA WhatsApp.
6. Booking Engine CTA.
7. Formularios.
8. 404.

## Visual QA

Revisión en:

- mobile;
- tablet;
- desktop;
- navegadores principales.

---

# 34. CI/CD

Flujo recomendado:

```text
Developer
   ↓
Git branch
   ↓
Pull Request
   ↓
Checks
   ├── TypeScript
   ├── Lint
   ├── Tests
   └── Build
   ↓
Preview Vercel
   ↓
Revisión
   ↓
Merge
   ↓
Production
```

No hacer cambios directamente en producción como práctica habitual.

---

# 35. ENVIRONMENT STRATEGY

Entornos:

```text
Development
Preview
Production
```

Variables separadas.

Ejemplo:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_GA_ID
BOOKING_ENGINE_URL
EMAIL_SERVICE_API_KEY
```

Las variables públicas no deben contener secretos.

---

# 36. DOMINIO

Dominio principal recomendado:

**andariohospitality.com**

Arquitectura:

```text
https://andariohospitality.com
```

Redirecciones consistentes para:

- www;
- http;
- versiones duplicadas.

La URL canónica debe estar definida.

---

# 37. EMAIL

La web no debe depender de un servidor de correo improvisado.

Separar:

### Email corporativo

Ejemplo:

`contacto@andariohospitality.com`

### Email transaccional

Para:

- formularios;
- notificaciones;
- mensajes automáticos.

El proveedor definitivo se seleccionará antes de implementación.

---

# 38. CMS — DECISIÓN INICIAL

No incorporar CMS en V1.

Razones:

- menor superficie de ataque;
- menor complejidad;
- menor costo;
- mejor control de versiones;
- contenido inicial relativamente estable;
- mejor integración con Git.

Reevaluar cuando:

- haya publicación frecuente;
- múltiples editores;
- blog activo;
- muchos casos;
- landing pages administrables;
- equipo no técnico gestionando contenido.

---

# 39. CACHE Y REVALIDACIÓN

Contenido estable:

**Static Rendering**

Contenido que cambie ocasionalmente:

**Revalidation**

Contenido altamente dinámico:

**Server-side / API**

No utilizar una estrategia dinámica para todo el sitio.

---

# 40. ERROR HANDLING

Implementar:

- error boundary;
- página 404;
- página de error;
- logs internos;
- mensajes amigables.

No exponer:

- stack traces;
- variables de entorno;
- secretos;
- detalles internos.

---

# 41. OBSERVABILIDAD

Inicialmente:

- Vercel logs;
- errores de aplicación;
- Search Console;
- Analytics.

Posteriormente:

- error tracking;
- performance monitoring;
- alertas.

No instalar cinco herramientas de observabilidad desde el primer día.

---

# 42. DEPENDENCIAS

Reglas:

- instalar solo dependencias justificadas;
- revisar mantenimiento;
- revisar vulnerabilidades;
- actualizar periódicamente;
- eliminar dependencias no utilizadas.

No instalar una librería para resolver una función que pueda implementarse con unas pocas líneas de código nativo.

---

# 43. SECURITY CHECKLIST ANTES DE PRODUCCIÓN

- HTTPS.
- Headers.
- CSP probada.
- Secrets fuera del código.
- Formularios protegidos.
- Rate limiting.
- Validación servidor.
- Dependencias revisadas.
- No información sensible en logs.
- No endpoints innecesarios.
- Cookies revisadas.
- Política de privacidad publicada.
- Consentimientos revisados.
- 404/500 controlados.

---

# 44. SEO + PERFORMANCE + UX

Estas tres disciplinas no deben tratarse como proyectos independientes.

Ejemplo:

Una imagen hero puede ser:

- bonita para UX;
- relevante para SEO;
- pero perjudicial para LCP.

Por tanto, debe optimizarse conjuntamente.

Principio:

> **Cada decisión visual debe evaluarse también desde performance, accesibilidad y SEO.**

---

# 45. ARQUITECTURA FUTURA

El sitio debe poder evolucionar hacia:

```text
Andario Hospitality
│
├── Corporate Website
│
├── Resources
│   ├── Blog
│   ├── Guides
│   ├── Cases
│   └── Tools
│
├── Andario Booking Engine
│
├── AI Assistant
│
├── Client Area
│
└── Future Hospitality Products
```

La V1 no debe implementar todo esto.

Debe simplemente evitar bloquearlo.

---

# 46. PRINCIPIO DE MINIMALISMO TÉCNICO

La arquitectura debe seguir:

> **Simple donde puede ser simple. Compleja únicamente donde el negocio lo exige.**

No utilizar:

- microservicios para una web corporativa;
- base de datos sin necesidad;
- CMS sin necesidad;
- librerías innecesarias;
- estado global complejo;
- APIs internas innecesarias.

---

# 47. DEFINITION OF DONE — SITIO CORPORATIVO

La plataforma podrá considerarse técnicamente preparada para producción cuando:

### Arquitectura

- Next.js configurado.
- TypeScript configurado.
- estructura de rutas.
- componentes.
- Design System implementado.

### SEO

- metadata.
- canonical.
- hreflang.
- sitemap.
- robots.
- structured data aplicable.
- Open Graph.

### Performance

- imágenes optimizadas.
- fuentes optimizadas.
- JS minimizado.
- LCP revisado.
- CLS revisado.
- INP revisado.

### Seguridad

- HTTPS.
- headers.
- CSP.
- secrets.
- validación.
- rate limiting.
- protección anti-spam.

### Accesibilidad

- keyboard navigation.
- focus.
- contraste.
- labels.
- semantic HTML.

### Analytics

- GA4.
- Search Console.
- eventos principales.

### Deployment

- GitHub.
- Preview.
- Production.
- variables de entorno.

---

# 48. PRINCIPIO FINAL

El sitio de Andario Hospitality debe construirse como un **activo digital estratégico**, no simplemente como una página corporativa.

Debe servir simultáneamente para:

- posicionar la marca;
- generar confianza;
- explicar el portafolio;
- captar clientes;
- posicionar Andario Booking Engine;
- construir autoridad SEO;
- medir demanda;
- aprender del mercado;
- preparar futuras integraciones.

La arquitectura técnica debe ser suficientemente sólida para acompañar ese crecimiento sin convertir la V1 en un proyecto innecesariamente complejo.

> **La tecnología debe desaparecer detrás de una experiencia simple, rápida y confiable.**
