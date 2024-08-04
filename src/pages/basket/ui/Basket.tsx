import clsx from 'clsx';
import { CartProduct } from 'entities/cartProduct';
import { SectionHeader } from 'shared/ui';
import classes from './Basket.module.scss';

const Basket = () => {
   const total = 1000;
   return (
      <div className={clsx(classes.basket__container, '_container')}>
         <div>
            <SectionHeader title="Your products" count={3} />
            <div className={classes.basket_total_cost__container}>
               <p>Total cost:</p>
               <p className={classes.basket_total_cost}>{total} с</p>
            </div>
            <ul>
               <li>
                  <CartProduct
                     id={1}
                     description={'alsdjslafskaldfjsalfksd'}
                     image="https://cdn.zenden.cloud/j4jx0hVNW9jrCIgbPDIrgC7O7mnxjKgaTGXFSw2EoWg/resize:fit:1472:1472:false:false:ce:0:0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay9jOTgvYzk4MmYwYzA1NjBiYmQ5ZGExYzJhNmQ5NzMxOWRjN2UuanBn.jpg"
                     price={300}
                     title="Hi"
                  />
               </li>
               <li>
                  <CartProduct
                     id={1}
                     description={'alsdjslafskaldfjsalfksd'}
                     image="https://cdn.zenden.cloud/j4jx0hVNW9jrCIgbPDIrgC7O7mnxjKgaTGXFSw2EoWg/resize:fit:1472:1472:false:false:ce:0:0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay9jOTgvYzk4MmYwYzA1NjBiYmQ5ZGExYzJhNmQ5NzMxOWRjN2UuanBn.jpg"
                     price={300}
                     title="Hi"
                  />
               </li>
            </ul>
         </div>
      </div>
   );
};
export default Basket;
