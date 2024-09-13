import clsx from 'clsx';
import { FC } from 'react';
import { toast } from 'react-toastify';
import { cartActions, getCartItems } from 'entities/cartProduct';
import { ProductCard } from 'entities/product';
import { BasketIcon } from 'shared/assets/icons';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { Button } from 'shared/ui';
import classes from './FeaturedProductCard.module.scss';
import 'react-toastify/dist/ReactToastify.css';

interface FeaturedProductCardProps extends ProductNameSpace.Product {
   className?: string;
}

export const FeaturedProductCard: FC<FeaturedProductCardProps> = ({
   id,
   title,
   description,
   className,
   price,
   images,
   creationAt,
   updatedAt,
   category,
}) => {
   const cartItems = useAppSelector(getCartItems);
   const dispatch = useAppDispatch();
   const cleanedImageUrl = images[0].replace(/[[\]" ]/g, '');

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
            price,
            description,
            images,
            creationAt,
            updatedAt,
            category,
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
         <div className={clsx(className)}>
            <ProductCard
               id={id}
               title={title}
               description={description}
               image={cleanedImageUrl}
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
