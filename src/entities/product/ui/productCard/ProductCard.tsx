import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProductCard } from 'shared/consts';
import classes from './ProductCard.module.scss';

export const ProductCard: FC<IProductCard> = ({ id, title, price, image }) => {
   const [isImageLoaded, setIsImageLoaded] = useState(true);
   const navigate = useNavigate();

   const handleImageError = () => {
      setIsImageLoaded(false);
   };

   return (
      <div
         className={classes.product_container}
         onClick={() => navigate(`/product/${id}/details/`)}
      >
         {isImageLoaded ? (
            <img src={image} alt={title} onError={handleImageError} />
         ) : (
            <div className={classes.product_no_image}>No Photo</div>
         )}
         <p className={classes.product_title}>{title}</p>
         <div className={classes.product_price_container}>
            <p className={classes.product_price_without_discount}>
               {price.toLocaleString()} $
            </p>
         </div>
      </div>
   );
};
