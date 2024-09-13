import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProductCard } from 'shared/consts';
import classes from './DropdownSearchItem.module.scss';

export const DropdownSearchItem: FC<IProductCard> = ({
   id,
   title,
   price,
   image,
   description,
}) => {
   return (
      <Link className={classes.dropdown__item} to={`/product/${id}/details`}>
         <img src={image} alt={title} />
         <div className={classes.dropdown_title__container}>
            <p>{title}</p>
            <p className={classes.dropdown_description}>{description}</p>
         </div>
         <p className={classes.dropdown_price}>{price.toLocaleString()} $</p>
      </Link>
   );
};
