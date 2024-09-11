import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { CatalogProducts } from 'widgets/catalog-products';
import { FilterPanel } from 'widgets/filter-panel';
import { SystemFilteringIcon } from 'shared/assets/icons';
import { Button, SideBar } from 'shared/ui';
import classes from './CatalogPage.module.scss';

const CatalogPage = () => {
   const [count, setCount] = useState<number | undefined>(0);
   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 838);

   useEffect(() => {
      const handleResize = () => {
         setIsMobileView(window.innerWidth <= 838);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <div className={clsx(classes.catalogPage__container, '_container')}>
         <ToastContainer />

         <div className={classes.catalogPage_total_books__container}>
            <p>Found {count} books </p>
            {isMobileView && (
               <SideBar
                  openButton={
                     <Button
                        className={classes.catalogPage_sideBar__button}
                        Icon={SystemFilteringIcon}
                        theme="transparent-gray"
                     >
                        Filters
                     </Button>
                  }
                  title="Filters"
                  className={classes.catalogPage_sideBar}
                  defaultWidth={'266px'}
                  height={'520px'}
               >
                  <FilterPanel />
               </SideBar>
            )}
         </div>
         <div className={classes.catalogPage_main__container}>
            {!isMobileView && (
               <FilterPanel className={classes.catalogPage_filterPanel} />
            )}
            <CatalogProducts setCount={num => setCount(num)} />
         </div>
      </div>
   );
};

export default CatalogPage;
