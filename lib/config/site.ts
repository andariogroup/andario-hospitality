import {
  formatPhone,
  optionalCoordinates,
  optionalEmail,
  optionalHttpUrl,
  optionalMeasurementId,
  optionalPhone,
  optionalText,
  resolveSiteUrl,
} from '@/lib/config/env';

/** Legal identity. This is not contact data that changes independently of the company. */
export const COMPANY = {
  parent: 'Andario Group',
  brand: 'Andario Hospitality',
  nit: '901774250',
} as const;

export type SocialNetwork = 'facebook' | 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'google';

export type SocialLink = {
  network: SocialNetwork;
  url: string;
};

const socialSources: { network: SocialNetwork; value: string | undefined }[] = [
  { network: 'facebook', value: process.env.NEXT_PUBLIC_FACEBOOK_URL },
  { network: 'instagram', value: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
  { network: 'linkedin', value: process.env.NEXT_PUBLIC_LINKEDIN_URL },
  { network: 'youtube', value: process.env.NEXT_PUBLIC_YOUTUBE_URL },
  { network: 'tiktok', value: process.env.NEXT_PUBLIC_TIKTOK_URL },
  { network: 'google', value: process.env.NEXT_PUBLIC_GOOGLE_PROFILE_URL },
];

export const site = {
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL, process.env.VERCEL_URL),
  email: optionalEmail(process.env.NEXT_PUBLIC_PUBLIC_EMAIL),
  whatsapp: optionalPhone(process.env.NEXT_PUBLIC_WHATSAPP_PHONE),
  address: optionalText(process.env.NEXT_PUBLIC_ADDRESS),
  city: optionalText(process.env.NEXT_PUBLIC_CITY),
  country: optionalText(process.env.NEXT_PUBLIC_COUNTRY),
  coordinates: optionalCoordinates(
    process.env.NEXT_PUBLIC_LATITUDE,
    process.env.NEXT_PUBLIC_LONGITUDE,
  ),
  socials: socialSources.flatMap((item) => {
    const url = optionalHttpUrl(item.value);
    return url ? [{ network: item.network, url }] : [];
  }),
  measurementId: optionalMeasurementId(process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID),
} as const;

export function phoneLabel(digits: string | null): string | null {
  return digits ? formatPhone(digits) : null;
}

export function mapUrl(): string | null {
  if (!site.coordinates) return null;
  const { latitude, longitude } = site.coordinates;
  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
}
