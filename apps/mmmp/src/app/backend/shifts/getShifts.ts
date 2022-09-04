import { Shift } from 'libs/api-interfaces/src/lib/shifts.type';

export const getShifts = async (): Promise<Shift[]> => {
  const result = await fetch('http://localhost:3333/api/v1/shifts', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return result.json();
};
