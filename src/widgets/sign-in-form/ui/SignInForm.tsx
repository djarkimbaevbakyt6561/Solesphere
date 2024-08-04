import { FormProvider, useForm } from 'react-hook-form';
import { Button, Input } from 'shared/ui';
import classes from './SignInForm.module.scss';

type FormValues = {
   email: string;
   password: string;
};

export const SignInForm = () => {
   const methods = useForm<FormValues>({
      mode: 'onChange',
      defaultValues: {
         email: '',
         password: '',
      },
   });

   const onSubmit = (data: FormValues) => {
      console.log(data);
   };

   return (
      <FormProvider {...methods}>
         <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className={classes.signIn_form}
         >
            <Input
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
            <Input
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
            <Button className={classes.signIn_form_button}>Sign In</Button>
         </form>
      </FormProvider>
   );
};
