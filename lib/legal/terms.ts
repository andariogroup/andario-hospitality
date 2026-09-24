import type { Locale } from '@/lib/i18n/routes';

/**
 * Public revision date for the terms page. Change this when the published text changes.
 *
 * TODO: REVISIÓN LEGAL — responsabilidad y ley aplicable, antes de tratar el texto como definitivo.
 * TODO: DEFINIR CONDICIÓN COMERCIAL — precios, pagos, plazos, penalizaciones y terminación
 * dependen del documento de cada contratación. No definirlos en estos términos sin esa decisión.
 */
export const TERMS_UPDATED_ON = '2026-09-23';

export const TERMS_SECTION_IDS = [
  'sobre-el-sitio',
  'aceptacion',
  'servicios',
  'precios-pagos',
  'uso-aceptable',
  'booking-engine',
  'terceros',
  'propiedad-intelectual',
  'disponibilidad',
  'responsabilidad',
  'datos-personales',
  'terminacion',
  'modificaciones',
  'pqr',
  'ley-aplicable',
  'contacto',
] as const;

export type TermsSectionId = (typeof TERMS_SECTION_IDS)[number];

export function formatTermsUpdated(locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-CO' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${TERMS_UPDATED_ON}T00:00:00.000Z`));
}
