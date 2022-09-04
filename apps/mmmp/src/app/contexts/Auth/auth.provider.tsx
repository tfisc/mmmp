/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import {
  LoginDTO,
  UserWithoutPassword,
} from 'libs/api-interfaces/src/lib/users.type';
import { login } from '../../backend/auth/login';
import { AuthContext } from './auth.context';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserWithoutPassword>(null!);
  const navigate = useNavigate();
  const access_token = localStorage.getItem('access_token') || undefined;

  const { mutate, isError } = useMutation(login);

  const signin = async (values: LoginDTO): Promise<void> => {
    mutate(values, {
      onSuccess: (data) => {
        localStorage.setItem('access_token', data.access_token);
        setUser(data.user);
        navigate('/shifts', { replace: true });
      },
    });
  };

  const signout = () => {
    setUser(null!);
    localStorage.removeItem('access_token');
    navigate('/login', { replace: true });
  };

  const value = { user, signin, signout, isError, access_token };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
