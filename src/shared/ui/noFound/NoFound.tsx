import clsx from 'clsx';
import { FC } from 'react';
import notFoundImage from 'shared/assets/images/not-found.png';
import classes from './NoFound.module.scss';

interface NoFoundProps {
   className?: string;
}

export const NoFound: FC<NoFoundProps> = ({ className }) => {
   return (
      <div className={clsx(classes.noFound__container, className)}>
         <img src={notFoundImage} alt="Not Found Image" />
         <p>No Product Found</p>
      </div>
   );
};
