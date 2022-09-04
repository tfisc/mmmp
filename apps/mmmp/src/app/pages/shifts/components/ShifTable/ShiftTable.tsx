// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Table } from '@mantine/core';
import { getShifts } from 'apps/mmmp/src/app/backend/shifts/getShifts';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';

export const ShiftTable = () => {
  const { data } = useQuery('shifts', getShifts);
  console.log(data);

  const rows = data?.map((shift) => (
    <tr key={shift.id}>
      <td>{shift.day}</td>
      <td>{dayjs(shift.start).format('HH:mm')}</td>
      <td>{dayjs(shift.end).format('HH:mm')}</td>
    </tr>
  ));

  return (
    <Table bgcolor="white" striped highlightOnHover>
      <thead>
        <tr>
          <th>Jour</th>
          <th>Heure de début</th>
          <th>Heure de fin</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
