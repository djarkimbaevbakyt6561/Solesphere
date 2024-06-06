import clsx from 'clsx';
import { FC, ReactNode, useState } from 'react';
import { CrossIcon } from 'shared/assets/icons';
import classes from './SideBar.module.scss';

interface SideBarProps {
   readonly defaultWidth: string;
   readonly height: string;
   readonly children: ReactNode;
   readonly className?: string;
   readonly openButton: ReactNode;
}

export const SideBar: FC<SideBarProps> = ({
   defaultWidth,
   height,
   children,
   className,
   openButton,
}) => {
   const [width, setWidth] = useState('0');

   const openClass = width !== '0' ? classes.sidebar_open : '';

   const openSidebar = () => {
      setWidth(defaultWidth);
   };

   const closeSidebar = () => {
      setWidth('0');
   };

   return (
      <div className={clsx(className)}>
         <div onClick={openSidebar}>{openButton}</div>

         <div
            className={clsx(classes.sidebar__container, openClass)}
            style={{
               width,
               height,
            }}
         >
            <div className={classes.sidebar_button__container}>
               <button
                  className={classes.sidebar_close__button}
                  onClick={closeSidebar}
               >
                  <CrossIcon />
               </button>
            </div>
            {children}
         </div>
      </div>
   );
};
