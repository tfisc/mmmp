export const postShift = async (shift: any) => {
  const result = await fetch('http://localhost:3333/api/v1/shifts/create', {
    body: JSON.stringify(shift),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  return result.json();
};
