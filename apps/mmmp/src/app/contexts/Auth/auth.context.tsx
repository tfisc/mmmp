import {
  LoginDTO,
  UserWithoutPassword,
} from 'libs/api-interfaces/src/lib/users.type';
import React from 'react';
export interface AuthContextType {
  user: UserWithoutPassword;
  signin: (values: LoginDTO) => Promise<void>;
  signout: () => void;
  isError: boolean;
  access_token?: string;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AuthContext = React.createContext<AuthContextType>(null!);
