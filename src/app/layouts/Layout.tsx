import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { SunIcon, MoonIcon } from 'shared/assets/icons';
import { Theme } from 'shared/configs';
import { useTheme } from 'shared/lib';
import { IconButton } from 'shared/ui';
import classes from './Layout.module.scss';

import 'react-alice-carousel/lib/alice-carousel.css';

export const Layout = () => {
   const { theme, toggleTheme } = useTheme();
   const isLight = theme === Theme.LIGHT;

   const Icon = isLight ? SunIcon : MoonIcon;
   const isLightClass = isLight
      ? classes.layout_darkMode__light
      : classes.layout_darkMode__dark;

   return (
      <div className={classes.layout__container}>
         <Header />
         <main className={classes.layout__main}>
            <Outlet />
         </main>
         <Footer />

         <ToastContainer />
         <div
            className={clsx(classes.layout_darkMode__container, isLightClass)}
         >
            <IconButton
               Icon={Icon}
               onClick={toggleTheme}
               className={classes.layout_darkMode__button}
            />
         </div>
      </div>
   );
};
