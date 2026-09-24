import { en } from '@/content/en';
import { es } from '@/content/es';
import type { Dictionary } from '@/content/types';
import type { Locale } from '@/lib/i18n/routes';

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
