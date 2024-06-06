import clsx from 'clsx';
import { FC } from 'react';
import { Responsive } from 'react-alice-carousel';
import { FeaturedShoesCard } from 'features/shoes';
import { Button, Carousel } from 'shared/ui';
import classes from './ShoesCarousel.module.scss';

const responsive: Responsive = {
   1024: { items: 5 },
   768: { items: 4 },
   576: { items: 1 },
};

interface ShoesCarouselProps {
   /** Shoes category name. */
   readonly title: string;
   /** Additional styles. */
   readonly className?: string;
}

export const ShoesCarousel: FC<ShoesCarouselProps> = ({ title, className }) => {
   const array = [1, 2, 3, 4, 5, 6, 7, 8];
   const renderBooks = (items: number[]) => {
      return items?.map((item, i) => (
         <FeaturedShoesCard
            key={i}
            discount={20}
            id={1}
            image="https://cdn.zenden.cloud/j4jx0hVNW9jrCIgbPDIrgC7O7mnxjKgaTGXFSw2EoWg/resize:fit:1472:1472:false:false:ce:0:0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay9jOTgvYzk4MmYwYzA1NjBiYmQ5ZGExYzJhNmQ5NzMxOWRjN2UuanBn.jpg"
            price={300}
            sizes={[
               {
                  id: 1,
                  size: '38',
               },
            ]}
            title="Hi"
         />
      ));
   };

   return (
      <div className={clsx(classes.container, className, '_container')}>
         <div className={classes.title_container}>
            <h2>{title}</h2>
            <Button theme="transparent-gray">Увидеть больше</Button>
         </div>
         <Carousel
            autoWidth
            disableDotsControls
            responsive={responsive}
            countVisibleElements={5}
            // className="home-page__carousel"
         >
            {renderBooks(array)}
         </Carousel>
      </div>
   );
};
