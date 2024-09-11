import clsx from 'clsx';
import { CartProductsWidget } from 'widgets/cart-products';
import {
   getTotalCost,
   getTotalCount,
} from 'entities/cartProduct/model/selectors';
import { useAppSelector } from 'shared/lib/store';
import { SectionHeader } from 'shared/ui';
import classes from './Cart.module.scss';

const Cart = () => {
   const total = useAppSelector(getTotalCost);
   const count = useAppSelector(getTotalCount);

   return (
      <div className={clsx(classes.cart__container, '_container')}>
         <div>
            <SectionHeader title="Your products" count={count} />
            <div className={classes.cart_total_cost__container}>
               <p>Total cost:</p>
               <p className={classes.cart_total_cost}>{total} с</p>
            </div>
            <CartProductsWidget />
         </div>
      </div>
   );
};
export default Cart;
