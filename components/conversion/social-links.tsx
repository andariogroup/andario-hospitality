'use client';

import { track } from '@/lib/analytics/events';
import type { SocialLink } from '@/lib/config/site';

const labels: Record<SocialLink['network'], string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
  tiktok: 'TikTok',
  google: 'Google',
};

function SocialIcon({ network }: { network: SocialLink['network'] }) {
  const className = 'h-5 w-5 fill-current';
  if (network === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.4 6.6a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
      </svg>
    );
  }
  if (network === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
        <path d="M5.7 9.2H8.4V19H5.7Zm1.35-4.2a1.55 1.55 0 1 1-1.55 1.55A1.55 1.55 0 0 1 7.05 5ZM10.2 9.2h2.55v1.34h.04a2.8 2.8 0 0 1 2.52-1.38c2.7 0 3.2 1.78 3.2 4.09V19h-2.7v-5.1c0-1.22 0-2.78-1.7-2.78s-1.96 1.32-1.96 2.69V19h-2.7Z" />
      </svg>
    );
  }
  if (network === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
        <path d="M14.2 20v-6.1h2.05l.3-2.38h-2.35V10c0-.69.2-1.16 1.18-1.16H16.7V6.72A16 16 0 0 0 14.9 6.6c-1.78 0-3 1.09-3 3.08v1.84H9.7v2.38h2.2V20Z" />
      </svg>
    );
  }
  return null;
}

export function SocialLinks({ links, icons = false }: { links: SocialLink[]; icons?: boolean }) {
  if (links.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {links.map((link) => (
        <li key={link.network}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labels[link.network]}
            className={
              icons
                ? 'inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-200 hover:border-white/50 hover:text-white'
                : 'text-sm font-semibold text-white/80 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline'
            }
            onClick={() => {
              track({ name: 'social_click', network: link.network });
              if (icons) track({ name: 'footer_social_click', network: link.network });
            }}
          >
            {icons ? <SocialIcon network={link.network} /> : labels[link.network]}
          </a>
        </li>
      ))}
    </ul>
  );
}
