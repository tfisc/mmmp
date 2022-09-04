import { Button, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { LoginDTO } from 'libs/api-interfaces/src/lib/users.type';
import { useStyles } from './useStyles.hook';
import { LOGIN_VALIDATION_SCHEMA } from './helpers';
import { useAuth } from 'apps/mmmp/src/app/hooks/useAuth.hook';

export const LoginForm = () => {
  const { classes } = useStyles();
  const { getInputProps, errors, onSubmit } = useForm<LoginDTO>({
    validate: zodResolver(LOGIN_VALIDATION_SCHEMA),
  });
  const { signin, isError } = useAuth();
  const handleSubmit = (values: LoginDTO) => signin(values);

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <TextInput
        className={classes.input}
        required
        label="Email"
        placeholder="jean.durand@gmail.com"
        {...getInputProps('email')}
      />
      <TextInput
        className={classes.input}
        required
        label="Mot de passe"
        placeholder="******"
        {...getInputProps('password')}
      />
      <Button
        className={classes.input}
        type="submit"
        disabled={Object.keys(errors).length > 0}
        fullWidth
      >
        Connexion
      </Button>
      {isError ? (
        <Text className={classes.error} align="center">
          Email et / ou mot de passe incorrects{' '}
        </Text>
      ) : null}
    </form>
  );
};
