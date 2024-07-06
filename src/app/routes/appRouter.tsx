import clsx from 'clsx';
import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from 'app/layouts';
import { useTheme } from 'app/providers/theme';
import { HomePage } from 'pages/homePage';
import { LoadingPage } from 'pages/loading';
import { LazySignIn } from 'pages/sign-in';

import '../styles/index.scss';

export const AppRouter = () => {
   const { theme } = useTheme();

   const router = createBrowserRouter([
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
         ],
      },
   ]);

   return (
      <div className={clsx('app', theme)}>
         <RouterProvider router={router} />
      </div>
   );
};
