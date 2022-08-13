import { z } from 'zod';

export const ADD_SHIFT_VALIDATION_SCHEMA = z.object({
  name: z.string().min(1, { message: 'Champ obligatoire' }),
  time: z.array(z.date()).min(2, 'Champ obligatoire'),
});
