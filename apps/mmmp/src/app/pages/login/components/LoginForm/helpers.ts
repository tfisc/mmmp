import { z } from 'zod';

export const LOGIN_VALIDATION_SCHEMA = z.object({
  email: z
    .string()
    .email(`L'email n'est pas valide`)
    .min(1, { message: 'Champ obligatoire' }),
  password: z.string().min(1, { message: 'Champ obligatoire' }),
});
