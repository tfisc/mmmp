import { Optional } from './utils';

export type Shift = {
  id: number;
  day: string;
  start: Date;
  end: Date;
};

export type CreateShiftDTO = Optional<Shift, 'id'>;
