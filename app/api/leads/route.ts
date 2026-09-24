import { handleLead } from '@/lib/leads/handle';

export async function POST(request: Request) {
  const result = await handleLead(request);
  if (result.ok) {
    return Response.json({ success: true });
  }
  return Response.json({ success: false, error: result.error }, { status: result.status });
}
