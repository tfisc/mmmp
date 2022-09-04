import {
  Burger,
  Button,
  Container,
  Group,
  Navbar,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.hook';
import { useStyles } from './useStyles.hook';

export const NAVBAR_HEIGHT = 60;

export const TopBar = () => {
  const { classes, cx } = useStyles();
  const { signout } = useAuth();
  const links = [{ label: 'Horaires', link: '/horaires' }];
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0]);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: link.link === active.link,
      })}
      onClick={() => {
        close();
        setActive(link);
      }}
    >
      {link.label}
    </Link>
  ));
  return (
    <Navbar height={NAVBAR_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        MMMP
        <Group spacing={5} className={classes.links}>
          {items}
          <Button variant="subtle" size="xs" onClick={signout}>
            Se Déconnecter
          </Button>
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Transition transition="slide-left" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Navbar>
  );
};
