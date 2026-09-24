import type { NextConfig } from 'next';

/**
 * CSP allows the site itself, the GA4 loader when a measurement ID exists,
 * and inline styles emitted by Next.js and Tailwind. Booking and WhatsApp
 * are outbound links, not embeds.
 */
const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : '',
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim()
    ? 'https://www.googletagmanager.com'
    : '',
]
  .filter(Boolean)
  .join(' ');

const connectSrc = [
  "'self'",
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim()
    ? 'https://www.google-analytics.com https://region1.google-analytics.com'
    : '',
]
  .filter(Boolean)
  .join(' ');

const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  `script-src ${scriptSrc}`,
  `connect-src ${connectSrc}`,
  process.env.NODE_ENV === 'production' ? 'upgrade-insecure-requests' : '',
]
  .filter(Boolean)
  .join('; ');

const SECURITY_HEADERS = [
  { key: 'Content-Security-Policy', value: CSP },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [{ source: '/:path*', headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
