'use client';
import SideImg from '../assets/feedback7.png';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';


export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    navigate('/admin')
    console.log(data);
  };


  return (
    <Form {...form}>
      <form
        onSubmit={() => form.handleSubmit()}
        className="max-w-sm mx-auto mt-5 bg-body-tertiary p-4 space-y-2"
      >
        <div>
          <img src={SideImg} className="h-10 rounded-sm mix-blend-multiply" />
        </div>
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Password</FormLabel>
              <FormControl>
              <Input
                      placeholder="Enter Password"
                      className="border-neutral-300"
                      type={showPassword ? "text" : "password"}
                      {...field}
                      rightIcon={
                        showPassword ? (
                          <Eye
                            className="cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        ) : (
                          <EyeOff
                            className="cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        )
                      }
                    />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="mt-4 text-sm font-normal">
          Forgot password?
          <span className="font-semibold text-violet-600 mx-2 ">
            <Link to={'/create-account'}>Reset password</Link>
          </span>
        </p>
        <Button  onClick={form.handleSubmit(onSubmit)} type="submit">Login</Button>
      </form>
    </Form>
  );
}