import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step3 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
        <h2 className="text-2xl mb-4">What features do you find most useful or valuable in the product?</h2>
      <div className="mb-4">
        <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback</label>
        <textarea
          id="feedback"
          {...register('feedback')}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        ></textarea>
        {errors.feedback && <p className="text-red-500">{errors.feedback.message}</p>}
      </div>
    </div>
  );
};

export default Step3;