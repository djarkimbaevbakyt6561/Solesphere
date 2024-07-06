import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SignInForm } from 'widgets/sign-in-form';
import classes from './SignIn.module.scss';

interface SignInProps {
   readonly className?: string;
}

const SignIn: FC<SignInProps> = ({ className }) => {
   return (
      <div className={clsx(classes.sign__container, '_container', className)}>
         <p className={classes.sign__title}>Войти</p>
         <SignInForm />
         <p className={classes.sign_reg__title}>
            У вас еще неть аккаунта?
            <Link to="/sign-up"> Зарегестрируйтесь</Link>
         </p>
      </div>
   );
};

export default SignIn;
