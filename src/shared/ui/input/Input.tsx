import clsx from 'clsx';
import { FC, InputHTMLAttributes, useState } from 'react';
import {
   FieldValues,
   RegisterOptions,
   useController,
   useFormContext,
} from 'react-hook-form';
import { VisibilityIcon, VisibilityOffIcon } from 'shared/assets/icons';
import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   validation?:
      | Omit<
           RegisterOptions<FieldValues, string>,
           'disabled' | 'setValueAs' | 'valueAsNumber' | 'valueAsDate'
        >
      | undefined;
   name: string;
}
export const Input: FC<InputProps> = ({
   name,
   value,
   label,
   placeholder,
   validation,
   type,
   ...props
}) => {
   const { control } = useFormContext();
   const {
      field,
      fieldState: { error },
   } = useController({ name, control, rules: validation });
   const [showPassword, setShowPassword] = useState<boolean>(false);

   const errorClass = error?.message != null ? classes.error : '';

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   let inputRender = (
      <input
         {...field}
         className={clsx(classes.input, errorClass)}
         placeholder={placeholder}
         type={type}
         value={value}
         {...props}
      />
   );

   if (type === 'password') {
      inputRender = (
         <div className={classes.password_container}>
            <input
               {...field}
               className={clsx(classes.input, errorClass)}
               placeholder={placeholder}
               type={showPassword ? 'text' : type}
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
         {error?.message && (
            <p className={classes.error_title}>{error?.message}</p>
         )}
      </label>
   );
};
