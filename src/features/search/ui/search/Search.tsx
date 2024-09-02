import { FC, useState } from 'react';
import { Button, Input } from 'shared/ui';
import { Dropdown } from 'shared/ui/dropdown/Dropdown';
import { DropdownSearchItem } from '../dropdown-search-item/DropdownSearchItem';
import classes from './Search.module.scss';
import { SearchIcon } from 'shared/assets/icons';
import { BeatLoader } from 'react-spinners';

const books = [
   {
      id: 1,
      title: 'Book',
      description: 'kasljfaslk;fjsdalk;fjsadlk;fsajflksajflsakj',
      image: 'https://cdn.zenden.cloud/j4jx0hVNW9jrCIgbPDIrgC7O7mnxjKgaTGXFSw2EoWg/resize:fit:1472:1472:false:false:ce:0:0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay9jOTgvYzk4MmYwYzA1NjBiYmQ5ZGExYzJhNmQ5NzMxOWRjN2UuanBn.jpg',
      price: 1000,
   },
   {
      id: 1,
      title: 'Book',
      description: 'kasljfaslk;fjsdalk;fjsadlk;fsajflksajflsakj',
      image: 'https://cdn.zenden.cloud/j4jx0hVNW9jrCIgbPDIrgC7O7mnxjKgaTGXFSw2EoWg/resize:fit:1472:1472:false:false:ce:0:0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay9jOTgvYzk4MmYwYzA1NjBiYmQ5ZGExYzJhNmQ5NzMxOWRjN2UuanBn.jpg',
      price: 1000,
   },
   {
      id: 1,
      title: 'Book',
      description: 'kasljfaslk;fjsdalk;fjsadlk;fsajflksajflsakj',
      image: 'https://cdn.zenden.cloud/j4jx0hVNW9jrCIgbPDIrgC7O7mnxjKgaTGXFSw2EoWg/resize:fit:1472:1472:false:false:ce:0:0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay9jOTgvYzk4MmYwYzA1NjBiYmQ5ZGExYzJhNmQ5NzMxOWRjN2UuanBn.jpg',
      price: 1000,
   },
   {
      id: 1,
      title: 'Book',
      description: 'kasljfaslk;fjsdalk;fjsadlk;fsajflksajflsakj',
      image: 'https://cdn.zenden.cloud/j4jx0hVNW9jrCIgbPDIrgC7O7mnxjKgaTGXFSw2EoWg/resize:fit:1472:1472:false:false:ce:0:0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay9jOTgvYzk4MmYwYzA1NjBiYmQ5ZGExYzJhNmQ5NzMxOWRjN2UuanBn.jpg',
      price: 1000,
   },
];

interface SearchProps {
   className?: string;
}

export const Search: FC<SearchProps> = ({ className }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [searchValue, setSearchValue] = useState('');
   const loading = true;
   const renderContent = () => {
      // if (error) {
      //    return <span className="search__error">{error.messageError}</span>;
      // }
      if (searchValue.length < 3) {
         return (
            <div className={classes.search_info}>
               Input name of product, category, at least 3 characters
            </div>
         );
      }

      if (loading) {
         return (
            <div className={classes.search__loading}>
               <BeatLoader color="var(--dark-red)" />
            </div>
         );
      }
      return (
         <div className={classes.search_dropdown_container}>
            {books?.map(item => (
               <DropdownSearchItem
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  title={item.title}
                  image={item.image}
                  price={item.price}
               />
            ))}
            <Button theme="transparent-gray">See more</Button>
         </div>
      );
   };

   return (
      <div className={className}>
         <Dropdown
            labelElement={
               <Input
                  placeholder="Enter product by title"
                  onChange={e => setSearchValue(e.target.value)}
                  value={searchValue}
                  type="text"
                  Icon={SearchIcon}
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
