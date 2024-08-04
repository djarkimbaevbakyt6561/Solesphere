import clsx from 'clsx';
import { FC } from 'react';
import { Responsive } from 'react-alice-carousel';
import { FeaturedProductCard } from 'features/product';
import { Button, Carousel } from 'shared/ui';
import classes from './ProductCarousel.module.scss';

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
}

export const ProductCarousel: FC<ProductCarouselProps> = ({
   title,
   className,
}) => {
   const array = [1, 2, 3, 4, 5, 6, 7, 8];
   const renderProducts = (items: number[]) => {
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
            <Button theme="transparent-gray">See more</Button>
         </div>
         <Carousel
            autoWidth
            disableDotsControls
            responsive={responsive}
            countVisibleElements={5}
            // className="home-page__carousel"
         >
            {renderProducts(array)}
         </Carousel>
      </div>
   );
};
