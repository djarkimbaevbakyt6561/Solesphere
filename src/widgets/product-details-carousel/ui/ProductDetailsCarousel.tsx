import clsx from 'clsx';
import { FC, useState } from 'react';
import { Responsive } from 'react-alice-carousel';
import { Carousel } from 'shared/ui';
import './ProductDetailsCarousel.scss';

interface ProductDetailsCarouselProps {
   product: ImagesType;
}

type ImagesType = {
   images?: string[];
   id?: number;
   title?: string;
};

const responsive: Responsive = {
   0: { items: 2 },
   406: { items: 3 },
   576: { items: 4 },
   1390: { items: 5 },
};

export const ProductDetailsCarousel: FC<ProductDetailsCarouselProps> = ({
   product,
}) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const activeCleanedImageUrl = product.images?.[activeIndex].replace(
      /[[\]" ]/g,
      '',
   );
   const [imageErrors, setImageErrors] = useState<boolean[]>(
      Array(product.images?.length).fill(false),
   );

   const handleImageError = (index: number) => {
      const updatedErrors = [...imageErrors];
      updatedErrors[index] = true;
      setImageErrors(updatedErrors);
   };

   const getMaxWidthOfCarousel = (length: number | undefined) => {
      const maxWidthCarousel = {
         4: 110,
         3: 220,
         2: 330,
         1: 440,
      };
      if (length) {
         if (length in maxWidthCarousel) {
            return (
               550 - maxWidthCarousel[length as keyof typeof maxWidthCarousel]
            );
         }
         return 550;
      }
   };

   const renderProducts = (items: ImagesType) => {
      return items.images?.map((item, i) => {
         const cleanedImageUrl = item.replace(/[[\]" ]/g, '');
         const isActiveClass =
            i === activeIndex ? 'detailsCarousel__active' : '';
         return (
            <div
               key={i}
               className={clsx('detailsCarousel_img__container', isActiveClass)}
            >
               {imageErrors[i] ? (
                  <div
                     className={clsx(
                        'detailsCarousel_product_no_image_carousel__container',
                     )}
                  >
                     <div className="detailsCarousel_product_no_image_carousel">
                        No Photo
                     </div>
                  </div>
               ) : (
                  <img
                     src={cleanedImageUrl}
                     alt={items.title}
                     onError={() => handleImageError(i)}
                  />
               )}
            </div>
         );
      });
   };
   return (
      <div className={'detailsCarousel__container'}>
         <>
            {!imageErrors[activeIndex] ? (
               <img src={activeCleanedImageUrl} alt={product?.title} />
            ) : (
               <div className="detailsCarousel_product_no_image">No Photo</div>
            )}

            <div
               className="detailsCarousel__customCarousel__container"
               style={{
                  maxWidth: getMaxWidthOfCarousel(product.images?.length),
               }}
            >
               <Carousel
                  responsive={responsive}
                  className={'detailsCarousel__customCarousel'}
                  onActiveIndexChange={num => setActiveIndex(num)}
                  disableDotsControls
                  countVisibleElements={1}
               >
                  {renderProducts(product) ?? []}
               </Carousel>
            </div>
         </>
      </div>
   );
};
