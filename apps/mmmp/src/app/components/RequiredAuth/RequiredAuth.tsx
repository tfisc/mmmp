import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.hook';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { access_token } = useAuth();
  const location = useLocation();

  if (!access_token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
