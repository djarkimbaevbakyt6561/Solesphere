import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import AliceCarousel, { Responsive } from 'react-alice-carousel';
import { ArrowIcon } from 'shared/assets/icons';
import { NoFound } from '../noFound/NoFound';

import './Carousel.scss';

interface CarouselProps {
   readonly children: JSX.Element[] | Element[];
   readonly countVisibleElements?: number;
   readonly autoWidth?: boolean;
   readonly responsive?: Responsive;
   readonly disableDotsControls?: boolean;
   readonly className?: string;
   readonly onActiveIndexChange?: (num: number) => void;
}

export const Carousel: FC<CarouselProps> = ({
   children,
   countVisibleElements = 1,
   autoWidth,
   responsive,
   disableDotsControls,
   className,
   onActiveIndexChange,
}) => {
   const [activeIndex, setActiveIndex] = useState<number>(0);
   const minActiveIndexElement = 0;
   const maxActiveIndexElement = children?.length
      ? children.length - countVisibleElements
      : 0;
   const noFoundClass = !children.length ? 'carousel_not_found' : '';

   const isDisabledSlidePrev = activeIndex <= minActiveIndexElement;
   const isDisabledSlideNext = activeIndex >= maxActiveIndexElement;

   const getSlidePrev = () => {
      if (isDisabledSlidePrev) {
         return;
      }
      setActiveIndex(activeIndex - 1);
   };

   const getSlideNext = () => {
      if (isDisabledSlideNext) {
         return;
      }
      setActiveIndex(activeIndex + 1);
   };

   useEffect(() => {
      if (onActiveIndexChange) {
         onActiveIndexChange(activeIndex);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [activeIndex]);
   return (
      <div className={clsx('carousel', className, noFoundClass)}>
         {children.length ? (
            <>
               <AliceCarousel
                  autoWidth={autoWidth}
                  mouseTracking
                  responsive={responsive}
                  activeIndex={activeIndex}
                  items={children}
                  disableButtonsControls
                  disableDotsControls={disableDotsControls}
               />
               <button
                  className={'prev__button'}
                  onClick={getSlidePrev}
                  disabled={isDisabledSlidePrev}
               >
                  <ArrowIcon />
               </button>
               <button
                  className={'next__button'}
                  onClick={getSlideNext}
                  disabled={isDisabledSlideNext}
               >
                  <ArrowIcon className={'carousel_right_arrow'} />
               </button>
            </>
         ) : (
            <NoFound />
         )}
      </div>
   );
};
