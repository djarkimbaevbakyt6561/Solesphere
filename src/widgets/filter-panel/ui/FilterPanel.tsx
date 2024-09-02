import { FC, useEffect, useState } from 'react';
import classes from './FilterPanel.module.scss';
import { Accordion } from 'features/accordion';
import { CATALOG_NAVIGATION_CONTENT } from 'shared/consts';
import { Input, Radio, RangeSlider } from 'shared/ui';
import { useSearchParams } from 'react-router-dom';
import { SearchIcon } from 'shared/assets/icons';
import clsx from 'clsx';
import { useDebounce } from 'shared/lib';

interface FilterPanelProps {
   className?: string;
}

export const FilterPanel: FC<FilterPanelProps> = ({ className }) => {
   const [searchValue, setSearchValue] = useState('');
   const [searchParams, setSearchParams] = useSearchParams();

   const { debouncedFunction: updateTitleParams } = useDebounce(newValue => {
      if (newValue === '') {
         searchParams.delete('title');
      } else {
         searchParams.set('title', newValue);
      }
      setSearchParams(searchParams);
   }, 300);

   useEffect(() => {
      updateTitleParams(searchValue);
   }, [searchValue]);

   return (
      <div className={clsx(classes.filterPanel__container, className)}>
         <Input
            placeholder="I look for..."
            onChange={e => setSearchValue(e.target.value)}
            value={searchValue}
            Icon={SearchIcon}
            type="text"
         />
         <Accordion
            title="Categories"
            content={
               <div className={classes.filterPanel_categories__container}>
                  {CATALOG_NAVIGATION_CONTENT.map(el => {
                     return (
                        <Radio
                           value={el.title}
                           title={el.title}
                           id={el.id}
                           key={el.id}
                           name="catalog"
                           isChecked={
                              searchParams.get('categoryId') ===
                              el.id.toString()
                           }
                        />
                     );
                  })}
               </div>
            }
         />
         <Accordion
            title="Price range"
            content={
               <div>
                  <RangeSlider />
               </div>
            }
         />
      </div>
   );
};
