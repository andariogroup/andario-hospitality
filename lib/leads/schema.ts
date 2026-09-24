import { z } from 'zod';
import { serverContactSchema } from '@/lib/contact/schema';

/** The public form fields, plus the optional context the page can send. */
export const leadRequestSchema = serverContactSchema.extend({
  page: z.string().trim().max(500).optional(),
  submissionId: z.string().trim().max(80).optional(),
});

export type LeadRequest = z.infer<typeof leadRequestSchema>;
