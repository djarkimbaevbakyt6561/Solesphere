import { EmailIcon, GithubIcon, TelegramIcon } from 'shared/assets/icons';

export const CATALOG_NAVIGATION_CONTENT = [
   {
      id: 1,
      title: 'Одежда',
      to: 'catalog?categoryId=1',
   },
   {
      id: 2,
      title: 'Электроника',
      to: 'catalog?categoryId=2',
   },
   {
      id: 3,
      title: 'Мебель',
      to: 'catalog?categoryId=3',
   },
   { id: 4, title: 'Обувь', to: 'catalog?categoryId=4' },
   { id: 5, title: 'Смешанный', to: 'catalog?categoryId=5' },
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
