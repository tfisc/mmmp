import { z } from 'zod';

export const ADD_SHIFT_VALIDATION_SCHEMA = z.object({
  day: z.string().min(1, { message: 'Champ obligatoire' }),
  start: z.date({ required_error: 'Champ obligatoire' }),
  end: z.date({ required_error: 'Champ obligatoire' }),
});
