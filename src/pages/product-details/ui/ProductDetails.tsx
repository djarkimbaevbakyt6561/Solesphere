import clsx from 'clsx';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { LoadingPage } from 'pages/loading';
import { ProductDetailsCarousel } from 'widgets/product-details-carousel';
import { ProductInfo } from 'widgets/product-info';
import { useGetProductByIdQuery } from 'entities/product/api';
import { NoFound } from 'shared/ui';
import classes from './ProductDetails.module.scss';

const ProductDetails = () => {
   const { id } = useParams<{ id: string }>();
   const { data, isLoading, isError, refetch } = useGetProductByIdQuery(
      id ?? '',
   );

   const errorClass = isError ? classes.productDetails_error : '';

   useEffect(() => {
      if (isError) {
         toast.error('Product not found!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'light',
         });
      }
   }, [isError]);

   useEffect(() => {
      if (id) {
         refetch();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id]);
   return (
      <>
         <ToastContainer />
         {isLoading ? (
            <LoadingPage />
         ) : (
            <div
               className={clsx(
                  classes.productDetails__container,
                  '_container',
                  errorClass,
               )}
            >
               {isError ? (
                  <NoFound />
               ) : (
                  <>
                     <ProductDetailsCarousel
                        product={{
                           id: data?.id,
                           title: data?.title,
                           images: [
                              'https://i.imgur.com/ZANVnHE.jpeg',
                              'as',
                              'ss',
                              'https://i.imgur.com/ZANVnHE.jpeg',
                              'https://i.imgur.com/ZANVnHE.jpeg',
                           ],
                        }}
                     />
                     <ProductInfo product={data} />
                  </>
               )}
            </div>
         )}
      </>
   );
};
export default ProductDetails;
