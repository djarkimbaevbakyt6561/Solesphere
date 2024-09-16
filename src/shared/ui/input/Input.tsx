import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
   className?: string;
   lengthWhenDisabled?: number;
}

export const Input: FC<InputProps> = ({
   value,
   onChange,
   onBlur,
   onFocus,
   Icon,
   lengthWhenDisabled,
   className,
   ...props
}) => {
   let inputRender = (
      <input
         className={classes.input}
         onChange={onChange}
         value={value}
         onFocus={onFocus}
         onBlur={onBlur}
         {...props}
      />
   );
   if (Icon) {
      inputRender = (
         <>
            <input
               className={classes.input}
               onChange={onChange}
               value={value}
               onFocus={onFocus}
               onBlur={onBlur}
               {...props}
            />
            <button
               disabled={
                  lengthWhenDisabled
                     ? value != undefined &&
                       value.toString().length < lengthWhenDisabled
                     : false
               }
            >
               <Icon />
            </button>
         </>
      );
   }
   return (
      <label className={clsx(classes.label, className)}>{inputRender}</label>
   );
};
