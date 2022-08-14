import { Button, Select, TextInput } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { ADD_SHIFT_VALIDATION_SCHEMA } from './helpers';
import { useStyles } from './useStyles.hook';

export const AddShiftForm = () => {
  const days = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ];
  const selectDays = days.map((day) => ({ value: day, label: day }));
  const { classes } = useStyles();
  const { getInputProps, errors, onSubmit, validate } = useForm({
    initialValues: {
      day: 'Lundi',
      start: undefined,
      end: undefined,
    },
    validate: zodResolver(ADD_SHIFT_VALIDATION_SCHEMA),
  });

  return (
    <form onSubmit={onSubmit((values) => console.log(values))}>
      <Select
        className={classes.input}
        data={selectDays}
        required
        label="Jour"
        placeholder="Jour"
        {...getInputProps('day')}
      />
      <TimeInput
        className={classes.input}
        label="Début"
        required
        clearable
        {...getInputProps('start')}
      />
      <TimeInput
        className={classes.input}
        label="Fin"
        required
        clearable
        {...getInputProps('end')}
      />
      <Button type="submit" disabled={Object.keys(errors).length > 0} fullWidth>
        Valider
      </Button>
    </form>
  );
};
