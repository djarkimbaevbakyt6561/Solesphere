import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { CATALOG_NAVIGATION_CONTENT } from 'shared/consts';
import classes from './CatalogNavBar.module.scss';

interface CatalogNavBarProps {
   readonly className?: string;
}

export const CatalogNavBar: FC<CatalogNavBarProps> = ({ className }) => {
   const catalogNavigation = CATALOG_NAVIGATION_CONTENT.map(el => {
      return (
         <li key={el.id}>
            <NavLink
               className={classes.catalog__nav_link}
               to={`catalog?categoryId=${el.id}`}
            >
               {el.title}
            </NavLink>
         </li>
      );
   });
   return (
      <nav className={className}>
         <ul className={classes.catalog__ul}>{catalogNavigation}</ul>
      </nav>
   );
};
