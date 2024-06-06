import clsx from 'clsx';
import { CatalogNavBar } from 'features/catalog';
import { NavBar } from 'features/navBar';
import { Search } from 'features/search';
import logo from 'shared/assets/images/logo.png';
import classes from './Header.module.scss';

export const Header = () => {
   return (
      <header className={clsx(classes.header, '_container')}>
         <div className={classes.header_inner__container}>
            <div className={classes.logo__container}>
               <img src={logo} alt="logo" />
               <h2>Solesphere</h2>
            </div>
            <NavBar className={classes.header__nav} />
         </div>
         <div className={classes.header_inner__container}>
            <CatalogNavBar />
            <Search className={classes.header__search} />
         </div>
      </header>
   );
};
