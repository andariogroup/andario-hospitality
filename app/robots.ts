import type { MetadataRoute } from 'next';
import { site } from '@/lib/config/site';

export default function robots(): MetadataRoute.Robots {
  const indexable =
    process.env.VERCEL_ENV === 'production' ||
    (process.env.VERCEL_ENV === undefined && process.env.NODE_ENV === 'production');

  if (!indexable) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${site.url}/sitemap.xml`,
    host: new URL(site.url).host,
  };
}
