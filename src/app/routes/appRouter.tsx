import clsx from 'clsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from 'app/layouts';
import { useTheme } from 'app/providers/theme';

import '../styles/index.scss';

export const AppRouter = () => {
   const { theme } = useTheme();

   const router = createBrowserRouter([
      {
         path: '/',
         element: <Layout />,
      },
   ]);

   return (
      <div className={clsx('app', theme)}>
         <RouterProvider router={router} />
      </div>
   );
};
