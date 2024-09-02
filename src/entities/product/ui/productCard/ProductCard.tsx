import { FC } from 'react';
import { IProductCard } from 'shared/consts';
import classes from './ProductCard.module.scss';

export const ProductCard: FC<IProductCard> = ({ id, title, price, image }) => {
   return (
      <div className={classes.product_container}>
         <img src={image} alt={title} />
         <p className={classes.product_title}>Кроссовки женские Pulse</p>
         <div className={classes.product_price_container}>
            <p className={classes.product_price_without_discount}>
               {price.toLocaleString()} c
            </p>
         </div>
      </div>
   );
};
