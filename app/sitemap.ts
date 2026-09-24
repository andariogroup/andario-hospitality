import type { MetadataRoute } from 'next';
import { site } from '@/lib/config/site';
import { allLocalizedPaths, isRoutePublic } from '@/lib/i18n/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return allLocalizedPaths()
    .filter(({ routeId }) => isRoutePublic(routeId))
    .map(({ path }) => ({
      url: `${site.url}${path}`,
      changeFrequency: path.endsWith('/es') || path.endsWith('/en') ? ('weekly' as const) : ('monthly' as const),
      priority: path === '/es' || path === '/en' ? 1 : 0.7,
    }));
}
