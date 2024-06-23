import React from 'react';
import { useFormContext } from 'react-hook-form';

const Confirmation = () => {
  const { getValues } = useFormContext();
  const values = getValues();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Confirmation</h2>
      <p><strong>Name:</strong> {values.name}</p>
      <p><strong>Email:</strong> {values.email}</p>
      <p><strong>Feedback:</strong> {values.feedback}</p>
      <p><strong>Rating:</strong> {values.rating}</p>
    </div>
  );
};

export default Confirmation;