import { ShoesCarousel } from 'widgets/shoes-carousel/ui/ShoesCarousel';
import classes from './HomePage.module.scss';

export const HomePage = () => {
   return (
      <>
         <ShoesCarousel
            title="Мужские"
            className={classes.homePage_without_margin}
         />
         <ShoesCarousel title="Женские" />
         <ShoesCarousel title="Детские" />
      </>
   );
};
