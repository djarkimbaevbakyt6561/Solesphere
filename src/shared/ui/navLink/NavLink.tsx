import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavLink.module.scss';

interface NavLinkProps {
   readonly to: string;
   readonly children: string;
   readonly Icon: FC<React.SVGProps<SVGSVGElement>>;
   readonly className?: string;
}

export const NavLink: FC<NavLinkProps> = ({
   to,
   children,
   Icon,
   className,
}) => {
   return (
      <Link className={clsx(classes.link, className)} to={to}>
         <Icon />
         <p>{children}</p>
      </Link>
   );
};
