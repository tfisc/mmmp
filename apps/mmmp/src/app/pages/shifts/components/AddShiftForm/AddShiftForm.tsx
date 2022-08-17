import { Button, Loader, Select } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { postShift } from '../../../../backend/shifts/postShift';
import { useMutation, useQueryClient } from 'react-query';
import { ADD_SHIFT_VALIDATION_SCHEMA } from './helpers';
import { useStyles } from './useStyles.hook';
import { CreateShiftDTO } from '../../../../../../../../libs/api-interfaces/src/lib/shifts.type';

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
  const { getInputProps, errors, onSubmit } = useForm<CreateShiftDTO>({
    validate: zodResolver(ADD_SHIFT_VALIDATION_SCHEMA),
  });
  const queryClient = useQueryClient();

  const mutation = useMutation(postShift, {
    onSuccess: () => {
      queryClient.invalidateQueries('shifts');
    },
  });

  const submitShift = (values: CreateShiftDTO) =>
    mutation.mutate({
      day: values.day,
      start: values.start.toISOString(),
      end: values.end.toISOString(),
    });

  return (
    <form onSubmit={onSubmit(submitShift)}>
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
      <Button
        type="submit"
        disabled={Object.keys(errors).length > 0 || mutation.isLoading}
        fullWidth
      >
        {mutation.isLoading ? <Loader size={'sm'} color="gray" /> : 'Valider'}
      </Button>
    </form>
  );
};
