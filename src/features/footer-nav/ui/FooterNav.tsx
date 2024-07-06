import { FC } from 'react';
import classes from './FooterNav.module.scss';

interface FooterNavProps {
   title: string;
   navContent: JSX.Element[];
}

export const FooterNav: FC<FooterNavProps> = ({ title, navContent }) => {
   return (
      <div className={classes.footer_nav__container}>
         <p className={classes.footer_nav__title}>{title}</p>
         <nav>
            <ul className={classes.footer_nav__ul}>{navContent}</ul>
         </nav>
      </div>
   );
};
