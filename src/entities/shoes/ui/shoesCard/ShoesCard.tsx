import { FC, ReactNode } from 'react';
import { IShoesCard } from 'entities/shoes';
import classes from './ShoesCard.module.scss';

interface ShoesCardProps extends IShoesCard {
   featureSlot?: ReactNode;
}
export const ShoesCard: FC<ShoesCardProps> = ({
   id,
   sizes,
   title,
   discount,
   price,
   image,
   featureSlot,
}) => {
   const priceWithDiscount = price - (price / 100) * discount;
   return (
      <div className={classes.shoes_container}>
         <div className={classes.shoes_favorite_container}>
            <p className={classes.shoes_favorite_container_discount}>
               {discount}%
            </p>
            {featureSlot}
         </div>
         <img src={image} alt={title} />
         <p className={classes.shoes_title}>Кроссовки женские Pulse</p>
         <ul className={classes.shoes_ul}>
            {sizes.map(el => {
               return <li key={el.id}>{el.size}</li>;
            })}
         </ul>
         <div className={classes.shoes_price_container}>
            <p className={classes.shoes_price_with_discount}>
               {priceWithDiscount.toLocaleString()}{' '}
               <span className={classes.shoes_price_span}>c</span>
            </p>
            <p className={classes.shoes_price_without_discount}>
               {price.toLocaleString()} c
            </p>
         </div>
      </div>
   );
};
