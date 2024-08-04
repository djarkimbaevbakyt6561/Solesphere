import clsx from 'clsx';
import { FC } from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
   readonly children: string;
   readonly className?: string;
   readonly theme?: 'black' | 'transparent-gray' | 'transparent-blue';
   readonly onClick?: () => void;
   readonly disabled?: boolean;
   readonly Icon?: FC<React.SVGProps<SVGSVGElement>>;
}

export const Button: FC<ButtonProps> = ({
   children,
   className,
   disabled,
   theme = 'black',
   onClick,
   Icon,
}) => {
   const buttonTheme = classes['button_theme_' + theme];
   return (
      <button
         disabled={disabled}
         className={clsx(classes.button, buttonTheme, className)}
         onClick={onClick}
      >
         {Icon && <Icon />}
         {children}
      </button>
   );
};
