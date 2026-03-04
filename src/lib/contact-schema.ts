import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z
    .string()
    .min(8, "Numéro invalide")
    .regex(/^[0-9\s\+\-\.\(\)]+$/, "Numéro invalide"),
  message: z.string().min(10, "Minimum 10 caractères"),
});

export type ContactData = z.infer<typeof contactSchema>;
