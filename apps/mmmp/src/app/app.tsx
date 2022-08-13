import { MantineProvider } from '@mantine/core';
import { TopBar } from './components/Topbar.tsx/Topbar';
import { Shifts } from './pages/shifts/Shifts';

export const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <TopBar />
      <Shifts />
    </MantineProvider>
  );
};

export default App;
