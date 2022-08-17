import { body } from 'express-validator';

export const createUserSchema = [
  body('email').isString(),
  body('password').isString(),
];
