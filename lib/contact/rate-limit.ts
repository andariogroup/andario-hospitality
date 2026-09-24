const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

const hits = new Map<string, number[]>();

/** Returns true when the request is allowed. */
export function rateLimit(key: string, now = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}

export function resetRateLimit(): void {
  hits.clear();
}

export function clientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || 'local';
  return ip.slice(0, 64);
}
