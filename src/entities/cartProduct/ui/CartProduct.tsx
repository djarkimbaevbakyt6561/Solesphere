import { FC, useState } from 'react';
import { CrossIcon } from 'shared/assets/icons';
import { IProductCard } from 'shared/consts';
import { Button } from 'shared/ui';
import classes from './CartProduct.module.scss';

interface CartProductProps extends IProductCard {
   className?: string;
}

export const CartProduct: FC<CartProductProps> = ({
   title,
   image,
   description,
   price,
}) => {
   const [count, setCount] = useState(1);
   return (
      <div className={classes.cartProduct_main__container}>
         <img alt={title} src={image} />
         <div className={classes.cartProduct_title__container}>
            <p>{title}</p>
            <p className={classes.cartProduct_description}>{description}</p>
            <div className={classes.cartProduct_button__container}>
               <Button
                  theme="transparent-blue"
                  className={classes.cartProduct_button}
                  onClick={() => setCount(count + 1)}
               >
                  +
               </Button>
               {count}
               <Button
                  theme="transparent-blue"
                  className={classes.cartProduct_button}
                  onClick={() => setCount(count - 1)}
               >
                  -
               </Button>
            </div>
         </div>
         <p className={classes.cartProduct_price}>{price.toLocaleString()} c</p>
         <div className={classes.cartProduct_delete_button__container}>
            <button className={classes.cartProduct_delete_button}>
               <CrossIcon />
            </button>
         </div>
      </div>
   );
};
