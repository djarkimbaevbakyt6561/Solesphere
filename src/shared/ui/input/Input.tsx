import clsx from 'clsx';
import { FC, InputHTMLAttributes, useState } from 'react';
import { VisibilityIcon, VisibilityOffIcon } from 'shared/assets/icons';
import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   error?: string;
   label?: string;
}
export const Input: FC<InputProps> = ({
   error,
   onChange,
   value,
   label,
   placeholder,
   type,
   ...props
}) => {
   const [showPassword, setShowPassword] = useState<boolean>(false);

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };
   const errorClass = error && classes.error;

   let inputRender = (
      <input
         className={clsx(classes.input, errorClass)}
         placeholder={placeholder}
         type={type}
         onChange={onChange}
         value={value}
         {...props}
      />
   );

   if (type === 'password') {
      inputRender = (
         <div className={classes.password_container}>
            <input
               className={clsx(classes.input, errorClass)}
               placeholder={placeholder}
               type={showPassword ? 'text' : type}
               onChange={onChange}
               value={value}
               {...props}
            />
            <button onClick={toggleShowPassword}>
               {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
         </div>
      );
   }
   return (
      <label className={classes.label}>
         {label}
         {inputRender}
         {error && <p className={classes.error_title}>{error}</p>}
      </label>
   );
};
