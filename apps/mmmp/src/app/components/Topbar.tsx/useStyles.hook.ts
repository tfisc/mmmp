import { createStyles } from '@mantine/core';
import { NAVBAR_HEIGHT } from './Topbar';

export const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: NAVBAR_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
    margin: 0,
    alignItems: 'center',
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    [theme.fn.smallerThan('sm')]: {
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
    },
    [theme.fn.smallerThan('xs')]: {
      paddingLeft: theme.spacing.lg,
      paddingRight: theme.spacing.lg,
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));
