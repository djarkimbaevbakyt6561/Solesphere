import { Outlet } from 'react-router-dom';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import classes from './Layout.module.scss';

import 'react-alice-carousel/lib/alice-carousel.css';

export const Layout = () => {
   return (
      <div className={classes.layout__container}>
         <Header />
         <main className={classes.layout__main}>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
};
