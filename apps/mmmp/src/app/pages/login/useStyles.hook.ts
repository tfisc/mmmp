import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  title: {
    marginBottom: theme.spacing.lg,
    color: theme.colors.gray[8],
  },
  container: {
    margin: 0,
    width: '30rem',
    padding: '2rem',
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      height: '100vh',
    },
  },
  centerer: { minHeight: '100vh' },
}));
