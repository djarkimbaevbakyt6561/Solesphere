import { FC, useState } from 'react';
import { Button } from 'shared/ui';
import { Dropdown } from 'shared/ui/dropdown/Dropdown';
import { DropdownSearchItem } from '../dropdown-search-item/DropdownSearchItem';
import classes from './Search.module.scss';

const books = [
   {
      id: 1,
      title: 'Book',
      image: 'https://cdn.zenden.cloud/j4jx0hVNW9jrCIgbPDIrgC7O7mnxjKgaTGXFSw2EoWg/resize:fit:1472:1472:false:false:ce:0:0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay9jOTgvYzk4MmYwYzA1NjBiYmQ5ZGExYzJhNmQ5NzMxOWRjN2UuanBn.jpg',
      sizes: [
         {
            id: 1,
            size: '38',
         },
         {
            id: 2,
            size: '38',
         },
         {
            id: 3,
            size: '38',
         },
         {
            id: 4,
            size: '38',
         },
      ],
      price: 1000,
      discount: 40,
   },
];

interface SearchProps {
   className?: string;
}

export const Search: FC<SearchProps> = ({ className }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [searchValue, setSearchValue] = useState('');

   const renderContent = () => {
      // if (loading ) {
      //    return (
      //       <div className="search__loading">
      //          <FallingLines width="50" color={PRIMARY_BG} />
      //       </div>
      //    );
      // }
      // if (error) {
      //    return <span className="search__error">{error.messageError}</span>;
      // }
      if (searchValue.length < 3) {
         return (
            <div className={classes.search__info}>
               Введите название обуви, бренд, больше 3 символов
            </div>
         );
      }
      return (
         <div className={classes.search_dropdown_container}>
            {books?.map(item => (
               <DropdownSearchItem
                  key={item.id}
                  id={item.id}
                  sizes={item.sizes}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  discount={item.discount}
               />
            ))}
            <Button theme="transparent-gray">Увидеть больше</Button>
         </div>
      );
   };

   return (
      <div className={className}>
         <Dropdown
            labelElement={
               <input
                  className={classes.search_input}
                  placeholder="Input shoes by title"
                  onChange={e => setSearchValue(e.target.value)}
                  value={searchValue}
                  type="text"
                  onBlur={() => setIsOpen(false)}
                  onFocus={() => setIsOpen(true)}
               />
            }
            className={classes.search_dropdown}
            isOpen={isOpen}
            content={renderContent()}
         />
      </div>
   );
};
