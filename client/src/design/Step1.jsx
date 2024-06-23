import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step1 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
        <h2 className="text-2xl mb-4">Personal Information</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
    </div>
  );
};

export default Step1;