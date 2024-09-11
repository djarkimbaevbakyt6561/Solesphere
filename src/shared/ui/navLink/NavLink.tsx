import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavLink.module.scss';

interface NavLinkProps {
   readonly to: string;
   readonly children: string;
   readonly Icon: FC<React.SVGProps<SVGSVGElement>>;
   readonly className?: string;
   count?: number;
}

export const NavLink: FC<NavLinkProps> = ({
   to,
   children,
   Icon,
   className,
   count,
}) => {
   const countClass = count && count > 0 ? classes.link__count_open : '';

   return (
      <Link className={clsx(classes.link, className)} to={to}>
         <span className={clsx(classes.link__count, countClass)}>{count}</span>
         <Icon />

         <p>{children}</p>
      </Link>
   );
};
