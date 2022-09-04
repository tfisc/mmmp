import { Center, Paper, Title } from '@mantine/core';
import { MainBackground } from '../../components/MainBackground/MainBackground';
import { LoginForm } from './components/LoginForm/LoginForm';
import { useStyles } from './useStyles.hook';

export const Login = () => {
  const { classes } = useStyles();
  return (
    <MainBackground fullHeight padding={false}>
      <Center className={classes.centerer}>
        <Paper className={classes.container}>
          <Title align="center" order={1} className={classes.title}>
            Connexion MMMP
          </Title>
          <LoginForm />
        </Paper>
      </Center>
    </MainBackground>
  );
};
