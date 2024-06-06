import clsx from 'clsx';
// import { useState } from 'react';
import { Header } from 'widgets/header/ui/Header';
import { ShoesCarousel } from 'widgets/shoes-carousel/ui/ShoesCarousel';
import { NavBar } from 'features/navBar';
import { BurgerIcon } from 'shared/assets/icons';
import { SideBar } from 'shared/ui';
import classes from './Layout.module.scss';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Layout = () => {
   // const [value, setValue] = useState<string>('');
   // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   //    setValue(e.target.value);
   // };
   return (
      <div className={clsx(classes.container)}>
         <Header />
         <ShoesCarousel title="Мужские" />
         <SideBar
            openButton={<BurgerIcon />}
            defaultWidth={'250px'}
            height={'400px'}
         >
            <NavBar />
         </SideBar>
      </div>
   );
};
