import clsx from 'clsx';
import { FC } from 'react';
import { toast } from 'react-toastify';
import { cartActions, getCartItems } from 'entities/cartProduct';
import { ProductCard } from 'entities/product';
import { BasketIcon } from 'shared/assets/icons';
import { IProductCard } from 'shared/consts';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { Button } from 'shared/ui';
import classes from './FeaturedProductCard.module.scss';
import 'react-toastify/dist/ReactToastify.css';

interface FeaturedProductCardProps extends IProductCard {
   className?: string;
}

export const FeaturedProductCard: FC<FeaturedProductCardProps> = ({
   id,
   title,
   image,
   description,
   className,
   price,
}) => {
   const cartItems = useAppSelector(getCartItems);
   const dispatch = useAppDispatch();

   const addToCartHandler = () => {
      const isProductInCart = cartItems.some(el => el.id === id);

      if (isProductInCart) {
         toast.error('Product already in cart!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'light',
         });
         return;
      }

      dispatch(
         cartActions.addToCart({
            id,
            title,
            image,
            description,
            price,
            count: 1,
         }),
      );
      toast.success('Product succesfully added to cart!', {
         position: 'top-right',
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: 'light',
      });
   };
   return (
      <>
         <div className={clsx(className, classes.container)}>
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
               onClick={addToCartHandler}
            >
               Add to Cart
            </Button>
         </div>
      </>
   );
};
