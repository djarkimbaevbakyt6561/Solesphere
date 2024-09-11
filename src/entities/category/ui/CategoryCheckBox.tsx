import clsx from 'clsx';
import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import classes from './CategoryCheckBox.module.scss';

interface CategoryCheckBoxProps {
   id: number;
   title: string;
   isChecked: boolean;
}

export const CategoryCheckBox: FC<CategoryCheckBoxProps> = ({
   id,
   title,
   isChecked,
}) => {
   const [searchParams, setSearchParams] = useSearchParams();

   const checkedClass = isChecked ? classes.category__card_checked : '';

   const handleRadioChange = () => {
      if (isChecked || id === 0) {
         searchParams.delete('categoryId');
      } else {
         searchParams.set('categoryId', id.toString());
      }

      setSearchParams(searchParams);
   };
   return (
      <button
         className={clsx(classes.category__card, checkedClass)}
         onClick={handleRadioChange}
      >
         <span />
         {title}
      </button>
   );
};
