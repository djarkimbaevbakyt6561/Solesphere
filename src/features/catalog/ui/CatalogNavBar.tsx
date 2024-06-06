import { NavLink } from 'react-router-dom';
import { CATALOG_NAVIGATION_CONTENT } from 'shared/consts';
import classes from './CatalogNavBar.module.scss';

export const CatalogNavBar = () => {
   const catalogNavigation = CATALOG_NAVIGATION_CONTENT.map(el => {
      return (
         <li key={el.id}>
            <NavLink className={classes.catalog__nav_link} to={el.to}>
               {el.title}
            </NavLink>
         </li>
      );
   });
   return (
      <nav>
         <ul className={classes.catalog__ul}>{catalogNavigation}</ul>
      </nav>
   );
};
