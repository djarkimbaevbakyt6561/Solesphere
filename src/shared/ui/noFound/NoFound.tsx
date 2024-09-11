import clsx from 'clsx';
import { FC } from 'react';
import classes from './NoFound.module.scss';

interface NoFoundProps {
   className?: string;
}

export const NoFound: FC<NoFoundProps> = ({ className }) => {
   return (
      <div className={clsx(classes.noFound__container, className)}>
         <img src="https://static.thenounproject.com/png/4440881-200.png" />
         <p>No Product Found</p>
      </div>
   );
};
