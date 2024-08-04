import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { CatalogNavBar } from 'features/catalog';
import { NavBar } from 'features/navBar';
import { Search } from 'features/search';
import { BurgerIcon } from 'shared/assets/icons';
import logo from 'shared/assets/images/logo.png';
import { SideBar } from 'shared/ui';
import classes from './Header.module.scss';

export const Header = () => {
   return (
      <header className={clsx(classes.header, '_container')}>
         <div className={classes.header_inner__container}>
            <NavLink to="/" className={classes.logo__container}>
               <img src={logo} alt="logo" />
               <h2>Solesphere</h2>
            </NavLink>
            <NavBar />
         </div>
         <div className={classes.header_inner__container}>
            <div>
               <CatalogNavBar
                  className={classes.header_catalog_without_burger}
               />
               <SideBar
                  openButton={
                     <button className={classes.header_catalog__container}>
                        <BurgerIcon width={24} height={24} />
                        <span>Catalog</span>
                     </button>
                  }
                  title="Каталог"
                  className={classes.header_side_bar}
                  defaultWidth={'270px'}
                  height={'300px'}
               >
                  <CatalogNavBar
                     className={classes.header_catalog_with_burger}
                  />
               </SideBar>
            </div>

            <Search className={classes.header__search} />
         </div>
      </header>
   );
};
