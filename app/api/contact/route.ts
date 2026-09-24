import { handleContact } from '@/lib/contact/handle';

export async function POST(request: Request) {
  const result = await handleContact(request);
  if (result.ok) {
    return Response.json({ ok: true });
  }
  return Response.json({ ok: false, code: result.code }, { status: result.status });
}
