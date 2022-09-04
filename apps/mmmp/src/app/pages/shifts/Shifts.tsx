import { Button, Group, Modal } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons';
import { useState } from 'react';
import { MainBackground } from '../../components/MainBackground/MainBackground';
import { AddShiftForm } from './components/AddShiftForm/AddShiftForm';
import { ShiftTable } from './components/ShifTable/ShiftTable';
import { useStyles } from './useStyles.hook';

export const Shifts = () => {
  const { classes } = useStyles();
  const [addShiftOpened, setAddShiftOpened] = useState(false);
  const smallScreen = useMediaQuery('(max-width: 576px)');
  return (
    <MainBackground>
      <Group position="right" className={classes.menu}>
        <Button
          fullWidth={smallScreen}
          onClick={() => setAddShiftOpened(true)}
          leftIcon={<IconPlus />}
        >
          Ajouter un horaire
        </Button>
      </Group>
      <ShiftTable />
      <Modal
        fullScreen={smallScreen}
        title="Ajouter un horaire"
        opened={addShiftOpened}
        onClose={() => setAddShiftOpened(false)}
      >
        <AddShiftForm toggleModal={setAddShiftOpened} />
      </Modal>
    </MainBackground>
  );
};
