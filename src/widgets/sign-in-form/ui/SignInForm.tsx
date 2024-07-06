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
                  required: 'Поле обязательно для заполнения',
                  validate: {
                     symbolInclude: value =>
                        !/[^\w\-@.]/gi.test(value) ||
                        'E-mail может содержать латинские буквы, цифры, дефис, нижнее подчеркивание',
                     format: value =>
                        /\S+@\S+\.\S{2,}/.test(value) ||
                        'Допустимый формат почты: test@test.com',
                  },
               }}
               type="email"
               label="Email"
               placeholder="Введите email"
            />
            <Input
               name="password"
               validation={{
                  required: 'Поле обязательно для заполнения',
                  validate: {
                     length: value =>
                        value.length > 8 ||
                        'Пароль должен быть длиннее 8 символов',
                     uppercase: value =>
                        /[A-Z]/.test(value) ||
                        'Пароль должен содержать хотя бы одну заглавную букву',
                     lowercase: value =>
                        /[a-z]/.test(value) ||
                        'Пароль должен содержать хотя бы одну строчную букву',
                     digit: value =>
                        /\d/.test(value) ||
                        'Пароль должен содержать хотя бы одну цифру',
                  },
               }}
               label="Пароль"
               type="password"
               placeholder="Введите пароль"
            />
            <Button className={classes.signIn_form_button}>Войти</Button>
         </form>
      </FormProvider>
   );
};
