import { Button, TextInput } from '@mantine/core';
import { TimeRangeInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { ADD_SHIFT_VALIDATION_SCHEMA } from './helpers';
import { useStyles } from './useStyles.hook';

export const AddShiftForm = () => {
  const { classes } = useStyles();
  const { getInputProps, errors, onSubmit } = useForm({
    initialValues: {
      name: '',
      time: [],
    },
    validate: zodResolver(ADD_SHIFT_VALIDATION_SCHEMA),
    validateInputOnChange: true,
  });

  return (
    <form onSubmit={onSubmit((values) => console.log(values))}>
      <TextInput
        className={classes.input}
        required
        placeholder="Groupe 1"
        label="Nom du groupe"
        {...getInputProps('name')}
      />
      <TimeRangeInput
        className={classes.input}
        label="Plage horaire"
        required
        clearable
        {...getInputProps('time')}
      />
      <Button type="submit" disabled={Object.keys(errors).length > 0} fullWidth>
        Valider
      </Button>
    </form>
  );
};
