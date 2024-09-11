import { FC } from 'react';
import { cartActions, CartProduct, ICartProduct } from 'entities/cartProduct';
import { CrossIcon } from 'shared/assets/icons';
import { useAppDispatch } from 'shared/lib/store';
import { Button } from 'shared/ui';
import classes from './FeaturedCartProduct.module.scss';

interface CartProductProps extends ICartProduct {
   className?: string;
}

export const FeaturedCartProduct: FC<CartProductProps> = ({
   id,
   title,
   image,
   description,
   price,
   count,
}) => {
   const dispatch = useAppDispatch();
   return (
      <CartProduct
         id={id}
         title={title}
         image={image}
         description={description}
         price={price}
         countButtons={
            <div className={classes.cartProduct_button__container}>
               <Button
                  theme="transparent-blue"
                  className={classes.cartProduct_button}
                  onClick={() =>
                     dispatch(
                        cartActions.incrementOrDecrementCount({
                           incOrDec: '+',
                           id,
                        }),
                     )
                  }
               >
                  +
               </Button>
               {count}
               <Button
                  theme="transparent-blue"
                  className={classes.cartProduct_button}
                  disabled={count < 2}
                  onClick={() =>
                     dispatch(
                        cartActions.incrementOrDecrementCount({
                           incOrDec: '-',
                           id,
                        }),
                     )
                  }
               >
                  -
               </Button>
            </div>
         }
         deleteButton={
            <div className={classes.cartProduct_delete_button__container}>
               <button
                  className={classes.cartProduct_delete_button}
                  onClick={() => dispatch(cartActions.deleteProduct(id))}
               >
                  <CrossIcon />
               </button>
            </div>
         }
      />
   );
};
