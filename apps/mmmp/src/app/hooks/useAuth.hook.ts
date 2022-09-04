import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth/auth.context';

export const useAuth = () => useContext(AuthContext);
