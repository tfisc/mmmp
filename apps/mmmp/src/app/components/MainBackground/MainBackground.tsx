import { Box } from '@mantine/core';
import { ReactNode } from 'react';
import { NAVBAR_HEIGHT } from '../../components/Topbar.tsx/Topbar';

type Props = { children: ReactNode; fullHeight?: boolean; padding?: boolean };

export const MainBackground = ({
  children,
  fullHeight,
  padding = true,
}: Props): JSX.Element => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[2],
        width: '100%',
        minHeight: fullHeight ? '100vh' : `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        padding: padding ? `${theme.spacing.xl}px` : 0,
      })}
    >
      {children}
    </Box>
  );
};
