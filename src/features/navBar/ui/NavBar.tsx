import clsx from 'clsx';
import { FC } from 'react';
import { BasketIcon, UserIcon } from 'shared/assets/icons';
import { NavLink } from 'shared/ui';
import classes from './NavBar.module.scss';

interface NavBarProps {
   className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
   //    const navLinkOptions = [
   //       {
   //          id: 1,
   //          Icon: HeartIcon,
   //          title: 'Избранные',
   //          to: '/favorite',
   //       },
   //       {
   //          id: 1,
   //          Icon: HeartIcon,
   //          title: 'Избранные',
   //          to: '/favorite',
   //       },
   //       {
   //          id: 1,
   //          Icon: HeartIcon,
   //          title: 'Избранные',
   //          to: '/favorite',
   //       },
   //       {
   //          id: 1,
   //          Icon: HeartIcon,
   //          title: 'Избранные',
   //          to: '/favorite',
   //       },
   //    ];
   return (
      <nav className={clsx(className, classes.nav_container)}>
         <NavLink className={classes.nav_item} Icon={BasketIcon} to="/basket">
            Cart
         </NavLink>
         <NavLink className={classes.nav_item} Icon={UserIcon} to="/sign-in">
            Sign In
         </NavLink>
      </nav>
   );
};
