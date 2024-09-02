import clsx from 'clsx';
import { FC } from 'react';
import { Responsive } from 'react-alice-carousel';
import { FeaturedProductCard, FeaturedProductCardSkeleton } from 'features/product';
import { Button, Carousel } from 'shared/ui';
import classes from './ProductCarousel.module.scss';
import { useNavigate } from 'react-router-dom';
import ContentLoader from 'react-content-loader';

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
   title,
   className,
   id,
}) => {
   const array = [1, 2, 3, 4, 5];
   const isLoading = true;
   const navigate = useNavigate();

   const renderProducts = (items: number[]) => {
      if (isLoading) {
         return items?.map(item => {
            return <FeaturedProductCardSkeleton key={item} />;
         });
      }

      return items?.map(item => (
         <FeaturedProductCard
            key={item}
            id={1}
            description={'alsdjslafskaldfjsalfksd'}
            image="https://cdn.zenden.cloud/j4jx0hVNW9jrCIgbPDIrgC7O7mnxjKgaTGXFSw2EoWg/resize:fit:1472:1472:false:false:ce:0:0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay9jOTgvYzk4MmYwYzA1NjBiYmQ5ZGExYzJhNmQ5NzMxOWRjN2UuanBn.jpg"
            price={300}
            title="Hi"
         />
      ));
   };

   return (
      <div className={clsx(classes.container, className, '_container')}>
         <div className={classes.title_container}>
            <h2>{title}</h2>
            <Button
               theme="transparent-gray"
               onClick={() => navigate(`catalog?categoryId=${id}`)}
            >
               See more
            </Button>
         </div>
         <Carousel
            autoWidth
            disableDotsControls
            responsive={responsive}
            countVisibleElements={5}
         >
            {renderProducts(array)}
         </Carousel>
      </div>
   );
};
