import clsx from 'clsx';
import { FC } from 'react';
import classes from './Dropdown.module.scss';

interface DropdownProps {
   readonly labelElement: JSX.Element;
   readonly isOpen?: boolean;
   readonly content?: JSX.Element | JSX.Element[];
   readonly className?: string;
}
export const Dropdown: FC<DropdownProps> = ({
   labelElement,
   isOpen,
   content,
   className,
}) => {
   const open = isOpen ? classes.dropdown__open : classes.dropdown__close;
   return (
      <div className={clsx(classes.dropdown, className)}>
         <div className={classes.dropdown__label}>{labelElement}</div>
         <div className={clsx(classes.dropdown__content, open)}>{content}</div>
      </div>
   );
};
