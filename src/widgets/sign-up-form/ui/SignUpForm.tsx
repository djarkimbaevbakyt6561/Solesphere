import { FormProvider, useForm } from 'react-hook-form';
import { Button, InputRHF } from 'shared/ui';
import classes from './SignUpForm.module.scss';

type FormValues = {
   name: string;
   email: string;
   password: string;
   confirmPassword: string;
};

export const SignUpForm = () => {
   const methods = useForm<FormValues>({
      mode: 'onChange',
      defaultValues: {
         name: '',
         email: '',
         password: '',
         confirmPassword: '',
      },
   });

   const onSubmit = (data: FormValues) => {
      console.log(data);
   };

   return (
      <FormProvider {...methods}>
         <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className={classes.signUp_form}
         >
            <InputRHF
               name="name"
               validation={{
                  required: 'Field is required',
                  validate: {
                     length: value =>
                        value.length > 1 || 'Minimum length: 2 characters',
                  },
               }}
               type="text"
               label="Name"
               placeholder="Enter your name"
            />
            <InputRHF
               name="email"
               validation={{
                  required: 'Field is required',
                  validate: {
                     symbolInclude: value =>
                        !/[^\w\-@.]/gi.test(value) ||
                        'Email can contain letters, numbers, hyphens, underscores',
                     format: value =>
                        /\S+@\S+\.\S{2,}/.test(value) ||
                        'Valid email format: test@test.com',
                  },
               }}
               type="email"
               label="Email"
               placeholder="Enter email"
            />
            <InputRHF
               name="password"
               validation={{
                  required: 'Field is required',
                  validate: {
                     length: value =>
                        value.length > 8 ||
                        'Password must be longer than 8 characters',
                     uppercase: value =>
                        /[A-Z]/.test(value) ||
                        'Password must contain at least one uppercase letter',
                     lowercase: value =>
                        /[a-z]/.test(value) ||
                        'Password must contain at least one lowercase letter',
                     digit: value =>
                        /\d/.test(value) ||
                        'Password must contain at least one digit',
                  },
               }}
               label="Password"
               type="password"
               placeholder="Enter password"
            />
            <InputRHF
               name="confirmPassword"
               validation={{
                  required: 'Field is required',
                  validate: value => {
                     return (
                        value === methods.watch('password') ||
                        'Passwords do not match'
                     );
                  },
               }}
               label="Confirm Password"
               type="password"
               placeholder="Confirm password"
            />
            <Button className={classes.SignUp_form_button}>Sign Up</Button>
         </form>
      </FormProvider>
   );
};
