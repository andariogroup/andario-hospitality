import { describe, expect, it } from 'vitest';
import {
  formatPhone,
  optionalCoordinates,
  optionalHttpUrl,
  optionalMeasurementId,
  optionalPhone,
  resolveSiteUrl,
} from '@/lib/config/env';
import { alternateHref, href, isRoutePublic, resolvePathname, resolveSegments } from '@/lib/i18n/routes';
import { whatsAppUrl } from '@/lib/whatsapp/url';

describe('environment parsers', () => {
  it('rejects unsafe urls and empty values', () => {
    expect(optionalHttpUrl('')).toBeNull();
    expect(optionalHttpUrl('javascript:alert(1)')).toBeNull();
    expect(optionalHttpUrl('https://andario.example/path')).toBe('https://andario.example/path');
  });

  it('requires both coordinates', () => {
    expect(optionalCoordinates('10.4', '')).toBeNull();
    expect(optionalCoordinates('10.4', '-73.2')).toEqual({ latitude: 10.4, longitude: -73.2 });
    expect(optionalCoordinates('120', '10')).toBeNull();
  });

  it('accepts only plausible phones and GA4 ids', () => {
    expect(optionalPhone('+57 321 366 0046')).toBe('573213660046');
    expect(optionalPhone('123')).toBeNull();
    expect(optionalMeasurementId('G-ABC123')).toBe('G-ABC123');
    expect(optionalMeasurementId('UA-1')).toBeNull();
  });

  it('resolves the site origin without inventing a production host', () => {
    expect(resolveSiteUrl('https://www.example.com/')).toBe('https://www.example.com');
    expect(resolveSiteUrl(undefined, 'andario.vercel.app')).toBe('https://andario.vercel.app');
    expect(resolveSiteUrl()).toBe('http://localhost:3000');
  });

  it('formats a Colombian mobile number', () => {
    expect(formatPhone('573213660046')).toBe('+57 321 366 0046');
  });
});

describe('localized routes', () => {
  it('builds the canonical Spanish and English paths', () => {
    expect(href('es', 'andario-web')).toBe('/es/soluciones/andario-web');
    expect(href('en', 'andario-web')).toBe('/en/solutions/andario-web');
    expect(href('es', 'accommodations')).toBe('/es/alojamientos');
    expect(isRoutePublic('accommodations')).toBe(false);
    expect(href('en', 'privacy')).toBe('/en/privacy');
  });

  it('resolves segments and language alternates', () => {
    expect(resolveSegments('es', ['soluciones', 'digital-check'])).toBe('digital-check');
    expect(resolveSegments('en', ['soluciones'])).toBeNull();
    expect(resolvePathname('/en/how-we-work')).toEqual({ locale: 'en', routeId: 'how-we-work' });
    expect(alternateHref('/es/contacto', 'en')).toBe('/en/contact');
    expect(alternateHref('/unknown', 'en')).toBe('/en');
  });
});

describe('WhatsApp links', () => {
  it('encodes the phone and a contextual message', () => {
    const url = whatsAppUrl('573213660046', 'es', 'diagnosis');
    expect(url.startsWith('https://wa.me/573213660046?text=')).toBe(true);
    expect(decodeURIComponent(url)).toContain('diagnóstico digital');
  });
});
