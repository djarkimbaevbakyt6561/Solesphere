import { FeaturedCartProduct } from 'features/cartProduct';
import { getCartItems } from 'entities/cartProduct';
import { useAppSelector } from 'shared/lib/store';
import classes from './CartProducts.module.scss';

export const CartProductsWidget = () => {
   const cartItems = useAppSelector(getCartItems);

   return cartItems.length ? (
      <ul>
         {cartItems.map(el => {
            const cleanedImageUrl = el.images[0].replace(/[[\]" ]/g, '');

            return (
               <li key={el.id}>
                  <FeaturedCartProduct
                     id={el.id}
                     title={el.title}
                     description={el.description}
                     count={el.count}
                     image={cleanedImageUrl}
                     price={el.price}
                  />
               </li>
            );
         })}
      </ul>
   ) : (
      <div className={classes.cartProducts_not_found}>
         The cart is empty. Add products that interest you here.
      </div>
   );
};
