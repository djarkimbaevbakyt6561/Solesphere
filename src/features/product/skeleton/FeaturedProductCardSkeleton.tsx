import clsx from 'clsx';
import { FC } from 'react';
import ContentLoader from 'react-content-loader';
import classes from './FeaturedProductCardSkeleton.module.scss';

interface FeaturedProductCardSkeletonProps {
   className?: string;
}

export const FeaturedProductCardSkeleton: FC<
   FeaturedProductCardSkeletonProps
> = ({ className }) => {
   return (
      <ContentLoader
         className={clsx(classes.productCard_skeleton, className)}
         speed={2}
         width={256}
         height={372}
         viewBox="0 0 256 372"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
      >
         <rect x="0" y="0" rx="0" ry="0" width="256" height="256" />
         <rect x="0" y="265" rx="0" ry="0" width="256" height="18" />
         <rect x="0" y="289" rx="0" ry="0" width="69" height="18" />
         <rect x="0" y="320" rx="0" ry="0" width="256" height="50" />
      </ContentLoader>
   );
};
