import {
  Burger,
  Container,
  Group,
  Navbar,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { useStyles } from './useStyles.hook';

export const NAVBAR_HEIGHT = 60;

export const TopBar = () => {
  const { classes, cx } = useStyles();
  const links = [{ label: 'Horaires', link: '/horaires' }];
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0]);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: link.link === active.link,
      })}
      onClick={(event) => {
        close();
        setActive(link);
        console.log('toto');
      }}
    >
      {link.label}
    </a>
  ));
  return (
    <Navbar height={NAVBAR_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        MMMP
        <Group spacing={5} className={classes.links}>
          {items}
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
