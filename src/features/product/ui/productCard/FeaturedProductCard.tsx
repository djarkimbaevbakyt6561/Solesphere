import { FC } from 'react';
import { ProductCard } from 'entities/product';
import { BasketIcon } from 'shared/assets/icons';
import { IProductCard } from 'shared/consts';
import { Button } from 'shared/ui';
import classes from './FeaturedProductCard.module.scss';

export const FeaturedProductCard: FC<IProductCard> = ({
   id,
   title,
   image,
   description,
   price,
}) => {
   return (
      <div className={classes.container}>
         <ProductCard
            id={id}
            title={title}
            description={description}
            image={image}
            price={price}
         />
         <Button
            className={classes.add_to_basket_button}
            Icon={BasketIcon}
            theme="transparent-gray"
         >
            Add to Cart
         </Button>
      </div>
   );
};
