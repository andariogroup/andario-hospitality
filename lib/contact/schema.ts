import { z } from 'zod';
import { ACCOMMODATION_TYPES, LOCALES } from '@/lib/i18n/routes';

export const CONTACT_NEEDS = ['bookings', 'web', 'google', 'otas', 'organize', 'whatsapp', 'unsure'] as const;

export type ContactNeed = (typeof CONTACT_NEEDS)[number];

export type ContactMessages = {
  required: string;
  email: string;
  consent: string;
};

export function createContactSchema(messages: ContactMessages) {
  return z.object({
    locale: z.enum(LOCALES),
    name: z.string().trim().min(2, messages.required).max(120),
    establishment: z.string().trim().min(2, messages.required).max(160),
    location: z.string().trim().min(2, messages.required).max(120),
    accommodationType: z.enum(ACCOMMODATION_TYPES, { message: messages.required }),
    needs: z.array(z.enum(CONTACT_NEEDS)).min(1, messages.required).max(CONTACT_NEEDS.length),
    whatsapp: z
      .string()
      .trim()
      .max(30)
      .refine((value) => {
        const digits = value.replace(/\D/g, '');
        return digits.length >= 8 && digits.length <= 15;
      }, messages.required),
    email: z
      .string()
      .trim()
      .max(160)
      .refine((value) => value === '' || z.string().email().safeParse(value).success, messages.email),
    note: z.string().trim().max(2000),
    consent: z.boolean().refine((value) => value === true, messages.consent),
  });
}

export const serverContactSchema = createContactSchema({
  required: 'invalid',
  email: 'invalid',
  consent: 'invalid',
});

export type ContactPayload = z.infer<typeof serverContactSchema>;

export function isHoneypotTripped(body: unknown): boolean {
  if (!body || typeof body !== 'object') return false;
  const value = (body as { websiteConfirm?: unknown }).websiteConfirm;
  return typeof value === 'string' && value.trim().length > 0;
}
