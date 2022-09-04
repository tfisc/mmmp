export type User = {
  id: number;
  email: string;
  password: string;
  role: string;
};

export type UserWithoutPassword = Omit<User, 'password'>;

export type CreateUserDTO = Omit<User, 'id' | 'role'>;

export type LoginDTO = CreateUserDTO;
