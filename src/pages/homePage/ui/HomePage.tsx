import { ProductCarousel } from 'widgets/product-carousel';
import { CATALOG_NAVIGATION_CONTENT } from 'shared/consts';

export const HomePage = () => {
   return CATALOG_NAVIGATION_CONTENT.map((el, index) => {
      if (index > 2) {
         return;
      }
      return <ProductCarousel key={el.id} title={el.title} id={el.id} />;
   });
};
