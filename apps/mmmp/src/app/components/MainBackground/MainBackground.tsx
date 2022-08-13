import { Box } from '@mantine/core';
import { ReactNode } from 'react';
import { NAVBAR_HEIGHT } from '../../components/Topbar.tsx/Topbar';

type Props = { children: ReactNode };

export const MainBackground = ({ children }: Props): JSX.Element => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[1],
        width: '100%',
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        padding: `${theme.spacing.xl}px`,
      })}
    >
      {children}
    </Box>
  );
};
