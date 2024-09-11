import { FC } from 'react';
import { IProductCard } from 'shared/consts';
import classes from './CartProduct.module.scss';

interface CartProductProps extends IProductCard {
   className?: string;
   countButtons: JSX.Element;
   deleteButton: JSX.Element;
}

export const CartProduct: FC<CartProductProps> = ({
   title,
   image,
   description,
   price,
   countButtons,
   deleteButton,
}) => {
   return (
      <div className={classes.cartProduct_main__container}>
         <img alt={title} src={image} />
         <div className={classes.cartProduct_title__container}>
            <p>{title}</p>
            <p className={classes.cartProduct_description}>{description}</p>
            {countButtons}
         </div>
         <p className={classes.cartProduct_price}>{price.toLocaleString()} c</p>
         {deleteButton}
      </div>
   );
};
