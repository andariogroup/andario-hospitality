# 10 --- ANDARIO HOSPITALITY --- IMPLEMENTATION SPECIFICATION

**Versión:** 1.0\
**Estado:** Manual base de construcción de V1\
**Stack:** Next.js + TypeScript + React + Tailwind CSS + shadcn/ui +
Vercel\
**Idiomas:** Español / Inglés

## 1. Objetivo

Convertir las decisiones estratégicas, comerciales, de contenido, SEO,
UI/UX, arquitectura y seguridad anteriores en un plan concreto para
construir la V1 del sitio de Andario Hospitality.

La V1 debe ser profesional, moderna, rápida, bilingüe, responsive,
accesible, segura, optimizada para SEO y preparada para escalar.

> **No empezar a programar componentes aislados. Primero construir la
> base, luego el sistema, después las páginas y finalmente las
> optimizaciones.**

## 2. Stack cerrado

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   React Hook Form
-   Zod
-   Vercel
-   Git + GitHub
-   Google Analytics 4
-   Google Search Console
-   Contenido versionado en Git; MDX cuando resulte útil

**No incorporar CMS en V1 salvo necesidad real.**

## 3. Orden de construcción

``` text
01 Repository
02 Next.js
03 TypeScript
04 Tailwind
05 Design Tokens
06 Fonts
07 Layout
08 Header
09 Footer
10 i18n
11 SEO foundation
12 Home
13 Services
14 Booking Engine
15 How we work
16 About
17 Cases
18 FAQ
19 Contact
20 Forms
21 Analytics
22 Security
23 Accessibility
24 Performance
25 Testing
26 Production
```

## 4. Estructura inicial

``` text
andario-hospitality/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── soluciones/
│   │   ├── alojamientos/
│   │   ├── como-trabajamos/
│   │   ├── booking-engine/
│   │   ├── casos/
│   │   ├── nosotros/
│   │   ├── faq/
│   │   └── contacto/
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── not-found.tsx
│   └── error.tsx
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── ui/
│   ├── sections/
│   ├── services/
│   ├── booking/
│   ├── forms/
│   └── seo/
├── content/
│   ├── es/
│   └── en/
├── lib/
│   ├── i18n/
│   ├── seo/
│   ├── analytics/
│   ├── validation/
│   └── utils/
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── styles/
├── types/
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 5. Design System

Implementar los tokens del documento UI/UX:

-   Ink `#10212B`
-   Ink secundario `#1E3440`
-   Texto `#26343A`
-   Texto muted `#66757C`
-   Blanco `#FFFFFF`
-   Sand `#F8F5EF`
-   Sand secundario `#E8DDCC`
-   Teal `#0E7C78`
-   Teal claro `#D9F0EE`
-   Success `#26734D`
-   Warning `#A36A18`
-   Error `#B54747`

Tipografía: **Manrope**, pesos 400/500/600/700.

La identidad de Andario Group y la de Andario Hospitality deben estar
relacionadas, pero no confundirse.

## 6. Layout y navegación

Crear:

``` text
RootLayout
 ├── Header
 ├── Main
 └── Footer
```

El layout maneja metadata base, idioma, fuentes, estilos y navegación,
no lógica de negocio.

El Header debe incluir logo, navegación, CTA, ES/EN y menú mobile.

CTA principal:

**Solicitar diagnóstico**

El menú mobile debe ser accesible, permitir Escape, mantener focus y
evitar scroll accidental detrás del panel.

El Footer debe contener marca, navegación, soluciones, contacto, legal,
información empresarial y redes únicamente cuando existan oficialmente.

## 7. Internacionalización

Locales:

``` text
/es/
/en/
```

Locale por defecto:

``` text
es
```

El contenido se mantiene separado por idioma:

``` text
content/es/
content/en/
```

El inglés debe ser una localización profesional, no una traducción
automática literal.

## 8. SEO

Cada página debe definir:

-   title;
-   meta description;
-   canonical;
-   Open Graph;
-   alternate languages;
-   headings semánticos.

Crear una utilidad equivalente a:

``` text
createPageMetadata({
  title,
  description,
  path,
  locale
})
```

Implementar:

``` text
app/sitemap.ts
app/robots.ts
```

El sitemap debe contener únicamente URLs públicas, indexables y
canónicas.

## 9. Home

Orden:

``` text
Hero
↓
Problem
↓
Solution
↓
Portfolio
↓
Differentiation
↓
Who we serve
↓
Process
↓
Trust
↓
About
↓
Cases
↓
Final CTA
↓
Footer
```

Hero:

**Digitalización para pequeños alojamientos.**

Texto:

**Estrategia, tecnología y acompañamiento para convertir tu presencia en
Internet en una herramienta real de crecimiento.**

CTA:

**Solicitar diagnóstico digital**

Secundario:

**Conocer nuestras soluciones**

## 10. Servicios

Los siete servicios:

1.  Digital Check
2.  Andario Web
3.  Andario Visibility
4.  Andario Booking Engine
5.  Andario Connect
6.  Andario Content
7.  Andario Growth

Crear `ServiceCard.tsx`.

Modelo:

``` ts
type Service = {
  slug: string
  name: string
  shortDescription: string
  description: string
  href: string
  icon?: string
}
```

Cada página de servicio:

``` text
Hero
Problem
Solution
What's included
How it works
Ecosystem
FAQ
CTA
```

## 11. Booking Engine

La página debe explicar:

-   qué es;
-   problema;
-   funcionamiento;
-   qué centraliza;
-   canales;
-   beneficios;
-   arquitectura;
-   evolución;
-   CTA.

V1:

``` text
Andario Hospitality
        ↓
CTA
        ↓
Andario Booking Engine
```

No duplicar disponibilidad, precios ni lógica de reservas en el sitio
corporativo.

No presentar funcionalidades futuras como productivas.

## 12. Casos

Primer caso:

**BARUCH Hostal**

Presentación inicial:

> **Establecimiento pionero de Andario Hospitality.**

No publicar métricas comerciales hasta disponer de datos medidos y
autorización.

## 13. Contacto y formularios

Formulario:

-   Nombre
-   Alojamiento/empresa
-   Ciudad
-   Tipo de alojamiento
-   Sitio web
-   WhatsApp
-   Email
-   Necesidad
-   Consentimiento cuando corresponda

Crear schemas equivalentes a:

``` text
contactSchema
diagnosticSchema
```

Flujo:

``` text
Submit
↓
Client validation
↓
Server validation
↓
Rate limit
↓
Anti-spam
↓
Email / CRM
↓
Success
```

Nunca exponer claves API en el cliente.

## 14. WhatsApp y configuración

Crear `WhatsAppButton.tsx`.

Centralizar en `lib/site-config.ts`:

-   nombre;
-   dominio;
-   email;
-   WhatsApp;
-   empresa;
-   locales;
-   redes;
-   CTA;
-   información corporativa.

No duplicar datos en múltiples componentes.

## 15. Imágenes e iconos

Utilizar `next/image` cuando corresponda.

Toda imagen debe tener:

-   dimensiones;
-   alt;
-   optimización;
-   revisión de peso.

Usar nombres descriptivos.

Los iconos de UI deben pertenecer a una familia consistente.

## 16. Analytics

Crear:

``` text
lib/analytics/
```

Eventos iniciales:

``` text
generate_lead
contact_submit
whatsapp_click
booking_engine_view
booking_engine_cta
case_view
language_change
```

Evitar eventos duplicados o tracking innecesario.

Analytics debe respetar la configuración de privacidad.

## 17. Seguridad

Aplicar el Documento 09:

-   HTTPS;
-   security headers;
-   CSP;
-   HSTS cuando corresponda;
-   Referrer Policy;
-   Permissions Policy;
-   protección contra framing;
-   validación;
-   rate limiting;
-   anti-spam;
-   gestión segura de secretos.

`.env.example`:

``` text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA_ID=
BOOKING_ENGINE_URL=
EMAIL_SERVICE_API_KEY=
```

Los secretos reales no deben entrar en Git.

## 18. Testing

### Unit

-   utilidades;
-   schemas;
-   configuración.

### Integration

-   formularios;
-   endpoints;
-   analytics cuando aplique.

### E2E

-   Home;
-   navegación;
-   cambio de idioma;
-   contacto;
-   WhatsApp;
-   Booking Engine;
-   404. 

## 19. Accessibility QA

Revisar:

-   teclado;
-   focus;
-   contraste;
-   labels;
-   headings;
-   alt;
-   navegación mobile;
-   reduced motion.

Objetivo:

**WCAG 2.2 AA como referencia.**

## 20. Performance QA

Revisar:

-   LCP;
-   INP;
-   CLS;
-   TTFB;
-   JavaScript;
-   imágenes;
-   fuentes.

Especial atención al elemento LCP del Hero.

No sacrificar performance por animaciones decorativas.

## 21. Browser QA

Validar como mínimo:

-   Chrome;
-   Edge;
-   Safari;
-   Firefox;
-   Safari mobile;
-   Chrome Android.

## 22. Vercel y GitHub

Entornos:

``` text
Development
Preview
Production
```

Flujo:

``` text
main
  ↑
Pull Request
  ↑
feature/*
```

Antes de merge:

-   lint;
-   typecheck;
-   tests;
-   build.

Cada Pull Request debe generar Preview cuando la configuración lo
permita.

## 23. Sprints de implementación

### Sprint 1 --- Foundation

Repository, Next.js, TypeScript, Tailwind, fonts, tokens y layout.

### Sprint 2 --- Navigation

Header, mobile menu, footer y language switcher.

### Sprint 3 --- Home

Hero, problem, solution, services, process, trust, about y CTA.

### Sprint 4 --- Services

Portfolio y siete páginas de servicio.

### Sprint 5 --- Booking Engine

Página dedicada, arquitectura visual y CTA.

### Sprint 6 --- Content Pages

Alojamientos, proceso, nosotros, casos y FAQ.

### Sprint 7 --- Contact

Formularios, validación, email y WhatsApp.

### Sprint 8 --- SEO

Metadata, sitemap, robots, hreflang, structured data y Open Graph.

### Sprint 9 --- Security

Headers, CSP, rate limiting, anti-spam y secretos.

### Sprint 10 --- QA

Accessibility, performance, browsers, mobile y E2E.

### Sprint 11 --- Production

Dominio, Vercel, Analytics, Search Console y auditoría final.

## 24. Qué NO hacer en V1

No incorporar inicialmente:

-   CMS complejo;
-   login de clientes;
-   dashboard;
-   CRM propio;
-   base de datos innecesaria;
-   microservicios;
-   chatbot complejo;
-   IA sin caso de uso;
-   sistema de reservas dentro del sitio;
-   marketplace;
-   administración multi-tenant.

## 25. Definition of Done --- componente

Un componente está terminado cuando:

-   funciona;
-   es responsive;
-   tiene estados;
-   es accesible;
-   tiene TypeScript correcto;
-   no genera warnings;
-   no rompe SEO;
-   no añade dependencias innecesarias;
-   fue revisado visualmente.

## 26. Definition of Done --- página

Una página está terminada cuando tiene:

-   contenido aprobado;
-   diseño implementado;
-   metadata;
-   canonical;
-   idioma;
-   responsive;
-   accesibilidad;
-   imágenes;
-   CTA;
-   analytics;
-   performance;
-   QA visual.

## 27. Checklist de lanzamiento

### Marca

-   [ ] Logo
-   [ ] Isotipo
-   [ ] Favicon
-   [ ] Paleta
-   [ ] Tipografía

### UX

-   [ ] Responsive
-   [ ] Navegación
-   [ ] CTA
-   [ ] Formularios
-   [ ] WhatsApp

### SEO

-   [ ] Titles
-   [ ] Descriptions
-   [ ] Canonical
-   [ ] Hreflang
-   [ ] Sitemap
-   [ ] Robots
-   [ ] Structured data
-   [ ] Open Graph

### Security

-   [ ] HTTPS
-   [ ] Headers
-   [ ] CSP
-   [ ] Secrets
-   [ ] Rate limiting
-   [ ] Anti-spam

### Performance

-   [ ] Images
-   [ ] Fonts
-   [ ] JavaScript
-   [ ] LCP
-   [ ] INP
-   [ ] CLS

### Analytics

-   [ ] GA4
-   [ ] Search Console
-   [ ] Eventos

### Legal

-   [ ] Privacy
-   [ ] Tratamiento de datos
-   [ ] Terms
-   [ ] Cookies, si aplica

## 28. Criterio final

La V1 debe permitir que un propietario de alojamiento responda
rápidamente:

1.  ¿Qué es Andario?
2.  ¿Entienden mi negocio?
3.  ¿Qué pueden hacer por mí?
4.  ¿Necesito contratar todo?
5.  ¿Qué es Andario Booking Engine?
6.  ¿Cómo puedo empezar?
7.  ¿Cómo puedo contactarles?

> **Primero claridad. Después diseño. Después tecnología. Después
> optimización.**

El resultado debe ser un activo digital que represente correctamente a
Andario Hospitality hoy y permita crecer mañana.
