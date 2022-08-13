import { Button, Group, Modal } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons';
import { useState } from 'react';
import { MainBackground } from '../../components/MainBackground/MainBackground';
import { AddShiftForm } from './components/AddShiftForm/AddShiftForm';

export const Shifts = () => {
  const [addShiftOpened, setAddShiftOpened] = useState(false);
  const smallScreen = useMediaQuery('(max-width: 576px)');
  return (
    <MainBackground>
      <Group position="right">
        <Button
          fullWidth={smallScreen}
          onClick={() => setAddShiftOpened(true)}
          leftIcon={<IconPlus />}
        >
          Ajouter un horaire
        </Button>
      </Group>
      <Modal
        fullScreen={smallScreen}
        title="Ajouter un horaire"
        opened={addShiftOpened}
        onClose={() => setAddShiftOpened(false)}
      >
        <AddShiftForm />
      </Modal>
    </MainBackground>
  );
};
