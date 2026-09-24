import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isLocale } from '@/lib/i18n/routes';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/brand') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const locale = pathname.split('/').filter(Boolean)[0];
  if (locale && isLocale(locale)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? '/es' : `/es${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
