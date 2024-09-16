import clsx from 'clsx';
import { FC } from 'react';
import classes from './IconButton.module.scss';

interface IconButtonProps {
   Icon: React.FC<React.SVGProps<SVGSVGElement>>;
   onClick: () => void;
   className?: string;
}

export const IconButton: FC<IconButtonProps> = ({
   Icon,
   onClick,
   className,
}) => {
   return (
      <button
         className={clsx(classes.iconButton__button, className)}
         onClick={onClick}
      >
         <Icon />
      </button>
   );
};
