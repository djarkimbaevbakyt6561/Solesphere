import {
   FeaturedProductCard,
   FeaturedProductCardSkeleton,
} from 'features/product';
import React, { FC } from 'react';
import { IProductCard } from 'shared/consts';
import classes from './CatalogProducts.module.scss';

interface CatalogProductsProps {
   products: IProductCard[];
}

export const CatalogProducts: FC<CatalogProductsProps> = ({ products }) => {
   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
   const isLoading = true;
   const renderProducts = (items: number[]) => {
      if (isLoading) {
         return items?.map(item => (
            <FeaturedProductCardSkeleton
               key={item}
               className={classes.catalogProducts_product_card_skeleton}
            />
         ));
      }

      return items?.map(item => (
         <FeaturedProductCard
            key={item}
            id={1}
            description={'alsdjslafskaldfjsalfksd'}
            className={classes.catalogProducts_product_card}
            image="https://cdn.zenden.cloud/j4jx0hVNW9jrCIgbPDIrgC7O7mnxjKgaTGXFSw2EoWg/resize:fit:1472:1472:false:false:ce:0:0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay9jOTgvYzk4MmYwYzA1NjBiYmQ5ZGExYzJhNmQ5NzMxOWRjN2UuanBn.jpg"
            price={300}
            title="Hi"
         />
      ));
   };
   return (
      <div className={classes.catalogProducts__container}>
         {renderProducts(array)}
      </div>
   );
};
