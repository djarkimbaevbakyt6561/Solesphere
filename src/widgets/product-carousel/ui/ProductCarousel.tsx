import clsx from 'clsx';
import { FC } from 'react';
import { Responsive } from 'react-alice-carousel';
import { useNavigate } from 'react-router-dom';
import {
   FeaturedProductCard,
   FeaturedProductCardSkeleton,
} from 'features/product';
import { useGetProductsByCategoryIdQuery } from 'entities/product/api';
import { Button, Carousel } from 'shared/ui';
import './ProductCarousel.scss';

const responsive: Responsive = {
   1024: { items: 5 },
   768: { items: 4 },
   576: { items: 1 },
};

interface ProductCarouselProps {
   /** Product category name. */
   readonly title: string;
   /** Additional styles. */
   readonly className?: string;
   id: number;
}

export const ProductCarousel: FC<ProductCarouselProps> = ({
   id,
   title,
   className,
}) => {
   const { isLoading, data } = useGetProductsByCategoryIdQuery(id);

   const array = [1, 2, 3, 4, 5];
   const navigate = useNavigate();

   const renderProducts = (
      items: ProductNameSpace.GetProductsByCategoryIdResponse | undefined,
   ) => {
      if (isLoading) {
         return array?.map(item => {
            return <FeaturedProductCardSkeleton key={item} />;
         });
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
            />
         );
      });
   };

   return (
      <div
         className={clsx('productCarousel_container', className, '_container')}
      >
         <div className={'productCarousel_title_container'}>
            <h2>{title}</h2>
            {renderProducts(data)?.length ? (
               <Button
                  theme="transparent-gray"
                  onClick={() => navigate(`catalog?categoryId=${id}`)}
               >
                  See more
               </Button>
            ) : (
               ''
            )}
         </div>
         {renderProducts(data)?.length ? (
            <Carousel
               autoWidth
               className={'productCarousel_customCarousel'}
               disableDotsControls
               responsive={responsive}
               countVisibleElements={5}
            >
               {renderProducts(data) ?? []}
            </Carousel>
         ) : (
            <div className="productCarousel_notFound">
               No products found in category {title}
            </div>
         )}
      </div>
   );
};
