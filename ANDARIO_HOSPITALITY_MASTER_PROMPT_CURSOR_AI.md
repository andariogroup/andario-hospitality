# ANDARIO HOSPITALITY — MASTER PROMPT FOR CURSOR AI
## V1 — MVP production-ready for Vercel

**Purpose:** Use this document as the single source of truth to build the public website of **Andario Hospitality** with Cursor AI.

---

# 0. ROLE OF CURSOR

You are the senior full-stack engineer responsible for implementing the V1 website of Andario Hospitality.

Your job is to **inspect the repository, implement the complete MVP, test it, fix errors, and leave it ready for deployment to Vercel**.

Do not merely generate examples, mockups, TODOs, pseudo-code or partial pages.

At the end, the repository must contain a coherent, production-ready website that can be:

1. installed with `npm install`;
2. validated with lint/typecheck/tests/build;
3. configured with environment variables;
4. deployed to Vercel.

**Do not ask for confirmation for ordinary implementation decisions.** Make the simplest decision compatible with this specification. Ask only if a required external value or an irreversible business decision is genuinely missing.

---

# 1. PRODUCT

**Brand:** Andario Hospitality  
**Parent:** Andario Group  
**Positioning:** Digital partner for small and medium-sized independent accommodations.

Core message:

> **Digitalizamos pequeños alojamientos para convertir su presencia en Internet en una herramienta real de crecimiento.**

Supporting message:

> **Estrategia, tecnología y acompañamiento. En un solo lugar.**

Brand idea:

> **El partner digital de tu alojamiento.**

Vision:

> Ser el partner digital de referencia para pequeños y medianos alojamientos independientes en Colombia y, progresivamente, en Latinoamérica.

Mission:

> Ayudar a pequeños y medianos establecimientos de alojamiento a digitalizar y profesionalizar sus negocios mediante soluciones sencillas, accesibles y conectadas.

The site must communicate:
- modern;
- technological;
- close;
- innovative;
- reliable;
- simple;
- accessible;
- entrepreneurial.

Avoid:
- aggressive sales language;
- exaggerated claims;
- fake results;
- fake testimonials;
- fake client logos;
- guaranteed rankings/revenue/bookings;
- generic corporate/SaaS language;
- excessive animations;
- excessive glassmorphism/neon;
- unnecessary complexity.

---

# 2. NON-NEGOTIABLE ARCHITECTURE

Use:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod
- Vercel
- Git/GitHub
- GA4
- Google Search Console
- Git-versioned content

Use the **App Router**.

Do NOT add:
- CMS;
- database;
- CRM;
- microservices;
- authentication;
- customer dashboard;
- complex chatbot;
- AI features;
- internal booking system;
- marketplace;
- multi-tenant administration.

The corporate website must remain simple, fast and maintainable.

Do not introduce dependencies unless they solve a real requirement.

---

# 3. LANGUAGE / ROUTING

Languages:

- Spanish: `/es`
- English: `/en`

Required pages:

Spanish:
- `/es/`
- `/es/soluciones`
- `/es/soluciones/digital-check`
- `/es/soluciones/andario-web`
- `/es/soluciones/andario-visibility`
- `/es/soluciones/andario-booking-engine`
- `/es/soluciones/andario-connect`
- `/es/soluciones/andario-content`
- `/es/soluciones/andario-growth`
- `/es/alojamientos`
- `/es/como-trabajamos`
- `/es/casos`
- `/es/nosotros`
- `/es/faq`
- `/es/contacto`
- `/es/privacidad`
- `/es/terminos`

English equivalents:
- `/en/`
- `/en/solutions`
- `/en/solutions/digital-check`
- `/en/solutions/andario-web`
- `/en/solutions/andario-visibility`
- `/en/solutions/andario-booking-engine`
- `/en/solutions/andario-connect`
- `/en/solutions/andario-content`
- `/en/solutions/andario-growth`
- `/en/accommodations`
- `/en/how-we-work`
- `/en/cases`
- `/en/about`
- `/en/faq`
- `/en/contact`
- `/en/privacy`
- `/en/terms`

English must be genuinely adapted for an international hospitality audience, not mechanically translated.

Implement:
- language switcher;
- localized metadata;
- canonical;
- hreflang;
- reciprocal language alternates;
- x-default when appropriate.

---

# 4. BUSINESS DATA — NEVER HARDCODE MUTABLE PUBLIC DATA

The following values can change independently of the code. Therefore they MUST be environment-driven.

## Public environment variables

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_PUBLIC_EMAIL=
NEXT_PUBLIC_WHATSAPP_PHONE=
NEXT_PUBLIC_ADDRESS=
NEXT_PUBLIC_CITY=
NEXT_PUBLIC_COUNTRY=
NEXT_PUBLIC_LATITUDE=
NEXT_PUBLIC_LONGITUDE=

NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_YOUTUBE_URL=
NEXT_PUBLIC_TIKTOK_URL=
NEXT_PUBLIC_GOOGLE_PROFILE_URL=

NEXT_PUBLIC_GA4_MEASUREMENT_ID=
```

## Server-only environment variables

```env
CONTACT_FORM_WEBHOOK_URL=
```

Optional server-side protection for the webhook may be added if required:

```env
CONTACT_FORM_WEBHOOK_SECRET=
```

### Rules

1. Never hardcode the phone number in components.
2. Never hardcode the public email in components.
3. Never hardcode the address in components.
4. Never hardcode latitude/longitude in components.
5. Never hardcode social URLs.
6. Never hardcode the Google Business/Profile URL.
7. Never hardcode the GA4 Measurement ID.
8. Never expose `CONTACT_FORM_WEBHOOK_URL` to the browser.
9. Never expose secrets through `NEXT_PUBLIC_*`.
10. Create one typed configuration layer, e.g. `lib/site-config.ts`.
11. Components consume the configuration layer, not `process.env` directly.
12. Validate required environment variables at startup/build time where appropriate.
13. If an optional social URL is empty, do not render its icon.
14. If coordinates are unavailable, do not invent them.
15. The map/location UI must use the configured coordinates.
16. The WhatsApp CTA must build its URL from the configured phone.
17. The email CTA must use the configured public email.
18. The contact form server endpoint must send the validated payload to `CONTACT_FORM_WEBHOOK_URL`.

### Why

Business contact information, location and external integrations may change without requiring a code release. The website must therefore be reconfigurable through Vercel environment variables.

---

# 5. CURRENT CORPORATE BASELINE

Use these values as the initial `.env.example` documentation only:

```env
NEXT_PUBLIC_SITE_URL=https://example.com

NEXT_PUBLIC_PUBLIC_EMAIL=contacto@andariohospitality.com
NEXT_PUBLIC_WHATSAPP_PHONE=573213660046
NEXT_PUBLIC_ADDRESS=Calle 13B # 4A-63
NEXT_PUBLIC_CITY=Valledupar
NEXT_PUBLIC_COUNTRY=Colombia

NEXT_PUBLIC_LATITUDE=
NEXT_PUBLIC_LONGITUDE=

NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_YOUTUBE_URL=
NEXT_PUBLIC_TIKTOK_URL=
NEXT_PUBLIC_GOOGLE_PROFILE_URL=

NEXT_PUBLIC_GA4_MEASUREMENT_ID=

CONTACT_FORM_WEBHOOK_URL=
CONTACT_FORM_WEBHOOK_SECRET=
```

**Important:** Do not invent missing social URLs, coordinates, Google Profile URL, GA4 ID or webhook URL. Leave them empty in `.env.example`.

The public company baseline is:

- Andario Group
- NIT: 901774250
- Andario Hospitality
- Valledupar, Colombia
- Calle 13B # 4A-63
- contacto@andariohospitality.com
- +57 321 366 0046

Do not invent additional legal information.

---

# 6. BRAND / DESIGN

Visual concept:

**Hospitality + Technology + Trust**

The site should feel like:

> A technology company that understands hospitality.

Use:
- generous whitespace;
- strong typography;
- high-quality imagery;
- clear hierarchy;
- refined cards;
- subtle visual accents;
- restrained motion;
- excellent mobile experience.

Do not sacrifice performance for decoration.

## Hospitality design tokens

```text
Ink             #10212B
Ink secondary   #1E3440
Text            #26343A
Muted           #66757C
White           #FFFFFF
Sand            #F8F5EF
Sand secondary  #E8DDCC
Teal            #0E7C78
Teal light      #D9F0EE
Success         #26734D
Warning         #A36A18
Error           #B54747
```

Typography:

**Manrope**
- 400
- 500
- 600
- 700

Use the Andario Group logo/isotipo assets when available in the repository. Do not recreate the logo with CSS.

At small sizes use the isotipo appropriately.

---

# 7. GLOBAL UX

Primary CTA:

**Solicitar diagnóstico digital**

Secondary CTA:

**Hablar con Andario**

Persistent WhatsApp access must be available where appropriate, using the environment-driven phone number.

Header:
- logo;
- navigation;
- primary CTA;
- ES/EN;
- accessible mobile menu.

Mobile menu:
- keyboard accessible;
- Escape closes it;
- focus managed correctly;
- prevents background scrolling while open.

Footer:
- brand;
- navigation;
- solutions;
- contact;
- legal;
- corporate data;
- social icons only when configured;
- language switcher.

---

# 8. HOME PAGE

Build the home page in this order:

1. Hero
2. Problem
3. Solution
4. Portfolio
5. Differentiation
6. Who we serve
7. Process
8. Trust
9. About
10. Cases
11. Final CTA
12. Footer

## Hero

H1:

> Digitalización para pequeños alojamientos.

Supporting copy:

> Estrategia, tecnología y acompañamiento para convertir tu presencia en Internet en una herramienta real de crecimiento.

Primary CTA:
> Solicitar diagnóstico digital

Secondary:
> Conocer nuestras soluciones

Mention naturally:
- hostels;
- small hotels;
- posadas;
- tourist apartments;
- cabins;
- villas;
- independent accommodations.

Do not overload the hero.

## Problem

Core idea:

> Tener presencia digital no significa tener una estrategia digital.

Explain fragmentation across:
Google + Instagram + Facebook + WhatsApp + OTAs + disconnected tools.

## Solution

Core idea:

> Construimos contigo un ecosistema digital para tu alojamiento.

And:

> No tienes que hacerlo todo de una vez. Tu estrategia se construye alrededor de tu negocio, no al revés.

## Portfolio

Seven services:

1. Digital Check
2. Andario Web
3. Andario Visibility
4. Andario Booking Engine
5. Andario Connect
6. Andario Content
7. Andario Growth

Services are individually contractable. Do not publish fixed prices in V1.

## Differentiation

Highlight:
- specialization;
- simplicity;
- proprietary technology;
- close accompaniment.

## Who we serve

Independent accommodations:
- hostels;
- small hotels;
- posadas;
- apartments;
- apart-hotels;
- cabins;
- villas;
- rural accommodation;
- small tourism businesses.

## Process

1. Diagnóstico — Entendemos dónde estás.
2. Estrategia — Definimos hacia dónde avanzar.
3. Implementación — Construimos lo que necesitas.
4. Medición — Observamos qué está pasando.
5. Evolución — Seguimos mejorando.

## Trust

Use:
- real company identity;
- transparent scope;
- clear process;
- technology;
- security;
- performance;
- legal information;
- real case studies when available.

Never invent proof.

## About

Use the Colombia → Latin America narrative.

## Cases

First case:

**BARUCH Hostal**

Label:

> Establecimiento pionero de Andario Hospitality.

Do not publish invented KPIs, testimonials or commercial results.

## Final CTA

Drive to:
- diagnosis;
- WhatsApp;
- contact.

---

# 9. SERVICES

Create reusable `ServiceCard` and service page components.

Service page structure:

1. Hero
2. Problem
3. Solution
4. What's included
5. How it works
6. Ecosystem
7. FAQ
8. CTA

## Digital Check

Digital diagnosis and strategy:
- Google presence;
- website;
- SEO;
- social;
- WhatsApp;
- OTAs;
- booking process;
- content;
- photography;
- UX;
- analytics;
- competitive context.

Deliverable:
diagnosis + prioritized roadmap.

## Andario Web

Professional website:
- UX/UI;
- responsive;
- accommodation/unit pages;
- services;
- gallery;
- location;
- experiences;
- contact;
- WhatsApp;
- booking integration;
- policies;
- FAQ;
- technical SEO;
- analytics.

## Andario Visibility

SEO + Google + digital visibility:
- technical SEO;
- local SEO foundations;
- metadata;
- Search Console;
- sitemap;
- internal linking;
- structured data where appropriate;
- content/search intent.

Never guarantee first position or fixed traffic.

## Andario Booking Engine

Proprietary direct booking technology.

Explain:
- accommodation configuration;
- units;
- availability;
- rates;
- reservations;
- guests;
- rules;
- reservation status;
- supported payment logic;
- source/channel identification;
- administration.

Future channels may include:
- website;
- WhatsApp;
- Instagram;
- Facebook;
- Google;
- other channels;
- AI assistant.

Do not present future functionality as already available.

The corporate website must NOT duplicate reservation logic.

## Andario Connect

Communication/automation:
- WhatsApp Business;
- FAQs;
- automated responses;
- lead capture;
- reservation guidance;
- confirmations;
- reminders;
- follow-up;
- future AI assistant.

## Andario Content

- photography coordination;
- image optimization;
- website copy;
- social content;
- short video;
- destination content;
- gallery preparation;
- editorial planning.

## Andario Growth

- GA4;
- Search Console;
- events;
- website behavior;
- WhatsApp clicks;
- booking interactions;
- reservation conversion;
- channel attribution;
- reports/recommendations.

---

# 10. ACCOMMODATIONS PAGE

Explain who Andario serves and why the approach fits independent accommodation businesses.

Do not create hundreds of SEO doorway pages.

Use useful content, not keyword stuffing.

---

# 11. HOW WE WORK

Present:

**Diagnóstico → Estrategia → Implementación → Medición → Evolución**

Explain that services can be contracted progressively.

The customer does not need to buy everything.

---

# 12. BOOKING ENGINE PAGE

Explain the product as proprietary technology inside the wider Andario Hospitality ecosystem.

Structure:
- what it is;
- problem;
- how it works;
- what it centralizes;
- channels;
- benefits;
- architecture at a high level;
- evolution;
- CTA.

Do not expose internal technical implementation unnecessarily.

Do not claim future channels are already operational.

---

# 13. CASES

Initial case:

**BARUCH Hostal — Buritaca, Colombia**

Position:

> Establecimiento pionero de Andario Hospitality.

Do not fabricate:
- revenue;
- occupancy;
- booking increases;
- rankings;
- testimonials;
- traffic;
- conversion rates.

Create the structure so real results can be added later.

---

# 14. ABOUT

Explain:
- Andario Group;
- Andario Hospitality;
- Colombia origin;
- Latin American vision;
- specialization;
- proprietary technology;
- close accompaniment.

Use the corporate NIT and address where appropriate.

---

# 15. FAQ

Cover at least:

- What does Andario do?
- Who is it for?
- Do I need a website?
- Do I need a booking engine?
- Can I continue using Booking.com/Airbnb?
- Can I start with one service?
- Can Andario help with SEO?
- Can Andario integrate WhatsApp?
- Can apartments be managed?
- Does it work for cabins/villas?
- Is it suitable for small properties?
- Is there a minimum number of rooms?
- Can the website be bilingual?
- How does implementation work?
- What happens after launch?
- How is pricing determined?

Answers must be concise, useful and truthful.

---

# 16. CONTACT / FORM

Primary objective: qualified lead generation.

Fields:

- name;
- establishment/company;
- city/country;
- accommodation type;
- website;
- WhatsApp;
- email;
- main need;
- services of interest;
- consent when required.

Keep the form reasonably short.

Use:
- React Hook Form;
- Zod;
- client validation;
- server validation.

Flow:

```text
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
Webhook
  ↓
Success
```

Create a server-side route such as:

`POST /api/contact`

The browser must never call the private webhook directly.

The server:
1. validates input;
2. rejects malformed data;
3. applies anti-spam/rate limiting;
4. sends normalized payload to `CONTACT_FORM_WEBHOOK_URL`;
5. returns a safe success/error response.

Never trust browser data.

Do not expose internal webhook errors to the user.

Use a honeypot and/or lightweight anti-spam mechanism without adding unnecessary third-party services.

If a stronger anti-spam mechanism is added, keep it configurable.

---

# 17. WHATSAPP

Create a reusable `WhatsAppButton`.

Build the destination from:

`NEXT_PUBLIC_WHATSAPP_PHONE`

Do not hardcode the phone.

Support contextual messages, for example:
- general contact;
- service inquiry;
- diagnosis request.

Encode messages correctly.

Track WhatsApp clicks in GA4.

---

# 18. LOCATION

Use:
- `NEXT_PUBLIC_ADDRESS`
- `NEXT_PUBLIC_CITY`
- `NEXT_PUBLIC_COUNTRY`
- `NEXT_PUBLIC_LATITUDE`
- `NEXT_PUBLIC_LONGITUDE`

Never invent coordinates.

Use the coordinates for:
- map link/embed if implemented;
- structured data where appropriate;
- location CTA.

Avoid loading a heavy map library unless it provides real value.

Prefer a lightweight external map link when possible.

---

# 19. SOCIAL NETWORKS

Support:

```env
NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_YOUTUBE_URL=
NEXT_PUBLIC_TIKTOK_URL=
NEXT_PUBLIC_GOOGLE_PROFILE_URL=
```

Render only configured profiles.

Do not invent profile URLs.

Add accessible labels.

Use official external links.

Track important social clicks if useful.

---

# 20. ANALYTICS

Use GA4 through:

`NEXT_PUBLIC_GA4_MEASUREMENT_ID`

Create:

```text
lib/analytics/
```

Track at least:

- page view;
- diagnosis CTA click;
- contact form start;
- contact form submit/success;
- WhatsApp click;
- service CTA click;
- Booking Engine CTA;
- language switch;
- external social/profile click.

Do not send sensitive personal information to GA4.

Do not expose any server secret.

If the GA4 ID is empty, analytics should fail gracefully without breaking the site.

---

# 21. SEO

SEO must be implemented during development, not after.

Every indexable page must have:
- unique title;
- unique description;
- one useful H1;
- canonical;
- language metadata;
- hreflang;
- Open Graph;
- appropriate structured data;
- internal links;
- useful original content.

Create:
- `app/sitemap.ts`
- `app/robots.ts`

Use clean URLs.

Avoid keyword stuffing.

Do not create low-value pages just for keywords.

Validate structured data. Do not use misleading markup.

Initial structured data may include appropriate:
- Organization;
- WebSite;
- LocalBusiness where justified;
- Service;
- BreadcrumbList.

Do not add schemas merely for decoration.

---

# 22. PERFORMANCE

Priorities:
- mobile-first;
- minimal JavaScript;
- optimized images;
- modern formats;
- responsive image sizing;
- lazy loading where appropriate;
- optimized fonts;
- minimal third-party scripts;
- CDN;
- caching;
- restrained animation.

Use `next/image` where appropriate.

Avoid heavy video backgrounds.

Avoid unnecessary animation libraries.

Do not sacrifice LCP, INP or CLS for visual effects.

---

# 23. ACCESSIBILITY

Use semantic HTML.

Minimum:
- keyboard navigation;
- visible focus;
- accessible contrast;
- labels;
- alt text;
- logical heading hierarchy;
- accessible forms;
- useful error messages;
- reduced-motion consideration;
- mobile accessibility.

Do not rely on color alone.

Buttons must be actual buttons.

Links must be actual links.

Images must have meaningful alt text unless decorative.

---

# 24. SECURITY

Apply secure development principles.

Required:
- HTTPS in production;
- secure headers;
- CSP compatible with actual integrations;
- input validation;
- server-side validation;
- rate limiting on contact endpoint;
- anti-spam;
- dependency hygiene;
- secrets only in environment variables;
- least privilege;
- privacy-conscious analytics;
- no secrets in client bundles;
- no sensitive data in logs.

Never use:
- `dangerouslySetInnerHTML` unless strictly necessary and sanitized;
- hardcoded secrets;
- client-side webhook secrets;
- unnecessary third-party scripts.

Use safe error messages.

---

# 25. CONTENT ARCHITECTURE

Keep content separate from components.

Preferred structure:

```text
content/
  es/
  en/
```

Centralize:
- navigation;
- services;
- home sections;
- FAQs;
- cases;
- SEO metadata;
- CTAs;
- process;
- trust;
- Booking Engine content.

Components render content; components should not contain large blocks of duplicated copy.

The architecture must make content changes possible without modifying multiple components.

---

# 26. RECOMMENDED PROJECT STRUCTURE

```text
app/
  [locale]/
    layout.tsx
    page.tsx
    soluciones/
    alojamientos/
    como-trabajamos/
    booking-engine/
    casos/
    nosotros/
    faq/
    contacto/
    privacidad/
    terminos/
  api/
    contact/
      route.ts
  sitemap.ts
  robots.ts
  not-found.tsx
  error.tsx

components/
  layout/
  navigation/
  ui/
  sections/
  services/
  booking/
  forms/
  seo/

content/
  es/
  en/

lib/
  config/
  i18n/
  seo/
  analytics/
  validation/
  utils/

public/
  images/
  icons/
  fonts/

tests/
  unit/
  integration/
  e2e/

types/
styles/
```

Adapt only when the actual implementation benefits from a simpler structure.

---

# 27. ENVIRONMENT CONFIGURATION

Create:

`.env.example`

with every required variable documented.

Create a typed environment/configuration layer.

Recommended separation:

```text
lib/config/site.ts
lib/config/env.ts
lib/analytics/
```

Public values:
`NEXT_PUBLIC_*`

Server values:
no `NEXT_PUBLIC_*`

Never commit `.env.local`.

Update `.gitignore`.

README must explain:
1. install;
2. environment variables;
3. local development;
4. validation;
5. production build;
6. Vercel deployment;
7. where to configure environment variables.

---

# 28. DESIGN / COMPONENT RULES

Create reusable components for:
- Header;
- Footer;
- Button;
- Container;
- Section;
- ServiceCard;
- CTA;
- WhatsAppButton;
- LanguageSwitcher;
- Breadcrumbs;
- FAQ;
- ContactForm;
- SocialLinks;
- LocationBlock;
- SEO metadata utilities.

Do not create one-off components when a reusable abstraction is obvious.

Do not over-abstract simple elements.

Prefer clear code over clever code.

---

# 29. QUALITY GATES

Before considering the project complete, run:

```bash
npm install
npm run lint
npm run typecheck
npm test
npm run build
```

If a script does not exist, create the appropriate script.

If E2E testing is included, run the configured E2E suite.

Fix all errors and warnings that are caused by the implementation.

Do not finish with:
- TypeScript errors;
- broken routes;
- broken mobile navigation;
- broken forms;
- broken links;
- missing metadata;
- invalid imports;
- missing environment handling;
- console errors caused by the application.

---

# 30. TESTING

At minimum test:

### Unit
- environment/config parsing;
- localization utilities;
- SEO metadata helpers;
- form validation;
- WhatsApp URL generation;
- analytics event helpers.

### Integration
- `/api/contact`;
- invalid payload rejection;
- webhook failure handling;
- rate limiting;
- anti-spam;
- safe error response.

### E2E / smoke
- home loads;
- language switch;
- navigation;
- service page;
- Booking Engine page;
- contact form;
- WhatsApp CTA;
- mobile menu;
- 404.

---

# 31. PRODUCTION CHECKLIST

Before final delivery verify:

### Brand
- logo;
- isotipo;
- favicon;
- typography;
- colors.

### UX
- responsive;
- navigation;
- CTAs;
- WhatsApp;
- contact form;
- mobile menu.

### SEO
- title;
- descriptions;
- canonical;
- hreflang;
- sitemap;
- robots;
- structured data;
- Open Graph.

### Security
- HTTPS-ready;
- headers;
- CSP;
- secrets;
- validation;
- rate limiting;
- anti-spam.

### Performance
- images;
- fonts;
- JavaScript;
- LCP;
- INP;
- CLS.

### Analytics
- GA4;
- conversion events;
- graceful no-ID behavior.

### Legal
- privacy;
- terms;
- data-processing/consent where applicable;
- cookies information if applicable.

### Deployment
- production build succeeds;
- Vercel configuration documented;
- environment variables documented;
- no secret committed;
- no hardcoded mutable business data.

---

# 32. V1 SCOPE CONTROL

V1 is a corporate/commercial website.

DO NOT turn V1 into:
- PMS;
- reservation platform;
- CRM;
- CMS;
- customer portal;
- admin panel;
- AI chatbot;
- marketplace;
- analytics dashboard.

The site only needs to explain and commercialize Andario Hospitality and its proprietary Booking Engine.

The Booking Engine is a separate product.

---

# 33. IMPLEMENTATION ORDER

Follow this sequence to minimize rework and token consumption:

### Phase 1 — Foundation
- inspect repository;
- configure Next.js;
- TypeScript;
- Tailwind;
- shadcn/ui;
- fonts;
- tokens;
- environment validation;
- base layout;
- content architecture.

### Phase 2 — Global UI
- Header;
- mobile navigation;
- Footer;
- buttons;
- containers;
- typography;
- responsive system;
- language switcher.

### Phase 3 — Pages
- Home;
- Solutions index;
- seven services;
- Accommodations;
- How we work;
- Booking Engine;
- Cases;
- About;
- FAQ;
- Contact;
- Privacy;
- Terms.

### Phase 4 — Functional
- contact API;
- validation;
- webhook;
- WhatsApp;
- analytics;
- social links;
- location.

### Phase 5 — SEO / Security / Accessibility
- metadata;
- sitemap;
- robots;
- hreflang;
- structured data;
- Open Graph;
- security headers;
- CSP;
- accessibility.

### Phase 6 — QA / Production
- tests;
- lint;
- typecheck;
- build;
- route audit;
- link audit;
- responsive audit;
- final Vercel readiness.

---

# 34. TOKEN-EFFICIENCY RULES FOR CURSOR

These rules are mandatory.

1. **Inspect before editing.**
2. Do not repeatedly reread files that have already been understood.
3. Do not print entire large files when only a section is needed.
4. Search for the relevant symbol before opening unrelated files.
5. Batch related inspections into one operation when possible.
6. Reuse existing components/utilities instead of recreating them.
7. Make focused edits.
8. Do not rewrite entire files for small changes.
9. Do not generate duplicate implementations.
10. Do not install packages without a concrete reason.
11. Do not run expensive commands repeatedly if the previous result is still valid.
12. After a logical batch of changes, run the smallest relevant validation.
13. Before final delivery, run the full validation suite.
14. Keep responses concise and report only:
   - changed files;
   - important decisions;
   - validation result;
   - blocking errors.
15. Do not explain obvious code line-by-line.
16. Do not generate speculative features.
17. Do not create placeholder functionality that looks production-ready.
18. If content is already defined in this specification, implement it instead of inventing alternatives.
19. Prefer deterministic implementation over experimentation.
20. Do not spend tokens discussing architecture that is already closed here.

---

# 35. CURSOR WORK MODE

When starting:

### Step 1
Inspect:
- `package.json`;
- repository tree;
- existing source;
- existing configuration;
- existing assets.

### Step 2
If the repository is empty, initialize the project according to this specification.

### Step 3
Create the foundation before pages.

### Step 4
Implement the site progressively in the order defined above.

### Step 5
After each major phase:
- run relevant validation;
- fix errors;
- continue.

### Step 6
At the end:
- run complete validation;
- build production;
- inspect generated routes;
- verify environment handling;
- verify Vercel compatibility.

---

# 36. DEFINITION OF DONE — COMPONENT

A component is done when:
- works;
- responsive;
- accessible;
- typed;
- no avoidable warnings;
- reusable when appropriate;
- no duplicated configuration;
- no hardcoded mutable business data;
- visually coherent;
- does not damage SEO/performance.

---

# 37. DEFINITION OF DONE — PAGE

A page is done when:
- content is implemented;
- design is implemented;
- metadata exists;
- canonical exists;
- language is correct;
- hreflang is correct;
- responsive;
- accessible;
- images optimized;
- CTA works;
- analytics events work where relevant;
- performance is acceptable;
- no broken links;
- visual QA completed.

---

# 38. FINAL ACCEPTANCE CRITERIA

The final V1 must allow a visitor to answer quickly:

1. What is Andario?
2. Who is it for?
3. What problems does it solve?
4. What services does it provide?
5. What is Andario Booking Engine?
6. Can I start with one service?
7. How does the process work?
8. How can I contact Andario?

The website must be:
- professional;
- modern;
- fast;
- bilingual;
- accessible;
- SEO-ready;
- secure;
- conversion-oriented;
- maintainable;
- Vercel-ready.

---

# 39. FINAL CURSOR INSTRUCTION

**Now execute the project.**

Do not stop after creating the plan.

Do not return a tutorial.

Do not return pseudo-code.

Do not leave TODOs for core V1 functionality.

Build the actual website in the repository.

Use this document as the single source of truth.

When an implementation detail is unspecified, choose the simplest production-quality solution compatible with:
- Next.js;
- TypeScript;
- Tailwind;
- shadcn/ui;
- Vercel;
- performance;
- accessibility;
- SEO;
- security;
- maintainability.

Do not invent business facts.

Do not invent coordinates.

Do not invent social URLs.

Do not invent analytics IDs.

Do not invent webhook URLs.

Do not hardcode mutable contact/location data.

When finished, run the complete validation suite and production build.

Then provide a concise final report containing:

1. what was implemented;
2. important files created/changed;
3. commands executed;
4. validation results;
5. environment variables required;
6. any genuinely blocking external value still missing.

**The objective is not to show code. The objective is to deliver the working V1 website ready for Vercel deployment.**

---

## INITIAL ENVIRONMENT VARIABLE TEMPLATE

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_PUBLIC_EMAIL=contacto@andariohospitality.com
NEXT_PUBLIC_WHATSAPP_PHONE=573213660046
NEXT_PUBLIC_ADDRESS=Calle 13B # 4A-63
NEXT_PUBLIC_CITY=Valledupar
NEXT_PUBLIC_COUNTRY=Colombia
NEXT_PUBLIC_LATITUDE=
NEXT_PUBLIC_LONGITUDE=
NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_YOUTUBE_URL=
NEXT_PUBLIC_TIKTOK_URL=
NEXT_PUBLIC_GOOGLE_PROFILE_URL=
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
CONTACT_FORM_WEBHOOK_URL=
CONTACT_FORM_WEBHOOK_SECRET=
```

**Do not fill missing values with invented data.**
