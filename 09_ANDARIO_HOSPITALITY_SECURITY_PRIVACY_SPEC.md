# 09 — ANDARIO HOSPITALITY
# SECURITY & PRIVACY SPECIFICATION

**Versión:** 1.0  
**Estado:** Base para implementación y revisión legal  
**Marca:** Andario Hospitality  
**Empresa:** Andario Group  
**Mercado inicial:** Colombia  
**Idiomas:** Español / Inglés

---

# 1. OBJETIVO

Este documento establece los requisitos de seguridad, privacidad y protección de datos para el sitio corporativo de Andario Hospitality.

El objetivo es que la seguridad no sea una característica añadida al final, sino una propiedad transversal del proyecto.

La seguridad debe cubrir:

- infraestructura;
- aplicación;
- navegador;
- formularios;
- datos;
- dependencias;
- despliegue;
- analítica;
- privacidad;
- operación;
- mantenimiento.

Principio:

> **Recoger únicamente los datos necesarios, protegerlos adecuadamente y explicar claramente para qué se utilizan.**

---

# 2. ALCANCE

Aplica inicialmente a:

- sitio corporativo;
- formularios;
- solicitudes de diagnóstico;
- contacto;
- integración de WhatsApp;
- analítica;
- cookies, si se utilizan;
- integraciones externas;
- contenido administrado;
- deployment;
- dominio;
- infraestructura Vercel.

No sustituye la arquitectura de seguridad del **Andario Booking Engine**.

El Booking Engine tendrá posteriormente su propia especificación de seguridad.

---

# 3. PRINCIPIOS DE SEGURIDAD

## 3.1 Least Privilege

Cada componente debe tener únicamente los permisos necesarios.

## 3.2 Data Minimization

No pedir datos simplemente porque sea posible pedirlos.

## 3.3 Secure by Default

Las configuraciones iniciales deben ser seguras.

## 3.4 Defense in Depth

No depender de una sola medida.

Ejemplo:

```text
HTTPS
+
Headers
+
CSP
+
Validación
+
Rate limiting
+
Protección anti-spam
+
Gestión de secretos
+
Logs
```

## 3.5 Fail Secure

Ante un error, el sistema no debe revelar información sensible.

---

# 4. MODELO DE AMENAZAS INICIAL

Las principales amenazas del sitio corporativo son:

- spam;
- bots;
- abuso de formularios;
- XSS;
- CSRF cuando aplique;
- inyección;
- robo de credenciales;
- filtración de secretos;
- dependencias vulnerables;
- configuraciones incorrectas;
- fuga de información;
- clickjacking;
- tracking excesivo;
- exposición accidental de datos personales.

No todas tienen el mismo nivel de riesgo.

El sitio debe priorizar las amenazas relacionadas con sus superficies reales.

---

# 5. DATOS QUE PUEDE PROCESAR EL SITIO

Formulario de diagnóstico:

- nombre;
- nombre del alojamiento/empresa;
- ciudad;
- tipo de alojamiento;
- sitio web;
- WhatsApp/teléfono;
- email;
- descripción de necesidad;
- consentimiento cuando corresponda.

No almacenar información sensible que no sea necesaria para la finalidad comercial inicial.

No solicitar:

- contraseñas;
- datos bancarios;
- información financiera;
- documentos de identidad;

en el formulario general de diagnóstico.

---

# 6. CLASIFICACIÓN DE DATOS

## Públicos

Ejemplos:

- información corporativa publicada;
- servicios;
- datos de contacto empresarial;
- contenido del sitio.

## Internos

Ejemplos:

- configuraciones;
- métricas internas;
- información comercial no publicada.

## Personales

Ejemplos:

- nombre;
- email;
- teléfono;
- información proporcionada por un contacto.

## Secretos

Ejemplos:

- API keys;
- tokens;
- credenciales;
- claves privadas.

Los secretos nunca deben almacenarse en:

- Git;
- frontend;
- HTML;
- logs;
- documentación pública.

---

# 7. SECRET MANAGEMENT

Las credenciales deben gestionarse mediante variables de entorno o mecanismos de secretos del proveedor de infraestructura.

Ejemplos:

```text
EMAIL_SERVICE_API_KEY
BOOKING_ENGINE_API_KEY
ANALYTICS_SECRET
```

No utilizar:

```text
const apiKey = "123456...";
```

No colocar secretos en:

- `NEXT_PUBLIC_*`;
- código React;
- componentes cliente;
- archivos públicos;
- repositorio.

Regla:

> Todo lo que tenga prefijo `NEXT_PUBLIC_` debe considerarse potencialmente visible para el usuario.

---

# 8. GIT Y REPOSITORIO

Configurar:

`.gitignore`

para evitar:

```text
.env
.env.local
.env.production
node_modules
```

El repositorio no debe contener:

- passwords;
- tokens;
- certificados privados;
- secretos;
- dumps de bases de datos;
- información personal real.

Utilizar datos ficticios para desarrollo y testing.

---

# 9. DEPENDENCY SECURITY

Las dependencias deben revisarse periódicamente.

Proceso mínimo:

```text
Install
↓
Audit
↓
Review
↓
Update
↓
Test
```

Utilizar herramientas del ecosistema Node.js para detectar vulnerabilidades.

No actualizar automáticamente una dependencia crítica en producción sin revisar impacto.

---

# 10. OWASP

La implementación debe tomar como referencia OWASP para:

- XSS;
- injection;
- broken access control;
- security misconfiguration;
- vulnerable components;
- authentication-related risks cuando existan;
- logging y monitoring.

No convertir OWASP en una lista de casillas.

Cada control debe relacionarse con una amenaza real.

---

# 11. HTTPS

Producción debe utilizar exclusivamente HTTPS.

Debe evitarse contenido mixto.

Las versiones HTTP deben redirigir a HTTPS.

El dominio canónico debe utilizar HTTPS.

---

# 12. HSTS

Configurar Strict-Transport-Security cuando el dominio y la infraestructura estén correctamente preparados.

La configuración definitiva debe revisarse antes de activar opciones como:

- `includeSubDomains`;
- `preload`.

No habilitar preload sin comprobar las implicaciones sobre todos los subdominios.

---

# 13. SECURITY HEADERS

Como base:

```text
Content-Security-Policy
Strict-Transport-Security
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
```

Además, protección contra framing mediante CSP:

```text
frame-ancestors 'none'
```

si ninguna funcionalidad legítima requiere que el sitio sea embebido.

No utilizar headers obsoletos como sustituto de controles modernos.

---

# 14. CONTENT SECURITY POLICY

La CSP debe construirse a partir de las integraciones reales.

Objetivo:

reducir el impacto de:

- XSS;
- scripts no autorizados;
- contenido externo inesperado.

Antes de producción:

1. identificar scripts;
2. identificar dominios externos;
3. identificar fuentes;
4. identificar imágenes;
5. identificar conexiones;
6. construir política;
7. probar;
8. revisar reportes;
9. endurecer.

No utilizar:

```text
script-src *
```

como solución permanente.

Evitar `unsafe-inline` y `unsafe-eval` cuando sea técnicamente viable.

---

# 15. CLICKJACKING

El sitio debe impedir ser embebido en iframes de sitios no autorizados.

Preferencia:

```text
frame-ancestors 'none'
```

salvo necesidad legítima.

---

# 16. REFERRER POLICY

Utilizar una política que limite la exposición innecesaria de URLs y datos de navegación.

Una opción de partida:

```text
strict-origin-when-cross-origin
```

Debe validarse con las necesidades de analítica.

---

# 17. PERMISSIONS POLICY

Deshabilitar capacidades del navegador que el sitio no necesita.

Ejemplos potenciales:

- camera;
- microphone;
- geolocation.

No solicitar permisos del navegador sin una funcionalidad real que los necesite.

---

# 18. INPUT VALIDATION

Toda entrada externa debe considerarse no confiable.

Validar:

- tipo;
- longitud;
- formato;
- valores permitidos.

Ejemplo conceptual:

```text
email → email válido
phone → longitud/formato permitido
message → límite de caracteres
propertyType → lista permitida
```

Validación:

```text
Cliente
+
Servidor
```

La validación cliente mejora UX.

La validación servidor proporciona seguridad.

---

# 19. OUTPUT ENCODING

Los datos introducidos por usuarios no deben insertarse directamente como HTML no confiable.

Evitar:

- `dangerouslySetInnerHTML` innecesario;
- HTML generado a partir de inputs;
- contenido no sanitizado.

Si algún contenido HTML controlado es realmente necesario:

- sanitizar;
- limitar;
- revisar su origen.

---

# 20. SQL / DATABASE

La V1 corporativa no necesita una base de datos propia si los formularios pueden resolverse mediante un servicio externo o flujo controlado.

Si posteriormente se agrega base de datos:

- usar consultas parametrizadas;
- ORM/driver seguro;
- mínimo privilegio;
- secrets fuera del código;
- backups;
- migraciones controladas.

Nunca construir SQL concatenando inputs del usuario.

---

# 21. FORMULARIOS PÚBLICOS

El formulario de diagnóstico es una superficie de ataque.

Debe incorporar:

- validación;
- rate limiting;
- protección anti-bot;
- límites;
- mensajes de error controlados;
- logging mínimo.

No mostrar detalles internos al usuario.

---

# 22. RATE LIMITING

Aplicar límites para evitar:

- spam;
- abuso;
- flooding;
- consumo excesivo de servicios.

El límite exacto dependerá del endpoint y del proveedor.

Debe definirse antes de producción.

---

# 23. ANTI-SPAM

Primera línea:

- honeypot;
- rate limiting;
- validación;
- límites de frecuencia.

Si el abuso persiste:

- CAPTCHA o mecanismo equivalente.

Principio:

> No introducir CAPTCHA a todos los usuarios si el riesgo puede controlarse con mecanismos menos intrusivos.

---

# 24. CSRF

El riesgo debe analizarse según el mecanismo utilizado.

Si se utilizan cookies autenticadas para acciones sensibles:

- protección CSRF;
- SameSite;
- tokens cuando correspondan.

Para formularios sin sesión autenticada, el diseño de amenazas puede ser diferente.

No implementar controles de forma mecánica sin analizar el flujo.

---

# 25. XSS

Prevenir mediante:

- React escaping;
- no insertar HTML no confiable;
- sanitización cuando corresponda;
- CSP;
- validación;
- revisión de contenido dinámico.

No asumir que CSP reemplaza una implementación segura.

---

# 26. OPEN REDIRECT

No permitir redirecciones basadas en URLs arbitrarias proporcionadas por el usuario.

Las URLs de retorno deben:

- ser internas;
- estar en allowlist;
- o validarse explícitamente.

---

# 27. URL Y QUERY PARAMETERS

No introducir datos sensibles en URLs.

Evitar:

```text
?email=
?phone=
?token=
?password=
```

Las URLs pueden aparecer en:

- historial;
- logs;
- analytics;
- referers.

---

# 28. LOGGING

Registrar únicamente lo necesario.

Los logs pueden contener:

- timestamp;
- endpoint;
- status;
- identificador técnico;
- error controlado.

No registrar:

- passwords;
- tokens;
- API keys;
- información personal innecesaria;
- contenido completo de formularios salvo necesidad justificada.

---

# 29. ERROR HANDLING

En producción:

Usuario:

> Algo no salió como esperábamos.

Servidor:

detalle técnico disponible para diagnóstico autorizado.

Nunca mostrar:

- stack trace;
- rutas internas;
- nombres de archivos sensibles;
- variables de entorno;
- SQL;
- credenciales.

---

# 30. COOKIES

La política inicial recomendada es minimizar cookies.

Categorías:

### Necesarias

Requeridas para funcionamiento.

### Analítica

Utilizadas para medición, según configuración.

### Marketing

No introducir inicialmente salvo necesidad real y consentimiento aplicable.

No instalar decenas de trackers desde el primer día.

---

# 31. CONSENTIMIENTO

El consentimiento debe ser:

- informado;
- específico cuando corresponda;
- comprensible;
- verificable;
- no engañoso.

No utilizar:

- casillas preseleccionadas cuando el consentimiento requiera acción afirmativa;
- textos ambiguos;
- botones que dificulten rechazar.

El diseño legal definitivo debe ser revisado según la operación real y normativa aplicable.

---

# 32. PRIVACY BY DESIGN

Antes de agregar una herramienta:

preguntar:

1. ¿Qué datos recoge?
2. ¿Por qué los necesitamos?
3. ¿Quién los procesa?
4. ¿Dónde se almacenan?
5. ¿Cuánto tiempo?
6. ¿Se comparten?
7. ¿Podemos hacer lo mismo con menos datos?

Si una herramienta no tiene una justificación clara, no se incorpora.

---

# 33. POLÍTICA DE PRIVACIDAD

El sitio debe publicar una política de privacidad adecuada a la operación real.

Como base de revisión para Colombia:

- Ley 1581 de 2012;
- Decreto 1074 de 2015;
- demás normas aplicables según tratamiento realizado.

La política final debe ser revisada legalmente antes de publicación.

Debe explicar, según corresponda:

- responsable;
- datos tratados;
- finalidades;
- derechos;
- canales de contacto;
- tratamiento;
- terceros/encargados;
- conservación;
- cookies;
- mecanismos para ejercer derechos.

No inventar tratamientos que el sitio no realiza.

---

# 34. DATOS DE ANDARIO

Información corporativa disponible:

**Andario Group**

**NIT:** 901774250

**Valledupar, Colombia**

**Dirección:** Calle 13B # 4A-63

**Email:** contacto@andariohospitality.com

**WhatsApp:** +57 321 366 0046

Estos datos deben utilizarse únicamente en contextos corporativos donde correspondan.

---

# 35. DERECHOS DE LOS TITULARES

El diseño de privacidad debe contemplar mecanismos para solicitudes relacionadas con datos personales.

Por ejemplo:

- consulta;
- actualización;
- rectificación;
- supresión cuando proceda;
- revocatoria cuando proceda.

El procedimiento operativo debe definirse antes de producción.

---

# 36. RETENCIÓN DE DATOS

No conservar datos indefinidamente por defecto.

Definir:

- finalidad;
- periodo;
- necesidad;
- eliminación o anonimización cuando corresponda.

La duración concreta debe establecerse de acuerdo con:

- finalidad;
- obligaciones legales;
- relación comercial;
- proveedor utilizado.

---

# 37. TERCEROS

Antes de incorporar un tercero:

- identificar qué datos recibe;
- revisar condiciones;
- revisar seguridad;
- revisar ubicación/procesamiento;
- determinar si actúa como encargado u otra figura aplicable;
- documentar la integración.

Ejemplos:

- analytics;
- email;
- anti-spam;
- hosting;
- CRM;
- WhatsApp.

---

# 38. VERCEL

La infraestructura de Vercel debe configurarse siguiendo buenas prácticas:

- proyecto protegido;
- variables de entorno separadas;
- preview controlado;
- production protegido;
- acceso al equipo limitado;
- dominio verificado;
- logs revisados.

Las capacidades exactas disponibles dependen del plan y configuración contratada.

---

# 39. GITHUB

Configurar:

- protección de rama principal;
- revisión de cambios;
- secret scanning cuando esté disponible;
- Dependabot o mecanismo equivalente;
- checks automáticos;
- eliminación de secretos comprometidos.

Si un secreto llega al repositorio:

> No basta con borrarlo del archivo.

Debe considerarse comprometido y rotarse.

---

# 40. DEPLOYMENT

Flujo:

```text
Local
 ↓
Branch
 ↓
Pull Request
 ↓
Automated Checks
 ↓
Vercel Preview
 ↓
Security Review
 ↓
Production
```

No desplegar cambios experimentales directamente a producción.

---

# 41. BACKUPS

El sitio estático/código debe existir en Git.

Los datos de terceros deben gestionarse según el proveedor.

Si posteriormente Andario almacena datos propios:

- definir backup;
- frecuencia;
- retención;
- restauración;
- pruebas de recuperación.

Un backup no probado no debe considerarse una estrategia completa de recuperación.

---

# 42. INCIDENT RESPONSE

Debe existir un procedimiento básico.

Ante un incidente:

1. Detectar.
2. Contener.
3. Evaluar.
4. Rotar credenciales si corresponde.
5. Corregir.
6. Verificar.
7. Documentar.
8. Comunicar según obligaciones aplicables.

No ocultar un incidente por falta de procedimiento.

---

# 43. SECURITY MAINTENANCE

Periodicidad recomendada:

### Mensual

- revisar dependencias;
- revisar errores;
- revisar formularios;
- revisar logs;
- revisar integraciones.

### Trimestral

- revisar headers;
- revisar CSP;
- revisar accesos;
- revisar servicios de terceros;
- revisar políticas.

### Ante cambios

- revisar amenazas;
- revisar permisos;
- revisar datos;
- revisar impacto.

---

# 44. SECURITY TESTING

Antes de producción:

- npm audit / herramienta equivalente;
- lint;
- typecheck;
- tests;
- revisión manual;
- pruebas de formularios;
- pruebas de headers;
- revisión CSP;
- revisión de secretos;
- prueba de rate limiting;
- prueba de errores;
- prueba de permisos.

Posteriormente:

- DAST cuando el proyecto lo justifique;
- escaneo de dependencias;
- revisión periódica.

---

# 45. CHECKLIST PRE-PRODUCCIÓN

## Infraestructura

- [ ] HTTPS.
- [ ] Dominio configurado.
- [ ] Variables de entorno.
- [ ] Preview/Production separados.
- [ ] Accesos revisados.

## Código

- [ ] TypeScript.
- [ ] Lint.
- [ ] Tests.
- [ ] Dependencias revisadas.
- [ ] Sin secretos.
- [ ] Sin datos reales de prueba.

## Web security

- [ ] CSP.
- [ ] HSTS.
- [ ] Referrer Policy.
- [ ] Permissions Policy.
- [ ] Content-Type protection.
- [ ] Clickjacking protection.

## Formularios

- [ ] Validación cliente.
- [ ] Validación servidor.
- [ ] Rate limiting.
- [ ] Anti-spam.
- [ ] Mensajes seguros.

## Privacidad

- [ ] Política publicada.
- [ ] Consentimiento revisado.
- [ ] Finalidades definidas.
- [ ] Terceros identificados.
- [ ] Retención definida.
- [ ] Canal de solicitudes.

## Operación

- [ ] Logs revisados.
- [ ] Error handling.
- [ ] Monitoring.
- [ ] Procedimiento de incidentes.

---

# 46. SEGURIDAD NO DEBE ROMPER UX

Un sitio seguro pero imposible de usar no cumple el objetivo del proyecto.

Ejemplos:

- CAPTCHA innecesario;
- formularios interminables;
- banners invasivos;
- consentimientos incomprensibles;
- bloqueos injustificados.

La seguridad debe integrarse de forma proporcional al riesgo.

---

# 47. NO CONFUNDIR SEGURIDAD CON PRIVACIDAD

Son relacionadas pero diferentes.

### Seguridad

Protege:

- confidencialidad;
- integridad;
- disponibilidad.

### Privacidad

Define:

- qué datos se recopilan;
- para qué;
- cómo se utilizan;
- con quién se comparten;
- cuánto tiempo se conservan;
- qué derechos tienen las personas.

Andario necesita ambas.

---

# 48. FUTURO BOOKING ENGINE

Cuando el sitio se conecte profundamente con Andario Booking Engine, se deberán añadir controles específicos para:

- autenticación;
- autorización;
- tenants;
- aislamiento de datos;
- reservas;
- huéspedes;
- pagos;
- webhooks;
- APIs;
- idempotencia;
- auditoría;
- rate limiting;
- secretos;
- protección contra abuso.

Estos controles no deben improvisarse durante la integración.

---

# 49. PRINCIPIO DE SEGURIDAD PARA IA

Si en el futuro se integra un agente de IA:

La IA no debe tener autoridad para inventar:

- disponibilidad;
- precios;
- reservas;
- políticas;
- estados de pago.

La IA debe consultar servicios autorizados.

Principio:

> **La IA puede interpretar y conversar; las reglas de negocio deben permanecer en sistemas controlados.**

---

# 50. CRITERIO FINAL

La seguridad de Andario Hospitality debe ser:

**Proporcional + medible + mantenible + transparente.**

No se busca crear una infraestructura empresarial innecesariamente pesada.

Se busca construir una web corporativa que:

- proteja los datos;
- minimice superficie de ataque;
- reduzca riesgos;
- cumpla buenas prácticas;
- respete la privacidad;
- sea segura por defecto;
- pueda evolucionar junto con Andario.

> **La confianza no se diseña solamente con colores y mensajes. También se construye con una arquitectura segura.**
