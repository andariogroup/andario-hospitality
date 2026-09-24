# 07 — ANDARIO HOSPITALITY
# UI/UX DESIGN SYSTEM

**Versión:** 1.0  
**Estado:** Base de diseño para implementación  
**Producto:** Andario Hospitality  
**Parent brand:** Andario Group  
**Producto tecnológico:** Andario Booking Engine  
**Mercado inicial:** Colombia  
**Expansión:** Latinoamérica  
**Idiomas:** Español / Inglés

---

# 1. OBJETIVO DEL DOCUMENTO

Este documento define el sistema visual y de experiencia de usuario para el sitio corporativo de **Andario Hospitality**.

El objetivo es establecer una base suficientemente precisa para que el diseño pueda implementarse de forma consistente en todas las páginas, sin que cada pantalla termine teniendo decisiones visuales diferentes.

El sistema debe transmitir simultáneamente:

- Hospitality.
- Tecnología.
- Confianza.
- Cercanía.
- Profesionalismo.
- Simplicidad.
- Innovación.
- Capacidad de acompañamiento.

La intención no es construir una web corporativa genérica de software.

La experiencia debe comunicar:

> **Tecnología que entiende el negocio de los alojamientos.**

Y reforzar la idea de marca:

> **El partner digital de tu alojamiento.**

---

# 2. DIRECCIÓN CREATIVA

## 2.1 Concepto visual

La dirección recomendada es:

> **Hospitality + Technology + Human**

La interfaz debe combinar la precisión visual de una empresa tecnológica con la calidez de una marca relacionada con viajes, alojamiento y experiencias.

No se recomienda:

- Una estética excesivamente corporativa.
- Un SaaS azul genérico.
- Una web saturada de gradientes.
- Un diseño completamente oscuro.
- Una interfaz llena de tarjetas sin jerarquía.
- Una estética de agencia de marketing tradicional.
- Una estética demasiado lujosa que aleje a pequeños alojamientos.

## 2.2 Sensación buscada

Al entrar al sitio, el visitante debería percibir:

1. "Esta empresa entiende los alojamientos."
2. "Saben de tecnología."
3. "Parece una empresa seria."
4. "No necesito ser experto para trabajar con ellos."
5. "Pueden acompañarme."
6. "Hay tecnología propia detrás."
7. "Puedo empezar poco a poco."

---

# 3. PRINCIPIOS DE DISEÑO

## 3.1 Claridad antes que decoración

Cada elemento visual debe ayudar a:

- comprender;
- navegar;
- confiar;
- decidir;
- contactar.

Si un elemento no cumple una función clara, debe cuestionarse su existencia.

## 3.2 Diseño orientado a conversión

El diseño debe llevar naturalmente al usuario desde:

**Problema → comprensión → solución → confianza → contacto**

No se debe intentar vender los siete servicios simultáneamente en cada sección.

## 3.3 Jerarquía visual fuerte

Cada pantalla debe tener:

- una acción principal;
- un mensaje principal;
- una jerarquía de contenido clara.

No deben existir cinco elementos compitiendo por atención.

## 3.4 Tecnología sin complejidad visual

La tecnología debe percibirse como sofisticada por su experiencia, no por mostrar complejidad innecesaria.

## 3.5 Humanidad

Andario Hospitality no debe parecer una empresa distante.

El lenguaje visual debe permitir:

- fotografía real;
- rostros;
- espacios;
- destinos;
- alojamientos;
- pequeños empresarios;
- interacción humana.

## 3.6 Consistencia

Todos los servicios deben parecer parte de la misma empresa.

---

# 4. PALETA DE COLOR

Se propone una identidad visual basada en una combinación de:

- **Ink / Midnight** para estructura y autoridad.
- **Warm Sand** para hospitalidad.
- **Teal / Green** como acento tecnológico.
- Blanco y grises cálidos para respiración visual.

## 4.1 Tokens principales

### Color de marca oscuro

`--color-ink-950: #10212B`

Uso:

- encabezados principales;
- footer;
- navegación sobre fondos claros;
- bloques de alto contraste;
- elementos de identidad.

### Color oscuro secundario

`--color-ink-800: #1E3440`

Uso:

- textos importantes;
- títulos secundarios;
- iconos principales.

### Texto

`--color-text: #26343A`

Uso:

- cuerpo de texto.

### Texto secundario

`--color-text-muted: #66757C`

Uso:

- descripciones;
- metadatos;
- información auxiliar.

### Fondo principal

`--color-white: #FFFFFF`

Uso:

- fondo principal.

### Fondo cálido

`--color-sand-50: #F8F5EF`

Uso:

- secciones de transición;
- bloques de contenido;
- hospitality storytelling.

### Arena

`--color-sand-200: #E8DDCC`

Uso:

- bordes;
- fondos secundarios;
- elementos decorativos.

### Accent tecnológico

`--color-teal-600: #0E7C78`

Uso:

- CTA principal;
- enlaces destacados;
- estados activos;
- elementos interactivos.

### Accent claro

`--color-teal-100: #D9F0EE`

Uso:

- fondos de badges;
- estados informativos;
- superficies suaves.

### Éxito

`--color-success: #26734D`

Uso:

- confirmaciones;
- estados positivos.

### Advertencia

`--color-warning: #A36A18`

Uso:

- advertencias.

### Error

`--color-error: #B54747`

Uso:

- errores de formulario;
- validaciones.

---

# 5. REGLAS DE COLOR

No utilizar todos los colores simultáneamente.

Regla general:

- 70–80% superficies neutras.
- 10–20% estructura oscura.
- 5–10% color de acento.

El teal debe funcionar como señal de interacción, no como decoración permanente.

Evitar:

- texto teal sobre fondos de bajo contraste;
- gradientes innecesarios;
- demasiados colores;
- fondos completamente saturados;
- botones con colores diferentes sin significado.

Todo contraste de texto e interacción debe validarse contra criterios WCAG aplicables.

---

# 6. TIPOGRAFÍA

## 6.1 Familia recomendada

**Manrope** como familia principal.

Razones:

- apariencia moderna;
- buena legibilidad;
- personalidad suficiente para una marca tecnológica;
- funciona bien en títulos y texto;
- adecuada para interfaces;
- permite mantener una sola familia tipográfica.

Fallback:

`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

## 6.2 Pesos

Utilizar preferentemente:

- 400 — Regular
- 500 — Medium
- 600 — Semibold
- 700 — Bold

Evitar utilizar demasiados pesos.

## 6.3 Escala tipográfica

### Display

Desktop:

`clamp(3rem, 6vw, 5.5rem)`

Uso:

- hero principal;
- mensajes de marca excepcionales.

### H1

Desktop:

`clamp(2.5rem, 4.5vw, 4.5rem)`

### H2

`clamp(2rem, 3.2vw, 3.25rem)`

### H3

`clamp(1.5rem, 2vw, 2rem)`

### H4

`1.25rem – 1.5rem`

### Body Large

`1.125rem – 1.25rem`

### Body

`1rem`

### Small

`0.875rem`

### Micro

`0.75rem`

No utilizar tamaños inferiores a 12px para contenido relevante.

---

# 7. ANCHO Y ESTRUCTURA DE CONTENEDORES

## 7.1 Container principal

Máximo recomendado:

`1200px – 1280px`

Padding:

Desktop:
`32px`

Tablet:
`24px`

Mobile:
`20px`

## 7.2 Lectura

Los párrafos largos no deben ocupar todo el ancho disponible.

Máximo recomendado:

`65–75 caracteres por línea` aproximadamente.

## 7.3 Grid

Desktop:

- 12 columnas.
- gap entre 20px y 32px.

Tablet:

- 8 columnas.

Mobile:

- 4 columnas.

---

# 8. SISTEMA DE ESPACIADO

Utilizar una escala basada principalmente en múltiplos de 4 y 8.

Tokens:

- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 40px
- 48px
- 64px
- 80px
- 96px
- 128px

Las secciones importantes pueden utilizar:

`80–128px` de separación vertical en desktop.

Mobile:

`56–80px`.

Evitar páginas visualmente comprimidas.

---

# 9. BORDER RADIUS

Sistema recomendado:

- Small: `8px`
- Medium: `12px`
- Large: `16px`
- XL: `24px`
- Pill: `999px`

Los componentes principales pueden utilizar:

`12–16px`.

No hacer toda la interfaz excesivamente redondeada.

---

# 10. SOMBRAS

Las sombras deben ser sutiles.

No utilizar sombras fuertes tipo:

- neumorphism;
- tarjetas flotantes exageradas;
- sombras negras pronunciadas.

Preferir:

- borde;
- diferencia de superficie;
- sombra suave cuando exista elevación funcional.

Principio:

> La profundidad debe sugerirse, no gritar.

---

# 11. HEADER

## 11.1 Desktop

Estructura:

**Logo | Soluciones | Para alojamientos | Cómo trabajamos | Booking Engine | Casos | Nosotros | Idioma | CTA**

El CTA principal:

**Solicitar diagnóstico**

Debe permanecer claramente identificable.

## 11.2 Header sticky

Recomendado.

Al hacer scroll:

- reducir ligeramente altura;
- conservar navegación;
- mantener CTA;
- aplicar fondo sólido/translúcido con buena legibilidad.

## 11.3 Mobile

Mostrar:

- logo;
- menú;
- CTA si existe espacio.

El menú debe abrirse como panel claro y fácil de recorrer.

No crear un mega menú innecesario en mobile.

---

# 12. HERO

El hero es el componente visual más importante de la página de inicio.

Debe comunicar en pocos segundos:

- qué hace Andario;
- para quién;
- qué problema resuelve;
- cuál es la siguiente acción.

Estructura:

**Eyebrow**

Digitalización para alojamientos

**H1**

Digitalización para pequeños alojamientos.

**Texto**

Estrategia, tecnología y acompañamiento para convertir tu presencia en Internet en una herramienta real de crecimiento.

**CTA primario**

Solicitar diagnóstico digital

**CTA secundario**

Conocer nuestras soluciones

## 12.1 Visual del hero

Preferencia:

Una composición híbrida de:

- fotografía real de alojamiento;
- interfaz tecnológica;
- elementos sutiles de booking;
- mapas o destino;
- microinteracciones.

No colocar una captura de dashboard genérica como imagen principal.

El hero debe vender la transformación, no el software.

---

# 13. FOTOGRAFÍA

La fotografía será una pieza fundamental de la identidad.

## 13.1 Dirección fotográfica

Preferir:

- alojamientos reales;
- habitaciones;
- terrazas;
- recepción;
- espacios comunes;
- naturaleza;
- destinos colombianos;
- personas reales;
- pequeños empresarios;
- huéspedes interactuando.

## 13.2 Evitar

- fotografías corporativas de bancos de imágenes demasiado genéricas;
- hoteles de lujo que no representan al cliente objetivo;
- imágenes excesivamente artificiales;
- fotografías que parezcan publicidad de una cadena hotelera.

## 13.3 Regla

La fotografía debe responder:

> "¿Puedo imaginar mi alojamiento dentro de este ecosistema?"

---

# 14. ICONOGRAFÍA

Utilizar una sola familia de iconos.

Características:

- lineal;
- moderna;
- simple;
- consistente;
- stroke uniforme.

Los iconos deben apoyar la comprensión.

No utilizar iconos como decoración excesiva.

Ejemplos:

- Search
- Globe
- Smartphone
- Calendar
- MessageCircle
- BarChart
- Hotel/Building
- Settings
- Zap
- ShieldCheck
- Users
- MapPin

---

# 15. BOTONES

## 15.1 Primary

Características:

- fondo teal;
- texto blanco;
- altura aproximada 48–52px;
- padding horizontal 20–24px;
- radius 10–12px;
- transición suave.

Ejemplo:

**Solicitar diagnóstico digital**

## 15.2 Secondary

Fondo:

transparente o blanco.

Borde:

1px.

Texto:

Ink.

## 15.3 Ghost

Uso:

- navegación secundaria;
- acciones de baja prioridad.

No utilizar demasiados botones ghost.

## 15.4 Estados

Todos los botones deben definir:

- default;
- hover;
- focus;
- active;
- disabled;
- loading.

El estado focus debe ser claramente visible.

---

# 16. TARJETAS

Las tarjetas serán útiles para:

- servicios;
- procesos;
- funcionalidades;
- casos;
- FAQ;
- contenidos.

Pero no todo debe convertirse en una card.

## Regla

Utilizar una tarjeta cuando exista una unidad de información o acción claramente diferenciada.

## Servicio

Cada tarjeta debe contener:

- icono;
- nombre;
- descripción breve;
- beneficio;
- enlace.

No colocar párrafos enormes dentro de tarjetas.

---

# 17. PORTFOLIO DE SERVICIOS

Los siete servicios deben formar un sistema visual común:

1. Digital Check
2. Andario Web
3. Andario Visibility
4. Andario Booking Engine
5. Andario Connect
6. Andario Content
7. Andario Growth

Cada servicio puede tener un acento visual propio muy sutil, pero debe mantener:

- misma tipografía;
- mismo sistema de spacing;
- misma estructura;
- misma jerarquía.

Andario Booking Engine puede recibir mayor protagonismo porque es el producto tecnológico propio.

---

# 18. BOOKING ENGINE

La sección del Booking Engine debe sentirse más tecnológica que el resto del sitio, pero seguir perteneciendo a Hospitality.

Visualmente puede utilizar:

- UI real;
- calendario;
- disponibilidad;
- tarjetas de alojamiento;
- flujo de reserva;
- estados;
- canales.

La narrativa visual debe ser:

**Una lógica central → múltiples canales**

Representación conceptual:

Website  
WhatsApp  
Instagram  
Facebook  
Google  
Otros canales

↓

**Andario Booking Engine**

↓

Disponibilidad  
Tarifas  
Inventario  
Huéspedes  
Reservas  
Canal de origen

No presentar canales que todavía no estén implementados como funcionalidades productivas.

Cuando se hable de futuro, utilizar etiquetas como:

**En evolución**

o

**Roadmap**

---

# 19. SECCIÓN PROBLEMA

Debe utilizar mucho espacio en blanco.

Objetivo:

hacer que el usuario se reconozca.

Ejemplos:

- "Tienes presencia digital, pero no una estrategia."
- "Tu alojamiento depende demasiado de terceros."
- "Los clientes preguntan por WhatsApp, pero el proceso es manual."
- "Tu web existe, pero no convierte."
- "No sabes qué canal está generando reservas."

No utilizar miedo artificial.

---

# 20. SECCIÓN SOLUCIÓN

Visualmente debe representar un ecosistema.

No mostrar siete productos desconectados.

Mostrar:

**Estrategia**

+

**Presencia digital**

+

**Visibilidad**

+

**Reservas**

+

**Comunicación**

+

**Contenido**

+

**Medición**

=

**Ecosistema digital del alojamiento**

---

# 21. SECCIÓN "CÓMO TRABAJAMOS"

Diseño recomendado:

timeline horizontal en desktop.

En mobile:

timeline vertical.

Etapas:

1. Diagnóstico
2. Estrategia
3. Implementación
4. Medición
5. Evolución

Cada etapa debe tener:

- número;
- nombre;
- explicación;
- resultado esperado.

---

# 22. CONFIANZA

No inventar:

- clientes;
- logos;
- porcentajes;
- testimonios;
- ingresos;
- número de reservas;
- crecimiento;
- premios;
- certificaciones.

La confianza inicial debe construirse mediante:

- claridad;
- transparencia;
- experiencia técnica;
- producto propio;
- metodología;
- información empresarial real;
- caso BARUCH cuando existan resultados verificables.

---

# 23. CASOS

La interfaz de casos debe priorizar storytelling.

Formato:

### Situación

¿Dónde estaba el alojamiento?

### Problema

¿Qué necesitaba mejorar?

### Diagnóstico

¿Qué encontramos?

### Solución

¿Qué implementamos?

### Resultado

¿Qué cambió?

### Aprendizaje

¿Qué aprendimos?

BARUCH debe presentarse inicialmente como:

> **Primer establecimiento pionero de Andario Hospitality.**

No atribuir resultados comerciales hasta tener datos medidos y autorización para publicarlos.

---

# 24. FORMULARIOS

Los formularios deben ser cortos.

Formulario principal de diagnóstico:

- Nombre
- Alojamiento / empresa
- Ciudad
- Tipo de alojamiento
- Sitio web, si existe
- WhatsApp
- Email
- ¿Qué quieres mejorar?
- Consentimiento de tratamiento de datos

No pedir información que no sea necesaria para iniciar la conversación.

## Estados

Cada formulario debe tener:

- default;
- focus;
- valid;
- error;
- loading;
- success.

Mensaje de éxito:

> Recibimos tu solicitud. Nos pondremos en contacto contigo para conocer mejor tu alojamiento.

No prometer tiempos que no estén definidos.

---

# 25. WHATSAPP

WhatsApp es un canal importante para el público objetivo.

Debe existir una llamada clara:

**Hablar con Andario**

Pero no debe convertirse en una ventana invasiva.

Recomendación:

- botón flotante discreto;
- accesible;
- con etiqueta en desktop;
- icono en mobile.

No abrir automáticamente conversaciones sin acción del usuario.

---

# 26. MOBILE FIRST

El diseño debe construirse considerando primero:

- smartphone;
- conexión móvil;
- navegación táctil;
- lectura rápida;
- CTA visible.

No tratar mobile como una versión reducida del desktop.

## Reglas

- botones suficientemente grandes;
- espacios táctiles adecuados;
- textos legibles;
- navegación simple;
- imágenes optimizadas;
- formularios cortos.

---

# 27. BREAKPOINTS

Punto de partida:

- Mobile: `< 640px`
- Tablet: `640–1023px`
- Desktop: `1024–1279px`
- Large desktop: `1280px+`

No diseñar únicamente por dispositivos concretos.

Los componentes deben adaptarse al espacio disponible.

---

# 28. RESPONSIVE BEHAVIOR

Cuando una sección pase de desktop a mobile:

- 3 columnas → 1 columna;
- 2 columnas → 1 columna;
- timeline horizontal → vertical;
- navegación completa → menú;
- imágenes panorámicas → recorte controlado;
- tablas → cards o scroll horizontal controlado;
- grids complejos → stack.

Nunca permitir overflow horizontal accidental.

---

# 29. ANIMACIÓN Y MOTION

La animación debe comunicar calidad, no distraer.

Permitido:

- fade;
- slide corto;
- hover;
- transformación ligera;
- aparición progresiva;
- transición de navegación.

Duración recomendada:

`150–400ms`.

Evitar:

- parallax excesivo;
- elementos flotando permanentemente;
- animaciones repetitivas;
- videos pesados automáticamente;
- loaders innecesarios.

## Reduced Motion

Respetar:

`prefers-reduced-motion`.

Si el usuario solicita reducción de movimiento, las animaciones deben minimizarse o desactivarse.

---

# 30. ACCESIBILIDAD

Objetivo:

WCAG 2.2 AA como referencia de diseño y QA.

Debe verificarse:

- contraste;
- focus visible;
- navegación por teclado;
- labels de formularios;
- mensajes de error comprensibles;
- jerarquía semántica;
- alt text;
- botones accesibles;
- navegación sin mouse;
- tamaños táctiles;
- estados interactivos.

No depender únicamente del color para comunicar estados.

---

# 31. BILINGÜISMO

El selector:

**ES | EN**

debe ser visible pero discreto.

La traducción no debe alterar:

- layout;
- jerarquía;
- intención;
- CTA.

Como el inglés puede ocupar menos o más espacio dependiendo del texto, los componentes deben tolerar expansión.

No insertar traducciones automáticas sin revisión.

Cada versión debe tener contenido realmente localizado.

---

# 32. UX PARA SEO

SEO y UX deben trabajar juntos.

No crear:

- bloques de texto para robots;
- keyword stuffing;
- contenido oculto;
- títulos artificiales;
- páginas duplicadas.

El contenido debe estar diseñado primero para resolver la intención del visitante.

---

# 33. PERFORMANCE VISUAL

El diseño debe considerar rendimiento desde el inicio.

Reglas:

- imágenes responsive;
- formatos modernos cuando sean apropiados;
- lazy loading para imágenes fuera del viewport;
- dimensiones explícitas para evitar layout shift;
- fuentes optimizadas;
- evitar dependencias visuales innecesarias;
- minimizar JavaScript;
- no cargar animaciones pesadas si no aportan valor.

El diseño debe ser compatible con objetivos exigentes de Core Web Vitals.

---

# 34. COMPONENTES PRINCIPALES

El sistema inicial debe contemplar:

### Layout

- Header
- Footer
- Container
- Section
- Grid
- Stack

### Navegación

- Desktop navigation
- Mobile navigation
- Breadcrumbs
- Language switcher

### Contenido

- Hero
- Section heading
- Eyebrow
- Rich text
- Feature
- Service card
- Case card
- Process step
- FAQ item

### Conversión

- Primary button
- Secondary button
- WhatsApp CTA
- Contact form
- Booking CTA

### Feedback

- Alert
- Success
- Error
- Loading
- Empty state

### Product

- Booking UI preview
- Availability card
- Reservation flow preview
- Channel diagram

---

# 35. DESIGN TOKENS

Los tokens deben centralizarse en CSS.

Ejemplo conceptual:

```css
:root {
  --color-ink-950: #10212B;
  --color-ink-800: #1E3440;
  --color-text: #26343A;
  --color-text-muted: #66757C;

  --color-white: #FFFFFF;

  --color-sand-50: #F8F5EF;
  --color-sand-200: #E8DDCC;

  --color-teal-600: #0E7C78;
  --color-teal-100: #D9F0EE;

  --color-success: #26734D;
  --color-warning: #A36A18;
  --color-error: #B54747;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 999px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 40px;
  --space-8: 48px;
  --space-9: 64px;
  --space-10: 80px;
  --space-11: 96px;
  --space-12: 128px;
}
```

Los valores son la base inicial y deben validarse visualmente durante implementación.

---

# 36. DARK SECTIONS

Se permite utilizar secciones oscuras estratégicas.

Buenos usos:

- Booking Engine;
- CTA final;
- footer;
- statement de marca.

No convertir toda la página en dark mode.

La marca debe conservar una sensación abierta y hospitalaria.

---

# 37. FOOTER

El footer debe contener:

### Marca

Andario Hospitality

### Navegación

- Soluciones
- Para alojamientos
- Cómo trabajamos
- Booking Engine
- Casos
- Nosotros
- FAQ
- Contacto

### Contacto

Valledupar, Colombia

contacto@andariohospitality.com

WhatsApp:

+57 321 366 0046

### Legal

- Política de privacidad
- Tratamiento de datos
- Términos y condiciones
- Cookies, si aplica

### Empresa

Andario Group

NIT 901774250

No publicar información legal adicional que no haya sido validada.

---

# 38. MICROCOPY

El microcopy debe ser:

- claro;
- humano;
- directo;
- profesional.

Ejemplos:

**CTA**

Solicitar diagnóstico digital

**WhatsApp**

Hablar con Andario

**Booking Engine**

Conocer el Booking Engine

**Formulario**

Cuéntanos sobre tu alojamiento

**Error**

Revisa los campos marcados e inténtalo nuevamente.

**Éxito**

Recibimos tu solicitud.

Evitar:

- "¡Compra ahora!"
- "Oferta imperdible"
- "Garantizado"
- "El mejor"
- "Resultados asegurados"

---

# 39. DARK PATTERNS PROHIBIDOS

No utilizar:

- urgencia artificial;
- contadores falsos;
- testimonios falsos;
- popups agresivos;
- botones engañosos;
- suscripciones preseleccionadas;
- consentimiento ambiguo;
- textos legales ocultos;
- dificultad para cancelar;
- CTA engañosos.

La confianza es parte del producto.

---

# 40. ARQUITECTURA DE CONVERSIÓN

La página debe tener tres niveles de CTA.

## Primario

**Solicitar diagnóstico digital**

## Secundario

**Hablar con Andario**

## Producto

**Conocer Andario Booking Engine**

Los CTA deben aparecer en lugares estratégicos:

- hero;
- después de explicar la solución;
- después del portfolio;
- después del proceso;
- cierre de página.

No repetirlos de forma mecánica.

---

# 41. JERARQUÍA DE INFORMACIÓN

La estructura recomendada de cada página:

### Nivel 1

¿Qué es?

### Nivel 2

¿Para quién?

### Nivel 3

¿Qué problema resuelve?

### Nivel 4

¿Cómo funciona?

### Nivel 5

¿Qué incluye?

### Nivel 6

¿Por qué Andario?

### Nivel 7

¿Qué hago ahora?

Esta estructura debe repetirse conceptualmente en servicios y producto.

---

# 42. PÁGINAS DE SERVICIO

Cada página de servicio debe utilizar un patrón común:

1. Hero.
2. Problema.
3. Qué hacemos.
4. Qué incluye.
5. Cómo trabajamos.
6. Integración con el ecosistema Andario.
7. FAQ.
8. CTA.

Esto permite escalar el sitio sin perder coherencia.

---

# 43. EXPERIENCIA DE ERROR

Los errores deben ser humanos y accionables.

Nunca mostrar:

> Error 500

como único mensaje.

Preferir:

> Algo no salió como esperábamos.

Y:

> Puedes volver a intentarlo o hablar con Andario por WhatsApp.

La página 404 puede incluir:

- mensaje;
- CTA a inicio;
- soluciones;
- contacto.

---

# 44. SEGURIDAD PERCIBIDA

El diseño no debe prometer seguridad absoluta.

La confianza debe apoyarse en:

- HTTPS;
- formularios claros;
- política de privacidad;
- consentimiento;
- información empresarial;
- comportamiento consistente;
- mensajes transparentes.

Los elementos técnicos de seguridad deben comunicarse solamente cuando estén realmente implementados.

---

# 45. DISEÑO PARA FUTURA ESCALABILIDAD

El sistema debe permitir agregar posteriormente:

- blog;
- recursos;
- guías;
- casos;
- calculadoras;
- herramientas;
- páginas por destino;
- páginas por tipo de alojamiento;
- documentación del Booking Engine;
- onboarding;
- área de clientes.

No diseñar una arquitectura que dependa únicamente de siete servicios.

---

# 46. QA VISUAL

Antes de publicar cada página se debe verificar:

## Layout

- no overflow;
- alineaciones;
- spacing;
- responsive;
- consistencia.

## Tipografía

- jerarquía;
- contraste;
- tamaños;
- longitud de líneas.

## Componentes

- estados;
- hover;
- focus;
- disabled;
- loading.

## Mobile

- menú;
- formularios;
- CTA;
- imágenes;
- navegación.

## Accesibilidad

- teclado;
- focus;
- labels;
- alt;
- contraste.

## Performance

- peso de imágenes;
- fuentes;
- JavaScript;
- CLS;
- carga inicial.

---

# 47. CRITERIOS DE ACEPTACIÓN

El sistema UI/UX podrá considerarse listo para implementación cuando:

- exista una paleta de color definida;
- exista escala tipográfica;
- exista sistema de spacing;
- existan componentes base;
- exista comportamiento responsive;
- exista patrón de navegación;
- exista patrón de CTA;
- exista patrón de formularios;
- exista guía de fotografía;
- exista sistema de iconos;
- exista guía de motion;
- exista guía de accesibilidad;
- exista guía de bilingüismo;
- exista guía de performance;
- exista patrón de páginas de servicio;
- exista criterio de QA visual.

---

# 48. PRINCIPIO FINAL

Andario Hospitality no debe intentar parecer una gran corporación.

Tampoco debe parecer una startup improvisada.

Debe verse como:

> **Una empresa tecnológica especializada en alojamientos, cercana a sus clientes y suficientemente sólida para acompañarlos durante años.**

La experiencia visual debe hacer visible esa posición.

El objetivo no es únicamente que la web sea bonita.

El objetivo es que el usuario piense:

> **"Entienden mi negocio, tienen tecnología y pueden ayudarme a llevar mi alojamiento al siguiente nivel."**

Ese es el estándar de diseño que debe guiar toda la implementación.
