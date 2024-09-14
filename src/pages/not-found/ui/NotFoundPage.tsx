import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui';
import classes from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
   const navigate = useNavigate();
   return (
      <div className={clsx('_container', classes.notFoundPage__container)}>
         <p className={classes.notFoundPage_404__title}>404</p>
         <p className={classes.notFoundPage__header}>Page not found!</p>
         <p className={classes.notFoundPage__description}>
            The Page you are looking for doesn&rsquo;t exist or an other error
            occured.
         </p>
         <Button
            onClick={() => navigate('/')}
            className={classes.notFoundPage__button}
            theme="transparent-blue"
         >
            Go Back Home
         </Button>
      </div>
   );
};
