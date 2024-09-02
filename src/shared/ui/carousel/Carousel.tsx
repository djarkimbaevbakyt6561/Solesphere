import clsx from 'clsx';
import { FC, useState } from 'react';
import AliceCarousel, { Responsive } from 'react-alice-carousel';
import { ArrowIcon } from 'shared/assets/icons';
import classes from './Carousel.module.scss';

interface CarouselProps {
   readonly children: JSX.Element[] | Element[];
   readonly countVisibleElements?: number;
   readonly autoWidth?: boolean;
   readonly responsive?: Responsive;
   readonly disableDotsControls?: boolean;
   readonly className?: string;
}

export const Carousel: FC<CarouselProps> = ({
   children,
   countVisibleElements = 1,
   autoWidth,
   responsive,
   disableDotsControls,
   className,
}) => {
   const [activeIndex, setActiveIndex] = useState<number>(0);
   const minActiveIndexElement = 0;
   const maxActiveIndexElement = children?.length
      ? children.length - countVisibleElements
      : 0;

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

   return (
      <div className={clsx(classes.carousel, className)}>
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
            className={classes.prev__button}
            onClick={getSlidePrev}
            disabled={isDisabledSlidePrev}
         >
            <ArrowIcon />
         </button>
         <button
            className={classes.next__button}
            onClick={getSlideNext}
            disabled={isDisabledSlideNext}
         >
            <ArrowIcon className={classes.carousel_right_arrow} />
         </button>
      </div>
   );
};
