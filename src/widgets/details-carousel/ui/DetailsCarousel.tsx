import clsx from 'clsx';
import { FC, useState } from 'react';
import { Carousel } from 'shared/ui';
import './DetailsCarousel.scss';

interface DetailsCarouselProps {
   product: ImagesType;
}

type ImagesType = {
   images: string[];
   id: number;
   title: string;
};

export const DetailsCarousel: FC<DetailsCarouselProps> = ({ product }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const activeCleanedImageUrl = product.images[activeIndex].replace(
      /[[\]" ]/g,
      '',
   );

   const renderProducts = (items: ImagesType | undefined) => {
      //   if (isLoading) {
      //      return array?.map(item => {
      //         return <FeaturedProductCardSkeleton key={item} />;
      //      });
      //   }

      return items?.images.map((item, i) => {
         const cleanedImageUrl = item.replace(/[[\]" ]/g, '');
         const isActiveClass =
            i === activeIndex ? 'detailsCarousel__active' : '';
         return (
            <div
               key={i}
               className={clsx('detailsCarousel_img__container', isActiveClass)}
            >
               <img src={cleanedImageUrl} alt={items.title} />
            </div>
         );
      });
   };

   return (
      <div className={'detailsCarousel__container'}>
         <img src={activeCleanedImageUrl} alt={product.title} />
         <Carousel
            autoWidth
            className={'detailsCarousel__customCarousel'}
            onActiveIndexChange={num => setActiveIndex(num)}
            disableDotsControls
            countVisibleElements={1}
         >
            {renderProducts(product) ?? []}
         </Carousel>
      </div>
   );
};
