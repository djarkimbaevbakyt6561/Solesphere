import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IShoesCard } from 'entities/shoes';
import classes from './DropdownSearchItem.module.scss';

export const DropdownSearchItem: FC<IShoesCard> = ({
   id,
   title,
   discount,
   price,
   image,
   sizes,
}) => {
   const priceWithDiscount = price - (price / 100) * discount;

   return (
      <Link className={classes.dropdown__item} to={`/shoes/details/${id}`}>
         <img src={image} alt={title} />
         <div className={classes.dropdown_title__container}>
            <p>{title}</p>
            <ul>
               {sizes.map(el => {
                  return <li key={el.id}>{el.size}</li>;
               })}
            </ul>
         </div>
         <div className={classes.dropdown_price_container}>
            <p className={classes.dropdown_price_with_discount}>
               {priceWithDiscount.toLocaleString()}{' '}
               <span className={classes.dropdown_price_span}>c</span>
            </p>
            <p className={classes.dropdown_price_without_discount}>
               {price.toLocaleString()} c
            </p>
         </div>
      </Link>
   );
};
