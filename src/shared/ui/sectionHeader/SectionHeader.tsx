import clsx from 'clsx';
import { FC } from 'react';
import classes from './SectionHeader.module.scss';

interface SectionHeaderProps {
   title: string;
   count: number;
   className?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
   title,
   count,
   className,
}) => {
   return (
      <div className={clsx(classes.sectionHeader_main__container, className)}>
         <p className={classes.sectionHeader_title}>{title}</p>
         <p className={classes.sectionHeader_count}>
            Total count: {count ?? 0}
         </p>
      </div>
   );
};
