import { useState, useEffect, FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
   FeaturedProductCard,
   FeaturedProductCardSkeleton,
} from 'features/product';
import { useGetProductsWithFilterQuery } from 'entities/product/api';
import { Button, NoFound } from 'shared/ui';
import classes from './CatalogProducts.module.scss';

interface CatalogProductsProps {
   setCount: (num: number) => void;
}
export const CatalogProducts: FC<CatalogProductsProps> = ({ setCount }) => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [loading, setLoading] = useState(true);

   const { data, refetch, isFetching } = useGetProductsWithFilterQuery({
      categoryId: searchParams.get('categoryId') ?? undefined,
      limit: searchParams.get('limit') ?? '12',
      priceMax: searchParams.get('price_max') ?? undefined,
      priceMin: searchParams.get('price_min') ?? undefined,
      title: searchParams.get('title') ?? undefined,
   });

   const limitChangeHandler = () => {
      let limit = 12;

      if (searchParams.get('limit')) {
         limit = Number(searchParams.get('limit'));
      }
      if (data?.length === limit) {
         limit += 8;
      }

      searchParams.set('limit', limit.toString());
      setSearchParams(searchParams);
   };

   useEffect(() => {
      setLoading(true);
      refetch().finally(() => setLoading(false));
   }, [searchParams, refetch]);

   useEffect(() => {
      if (data?.length) {
         setCount(data?.length);
      }
   }, [data, setCount]);

   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
   const renderProducts = (
      items: ProductNameSpace.GetProductsWithFilterResponse | undefined,
   ) => {
      if (loading || isFetching) {
         return array.map(item => <FeaturedProductCardSkeleton key={item} />);
      }

      if (!data?.length) {
         return <NoFound />;
      }
      return items?.map(item => {
         return (
            <FeaturedProductCard
               key={item.id}
               id={item.id}
               creationAt={item.creationAt}
               updatedAt={item.updatedAt}
               category={item.category}
               description={item.description}
               images={item.images}
               price={item.price}
               title={item.title}
               className={classes.catalogProducts_product_card}
            />
         );
      });
   };

   return (
      <div>
         <div className={classes.catalogProducts__container}>
            {renderProducts(data)}
         </div>
         {data?.length && data?.length === Number(searchParams.get('limit')) ? (
            <Button
               className={classes.catalogProducts__button}
               theme="transparent-gray"
               onClick={limitChangeHandler}
            >
               Show more
            </Button>
         ) : (
            ''
         )}
      </div>
   );
};
