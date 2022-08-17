import { Optional } from './utils';

export type User = {
  id: number;
  email: string;
  password: string;
  role: string;
};

export type UserWithoutPassword = Omit<User, 'password'>;

export type CreateUserDTO = Optional<User, 'id' & 'role'>;
