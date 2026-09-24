import { describe, expect, it } from 'vitest';
import { en } from '@/content/en';
import { es } from '@/content/es';
import { TERMS_SECTION_IDS, TERMS_UPDATED_ON, formatTermsUpdated } from '@/lib/legal/terms';

describe('terms page', () => {
  it('keeps the same stable anchors in Spanish and English', () => {
    expect(es.termsView.sections.map((section) => section.id)).toEqual([...TERMS_SECTION_IDS]);
    expect(en.termsView.sections.map((section) => section.id)).toEqual([...TERMS_SECTION_IDS]);
  });

  it('formats the centralized update date without shifting the day', () => {
    expect(TERMS_UPDATED_ON).toBe('2026-09-23');
    expect(formatTermsUpdated('es')).toMatch(/23/);
    expect(formatTermsUpdated('es')).toMatch(/2026/);
    expect(formatTermsUpdated('en')).toMatch(/September 23, 2026/);
  });
});
