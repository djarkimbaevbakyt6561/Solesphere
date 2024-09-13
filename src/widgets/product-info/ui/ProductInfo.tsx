import { FC } from 'react';
import { toast } from 'react-toastify';
import { cartActions, getCartItems } from 'entities/cartProduct';
import { BasketIcon } from 'shared/assets/icons';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { Button } from 'shared/ui';
import classes from './ProductInfo.module.scss';

interface ProductInfoProps {
   product: ProductNameSpace.Product | undefined;
}

export const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
   const cartItems = useAppSelector(getCartItems);
   const dispatch = useAppDispatch();
   const productInCard = cartItems.find(el => el.id === product?.id);

   const addToCartHandler = () => {
      const isProductInCart = cartItems.some(el => el.id === product?.id);
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
      if (product) {
         dispatch(
            cartActions.addToCart({
               ...product,
               count: 1,
            }),
         );
      }

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
      <div className={classes.productInfo__container}>
         <p className={classes.productInfo_title}>{product?.title}</p>
         <p className={classes.productInfo_price}>{product?.price} $</p>
         {productInCard ? (
            <div className={classes.productInfo_button__container}>
               <Button
                  theme="transparent-blue"
                  className={classes.productInfo_button}
                  onClick={() => {
                     if (product) {
                        dispatch(
                           cartActions.incrementOrDecrementCount({
                              incOrDec: '+',
                              id: product.id,
                           }),
                        );
                     }
                  }}
               >
                  +
               </Button>
               {productInCard.count}
               <Button
                  theme="transparent-blue"
                  className={classes.productInfo_button}
                  disabled={productInCard.count < 2}
                  onClick={() => {
                     if (product) {
                        dispatch(
                           cartActions.incrementOrDecrementCount({
                              incOrDec: '-',
                              id: product.id,
                           }),
                        );
                     }
                  }}
               >
                  -
               </Button>
            </div>
         ) : (
            <Button
               className={classes.productInfo_add_to_basket_button}
               Icon={BasketIcon}
               theme="transparent-gray"
               onClick={addToCartHandler}
            >
               Add to Cart
            </Button>
         )}

         <hr />
         <div className={classes.productInfo_description__container}>
            <p className={classes.productInfo_description_title}>Description</p>
            <p className={classes.productInfo_description}>
               {product?.description}
            </p>
         </div>
      </div>
   );
};
