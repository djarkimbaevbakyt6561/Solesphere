import { EmailIcon, GithubIcon, TelegramIcon } from 'shared/assets/icons';

export const CATALOG_NAVIGATION_CONTENT = [
   {
      id: 1,
      title: 'Мужские',
      to: 'catalog/mens',
   },
   {
      id: 2,
      title: 'Женские',
      to: 'catalog/womens',
   },
   {
      id: 3,
      title: 'Детские',
      to: 'catalog/childrens',
   },
];

export const ABOUT_ME = [
   {
      id: 1,
      title: 'Telegram',
      Icon: TelegramIcon,
      to: 'https://t.me/KINGPro6561',
   },
   {
      id: 2,
      title: 'Github',
      Icon: GithubIcon,
      to: 'https://github.com/djarkimbaevbakyt6561',
   },
   {
      id: 3,
      title: 'Email',
      Icon: EmailIcon,
      to: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlqLrHDlgZsLRbHrgTkqhGXpvFXTbVBHwrDBMCTxmCQmHrPDbdQNJxqsfqZQrVkdVThKg',
   },
];
