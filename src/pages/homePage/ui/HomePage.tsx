import { ProductCarousel } from 'widgets/product-carousel';
import classes from './HomePage.module.scss';
import { CATALOG_NAVIGATION_CONTENT } from 'shared/consts';

export const HomePage = () => {
   return (
      <>
         {CATALOG_NAVIGATION_CONTENT.map(el => {
            return (
               <ProductCarousel
                  key={el.id}
                  title={el.title}
                  id={el.id}
               />
            );
         })}
      </>
   );
};
