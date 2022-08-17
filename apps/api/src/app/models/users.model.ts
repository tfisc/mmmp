import { PrismaClient } from '@prisma/client';
import { CreateUserDTO, User } from 'libs/api-interfaces/src/lib/users.type';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const createUser = async (user: CreateUserDTO): Promise<User> => {
  user.password = await bcrypt.hash(user.password, 10);
  user.role = 'admin';
  return prisma.user.create({ data: user });
};

export const findUserByEmail = async (email: string): Promise<User> => {
  return prisma.user.findFirst({ where: { email: { equals: email } } });
};
