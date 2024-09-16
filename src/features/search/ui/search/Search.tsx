import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { useGetProductsWithFilterQuery } from 'entities/product/api';
import { SearchIcon } from 'shared/assets/icons';
import { Button, Input, Dropdown, NoFound } from 'shared/ui';
import { DropdownSearchItem } from '../dropdown-search-item/DropdownSearchItem';
import classes from './Search.module.scss';

interface SearchProps {
   className?: string;
}

export const Search: FC<SearchProps> = ({ className }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [searchValue, setSearchValue] = useState('');
   const navigate = useNavigate();

   const { data, refetch, isFetching } = useGetProductsWithFilterQuery({
      title: searchValue,
      limit: '6',
   });

   useEffect(() => {
      if (searchValue.length > 0) {
         refetch();
      }
   }, [searchValue, refetch]);

   const renderContent = () => {
      if (searchValue.length < 1) {
         return (
            <div className={classes.search_info}>
               Input name of product, category...
            </div>
         );
      }

      if (!data?.length) {
         return (
            <div className={classes.search_noFound}>
               <NoFound className={classes.search_noFound_custom} />
            </div>
         );
      }

      if (isFetching) {
         return (
            <div className={classes.search__loading}>
               <BeatLoader color="var(--dark-red)" />
            </div>
         );
      }
      return (
         <div className={classes.search_dropdown_container}>
            {data?.map(item => {
               const cleanedImageUrl = item.images[0].replace(/[[\]" ]/g, '');

               return (
                  <DropdownSearchItem
                     key={item.id}
                     id={item.id}
                     description={item.description}
                     title={item.title}
                     image={cleanedImageUrl}
                     price={item.price}
                  />
               );
            })}

            <Button
               theme="transparent-gray"
               onClick={() => navigate(`/catalog?title=${searchValue}`)}
            >
               See more
            </Button>
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
                  lengthWhenDisabled={1}
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
