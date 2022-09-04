import { Button, Loader, Select } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { postShift } from '../../../../backend/shifts/postShift';
import { useMutation, useQueryClient } from 'react-query';
import { ADD_SHIFT_VALIDATION_SCHEMA } from './helpers';
import { useStyles } from './useStyles.hook';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CreateShiftDTO } from 'libs/api-interfaces/src/lib/shifts.type';
type Props = { toggleModal: (v: boolean) => void };

export const AddShiftForm = ({ toggleModal }: Props) => {
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

  const { mutate, isLoading } = useMutation(postShift, {
    onSuccess: () => {
      queryClient.invalidateQueries('shifts');
      toggleModal(false);
    },
  });

  const submitShift = (values: CreateShiftDTO) =>
    mutate({
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
        disabled={Object.keys(errors).length > 0 || isLoading}
        fullWidth
      >
        {isLoading ? <Loader size={'sm'} color="gray" /> : 'Valider'}
      </Button>
    </form>
  );
};
