import Logo from '../assets/feedback7.png';


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../components/ui/button';
import Dropdownlist from '@/components/Dropdownlist';
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const formSchema = z
  .object({
    firstName: z.string().min(1, {
      message: 'Please enter your first name',
    }),
    lastName: z.string().min(1, {
      message: 'Please enter your last name',
    }),
    email: z.string().email('Enter a valid email address.').min(1, {
      message: 'Email is required.',
    }),
    phone: z.string().min(11, {
      message: 'Phone number should be 11digits',
    }),
    password: z
      .string()
      .min(1, { message: 'Must have at least 1 character' })
      .regex(passwordValidation, {
        message: 'Your password is not valid',
      }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Must have at least 1 character' })
      .regex(passwordValidation, {
        message: 'Your password is not valid',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // path of error
  });

const CreateAccount = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data) => {
    navigate('/feedback')
    console.log(data);
  };

  return (
  
      <div className="w-5/6 lg:w-[60%] min-h-screen pt-5 p-10 mx-auto hideScrollbar bg-body-tertiary rounded-md ">
        <div>
          <img src={Logo} alt="Logo" className="h-[30px] md:h-[44px] mix-blend-multiply" />
        </div>
        <h1 className="md:text-4xl text-2xl font-medium leading-[40px] mt-8">
          Create an Account
        </h1>
        <p className="mt-px text-base font-normal text-neutral-600">
          Create Account today!
        </p>
        <Form {...form}>
          <form className="mt-10 space-y-1">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">First name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your first name"
                        className="border-neutral-300"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Last name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your last name"
                        className="border-neutral-300"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      className="border-neutral-300"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Phone number</FormLabel>
                <div className='flex gap-2'>
                <Dropdownlist/>
                  <FormControl>
                 
                    <Input
                      placeholder="9034xxxxxx"
                      className="border-neutral-300"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                </div>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">New password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your new password"
                      className="border-neutral-300"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm new password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm your new password"
                      type="password"
                      className="border-neutral-300"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
          <p className="mt-6 text-sm font-normal">
            By clicking on create account below you agree to our
            <Link className="font-semibold text-blue-600">Terms of use</Link>
            {' and '}
            <Link className="font-semibold text-blue-600">
              Privacy policy.
            </Link>
          </p>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            className="w-full h-12 mt-2 bg-blue-600 hover:bg-blue-400"
          >
            Sign Up
          </Button>
          <p className="mt-4 text-sm font-normal text-center">
            Already have an account ?{' '}
            <span className="font-semibold text-blue-600">
              <Link to={'/login'}>Log In</Link>
            </span>
          </p>
        </Form>
      </div>
  
  );
};

export default CreateAccount;