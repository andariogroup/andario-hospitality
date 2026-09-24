/** Confirms the full delivery chain. A finished fetch is not enough. */
export function isLeadAccepted(responseOk: boolean, body: unknown): boolean {
  return responseOk && !!body && typeof body === 'object' && (body as { success?: unknown }).success === true;
}
