import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { FooterNav } from 'features/footer-nav';
import { ABOUT_ME, CATALOG_NAVIGATION_CONTENT } from 'shared/consts';
import classes from './Footer.module.scss';

export const Footer = () => {
   const navContentForCatalog = CATALOG_NAVIGATION_CONTENT.map(el => (
      <li key={el.id} className={classes.footer_catalog__nav_link}>
         <NavLink to={el.to}>{el.title}</NavLink>
      </li>
   ));

   const navContentForAboutMe = ABOUT_ME.map(el => (
      <li key={el.id} className={classes.footer_about_me__nav_link}>
         <el.Icon color="var(--primary-bg)" />
         <a href={el.to}>{el.title}</a>
      </li>
   ));

   return (
      <footer className={classes.footer}>
         <div className={clsx('_container', classes.footer_inner__container)}>
            <FooterNav title="Каталог" navContent={navContentForCatalog} />
            <FooterNav title="Обо мне" navContent={navContentForAboutMe} />
         </div>
      </footer>
   );
};
