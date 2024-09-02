import { FC, InputHTMLAttributes } from 'react';
import classes from './Input.module.scss';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
   className?: string;
}

export const Input: FC<InputProps> = ({
   value,
   onChange,
   onBlur,
   onFocus,
   Icon,
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
               disabled={value != undefined && value.toString().length < 1}
            >
               <Icon
                  color={
                     value != undefined && value.toString().length >= 1
                        ? 'var(--text-primary) !important'
                        : ''
                  }
               />
            </button>
         </>
      );
   }
   return (
      <label className={clsx(classes.label, className)}>{inputRender}</label>
   );
};
