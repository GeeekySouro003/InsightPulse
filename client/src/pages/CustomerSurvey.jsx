import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Step1 from '../design/Step1';
import Step2 from '../design/Step2';
import Step3 from '../design/Step3';
import Confirmation from '../design/Confirmation';
import { Link } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Confirmation'];

const validationSchemas = [
  yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
  }),
  yup.object().shape({
    feedback: yup.string().required('Feedback is required'),
  }),
  yup.object().shape({
    rating: yup.number().required('Rating is required').min(1).max(5),
  }),
];

const CustomerSurvey = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm({
    resolver: yupResolver(validationSchemas[currentStep]),
  });

  const onSubmit = (data) => {
    if (currentStep === steps.length - 1) {
      console.log('Form submitted successfully:', data);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <FormProvider {...methods}>
         <Link to="/forms" className="absolute top-0 right-0 ">
        <MdOutlineClose size={32}/>
        </Link>
      <form onSubmit={methods.handleSubmit(onSubmit)} className=" bg-tertiary max-w-lg mx-auto mt-10 p-5 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-5">{steps[currentStep]}</h2>
        {currentStep === 0 && <Step1 />}
        {currentStep === 1 && <Step2 />}
        {currentStep === 2 && <Step3 />}
        {currentStep === 3 && <Confirmation />}
        <div className="flex justify-between mt-5">
          {currentStep > 0 && (
            <button type="button" onClick={handleBack} className="px-6 py-2 font-medium bg-secondary text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Back
            </button>
          )}
          <button type="submit" className="px-6 py-2 font-medium bg-secondary text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
            {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CustomerSurvey;