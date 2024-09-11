import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { DetailsCarousel } from 'widgets/details-carousel';
import classes from './ProductDetails.module.scss';

const ProductDetails = () => {
   const params = useParams();
   console.log(params);

   return (
      <div className={clsx('_container')}>
         <DetailsCarousel
            product={{
               id: 1,
               title: 'hi',
               images: [
                  'https://i.imgur.com/ZANVnHE.jpeg',
                  'https://i.imgur.com/ZANVnHE.jpeg',
                  'https://i.imgur.com/ZANVnHE.jpeg',
                  'https://i.imgur.com/ZANVnHE.jpeg',
                  'https://i.imgur.com/ZANVnHE.jpeg',
                  'https://i.imgur.com/ZANVnHE.jpeg',
                  'https://i.imgur.com/ZANVnHE.jpeg',
                  'https://i.imgur.com/Ro5z6Tn.jpeg',
                  'https://i.imgur.com/woA93Li.jpeg',
               ],
            }}
         />
      </div>
   );
};
export default ProductDetails;
