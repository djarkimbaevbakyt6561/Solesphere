import clsx from 'clsx';
import { FC } from 'react';
import { getTotalCount } from 'entities/cartProduct/model/selectors';
import { BasketIcon, UserIcon } from 'shared/assets/icons';
import { useAppSelector } from 'shared/lib/store';
import { NavLink } from 'shared/ui';
import classes from './NavBar.module.scss';

interface NavBarProps {
   className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
   const count = useAppSelector(getTotalCount);

   return (
      <nav className={clsx(className, classes.nav_container)}>
         <NavLink
            className={classes.nav_item}
            Icon={BasketIcon}
            count={count}
            to="/cart"
         >
            Cart
         </NavLink>
         <NavLink className={classes.nav_item} Icon={UserIcon} to="/sign-in">
            Sign In
         </NavLink>
      </nav>
   );
};
