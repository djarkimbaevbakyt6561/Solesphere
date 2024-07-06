import { DotLoader } from 'react-spinners';
import classes from './LoadingPage.module.scss';

export const LoadingPage = () => {
   return (
      <div className={classes.loading_page__container}>
         <DotLoader />
      </div>
   );
};
