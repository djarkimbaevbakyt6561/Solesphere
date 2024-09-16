import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Accordion } from 'features/accordion';
import { CategoryCheckBox } from 'entities/category';
import { SearchIcon } from 'shared/assets/icons';
import { CATALOG_NAVIGATION_CONTENT } from 'shared/consts';
import { useDebounce } from 'shared/lib';
import { Input, RangeSlider } from 'shared/ui';
import classes from './FilterPanel.module.scss';
import { LimitFilter } from './limitFilter/LimitFilter';

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [searchValue]);

   useEffect(() => {
      setSearchValue(searchParams.get('title') ?? '');

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [searchParams.get('title')]);
   return (
      <div className={clsx(classes.filterPanel__container, className)}>
         <Input
            placeholder="I look for..."
            onChange={e => setSearchValue(e.target.value)}
            value={searchValue}
            lengthWhenDisabled={1}
            Icon={SearchIcon}
            type="text"
         />
         <Accordion
            title="Categories"
            content={
               <div className={classes.filterPanel_categories__container}>
                  <CategoryCheckBox
                     title="All"
                     id={0}
                     isChecked={!searchParams.get('categoryId')}
                  />

                  {CATALOG_NAVIGATION_CONTENT.map(el => {
                     return (
                        <CategoryCheckBox
                           title={el.title}
                           id={el.id}
                           key={el.id}
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
         <Accordion title="Price range" content={<RangeSlider />} />
         <Accordion title="Limit" content={<LimitFilter />} />
      </div>
   );
};
