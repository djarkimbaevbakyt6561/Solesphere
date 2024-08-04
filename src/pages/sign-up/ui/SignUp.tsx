import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SignUpForm } from 'widgets/sign-up-form';
import classes from './SignUp.module.scss';

interface SignUpProps {
   readonly className?: string;
}

const SignUp: FC<SignUpProps> = ({ className }) => {
   return (
      <div className={clsx(classes.sign__container, '_container', className)}>
         <p className={classes.sign__title}>Sign Up</p>
         <SignUpForm />
         <p className={classes.sign_reg__title}>
            Already have an account? <Link to="/sign-in">Sign In</Link>
         </p>
      </div>
   );
};

export default SignUp;
