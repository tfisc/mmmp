import {
  CreateShiftDTO,
  Shift,
} from 'libs/api-interfaces/src/lib/shifts.type';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createShift = async (shift: CreateShiftDTO): Promise<Shift> => {
  return prisma.shift.create({ data: shift });
};

export const getAllShifts = async (): Promise<Shift[]> => {
  return prisma.shift.findMany();
};
