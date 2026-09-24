/**
 * Parsers for optional public configuration.
 * Empty, invalid or unsafe values become null so the UI can omit them.
 */

export function optionalText(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

/** Digits only. Rejects values too short to be a usable phone number. */
export function optionalPhone(value: string | undefined): string | null {
  const digits = value?.replace(/\D/g, '') ?? '';
  return digits.length >= 8 && digits.length <= 15 ? digits : null;
}

export function optionalHttpUrl(value: string | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

export function optionalEmail(value: string | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return null;
  return trimmed;
}

/** GA4 measurement IDs look like G-XXXXXXXX. Anything else is ignored. */
export function optionalMeasurementId(value: string | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed || !/^G-[A-Z0-9]+$/i.test(trimmed)) return null;
  return trimmed;
}

export function optionalCoordinates(
  latitudeRaw: string | undefined,
  longitudeRaw: string | undefined,
): { latitude: number; longitude: number } | null {
  if (!latitudeRaw?.trim() || !longitudeRaw?.trim()) return null;

  const latitude = Number.parseFloat(latitudeRaw);
  const longitude = Number.parseFloat(longitudeRaw);

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    return null;
  }

  return { latitude, longitude };
}

export function resolveSiteUrl(explicit?: string, vercelUrl?: string): string {
  const configured = explicit?.trim();
  if (configured) {
    try {
      const withProtocol = configured.includes('://') ? configured : `https://${configured}`;
      return new URL(withProtocol).origin;
    } catch {
      return configured.replace(/\/$/, '');
    }
  }

  const host = vercelUrl?.trim();
  if (host) {
    const hostname = host.replace(/^https?:\/\//, '').replace(/\/$/, '');
    return `https://${hostname}`;
  }

  return 'http://localhost:3000';
}

export function formatPhone(digits: string): string {
  if (digits.startsWith('57') && digits.length === 12) {
    const local = digits.slice(2);
    return `+57 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
  }
  return `+${digits}`;
}
