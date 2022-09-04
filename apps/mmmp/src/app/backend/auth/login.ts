import {
  LoginDTO,
  UserWithoutPassword,
} from 'libs/api-interfaces/src/lib/users.type';

export const login = async (
  loginBody: LoginDTO
): Promise<{ user: UserWithoutPassword; access_token: string }> => {
  const result = await fetch('http://localhost:3333/api/v1/auth/login', {
    body: JSON.stringify(loginBody),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  if (!result.ok) {
    throw new Error('Invalid credentials');
  }
  return result.json();
};
