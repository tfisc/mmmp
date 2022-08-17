import { MantineProvider } from '@mantine/core';
import { TopBar } from './components/Topbar.tsx/Topbar';
import { Shifts } from './pages/shifts/Shifts';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <TopBar />
        <Shifts />
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
