import { Box, MantineProvider } from '@mantine/core';
import { TopBar } from './components/Topbar.tsx/Topbar';

export const App = () => {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <TopBar />
      </MantineProvider>
    </>
  );
};

export default App;
