import { body } from 'express-validator';

export const createShiftchema = [
  body('day').isString(),
  body('start').isISO8601(),
  body('end').isISO8601(),
];
