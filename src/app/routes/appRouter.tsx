import clsx from 'clsx';
import { Suspense } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Layout } from 'app/layouts';
import { useTheme } from 'app/providers/theme';
import { LazyBasket } from 'pages/cart';
import { LazyCatalogPage } from 'pages/catalog';
import { HomePage } from 'pages/homePage';
import { LoadingPage } from 'pages/loading';
import { LazyProductDetails } from 'pages/product-details';
import { LazySignIn } from 'pages/sign-in';
import { LazySignUp } from 'pages/sign-up';

import '../styles/index.scss';

export const AppRouter = () => {
   const { theme } = useTheme();

   const router = createHashRouter(
      [
         {
            path: '/',
            element: <Layout />,
            children: [
               {
                  index: true,
                  element: <HomePage />,
               },
               {
                  path: 'sign-in',
                  element: (
                     <Suspense fallback={<LoadingPage />}>
                        <LazySignIn />
                     </Suspense>
                  ),
               },
               {
                  path: 'sign-up',
                  element: (
                     <Suspense fallback={<LoadingPage />}>
                        <LazySignUp />
                     </Suspense>
                  ),
               },
               {
                  path: 'cart',
                  element: (
                     <Suspense fallback={<LoadingPage />}>
                        <LazyBasket />
                     </Suspense>
                  ),
               },
               {
                  path: 'catalog',
                  element: (
                     <Suspense fallback={<LoadingPage />}>
                        <LazyCatalogPage />
                     </Suspense>
                  ),
               },
               {
                  path: 'product/:id/details',
                  element: (
                     <Suspense fallback={<LoadingPage />}>
                        <LazyProductDetails />
                     </Suspense>
                  ),
               },
            ],
         },
      ],
      {
         basename: '/Solesphere',
      },
   );

   return (
      <div className={clsx('app', theme)}>
         <RouterProvider router={router} />
      </div>
   );
};
