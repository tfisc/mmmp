import { MantineProvider } from '@mantine/core';
import { TopBar } from './components/Topbar.tsx/Topbar';
import { Shifts } from './pages/shifts/Shifts';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './contexts/Auth/auth.provider';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './components/RequiredAuth/RequiredAuth';
import { Login } from './pages/login/Login';
import { requestInterceptor } from './backend/interceptors';
import { useLayoutEffect } from 'react';

const queryClient = new QueryClient();

export const App = () => {
  useLayoutEffect(() => {
    requestInterceptor();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/shifts"
              element={
                <RequireAuth>
                  <>
                    <TopBar />
                    <Shifts />
                  </>
                </RequireAuth>
              }
            />
          </Routes>
        </MantineProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
