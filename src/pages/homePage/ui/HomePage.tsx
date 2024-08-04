import { ProductCarousel } from 'widgets/product-carousel';
import classes from './HomePage.module.scss';

export const HomePage = () => {
   return (
      <>
         <ProductCarousel
            title="Одежда"
            className={classes.homePage_without_margin}
         />
         <ProductCarousel title="Электроника" />
         <ProductCarousel title="Обувь" />
      </>
   );
};
