import { FC, useState } from 'react';
import { ShoesCard, IShoesCard } from 'entities/shoes';
import { BasketIcon, HeartIcon } from 'shared/assets/icons';
import { Button } from 'shared/ui';
import classes from './FeaturedShoesCard.module.scss';

export const FeaturedShoesCard: FC<IShoesCard> = ({
   id,
   title,
   image,
   price,
   discount,
   sizes,
}) => {
   const [ariaPressed, setAriaPressed] = useState(false);
   return (
      <div className={classes.container}>
         <ShoesCard
            id={id}
            title={title}
            image={image}
            sizes={sizes}
            featureSlot={
               <button
                  className={classes.heart_button}
                  aria-pressed={ariaPressed}
               >
                  <HeartIcon
                     className={classes.heart__icon}
                     onClick={() => setAriaPressed(!ariaPressed)}
                  />
               </button>
            }
            discount={discount}
            price={price}
         />
         <Button
            className={classes.add_to_basket_button}
            Icon={BasketIcon}
            theme="transparent-gray"
         >
            Добавить в корзину
         </Button>
      </div>
   );
};
