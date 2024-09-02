import { FC, useEffect, useState } from 'react';
import classes from './Radio.module.scss';
import { useSearchParams } from 'react-router-dom';

interface RadioProps {
   id: number;
   title: string;
   name: string;
   value: string;
   isChecked: boolean;
}

export const Radio: FC<RadioProps> = ({
   id,
   title,
   name,
   value,
   isChecked,
}) => {
   const [searchParams, setSearchParams] = useSearchParams();

   const handleRadioChange = () => {
      if (isChecked) {
         searchParams.delete('categoryId');
      } else {
         searchParams.set('categoryId', id.toString());
      }

      setSearchParams(searchParams);
   };

   return (
      <div className={classes.radio__container}>
         <input
            type="radio"
            name={name}
            value={value}
            className={classes.radio__input}
            onChange={handleRadioChange}
            checked={isChecked}
         />

         <p className={classes.radio__title}>{title}</p>
      </div>
   );
};
