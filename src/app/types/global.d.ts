declare module '*.module.scss' {
   interface IClassNames {
      [className: string]: string;
   }
   const classNames: IClassNames;
   export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
   import React, { FC } from 'react';

   const SVG: FC<React.SVGProps<SVGSVGElement>>;
   export default SVG;
}

declare type RootState = ReturnType<typeof import('./store').store.getState>;
declare type AppDispatch = typeof import('./store').store.dispatch;
