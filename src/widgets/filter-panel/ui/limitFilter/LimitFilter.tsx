import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input } from 'shared/ui';

export const LimitFilter = () => {
   const [searchParams, setSearchParams] = useSearchParams();

   const limitChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === '') {
         searchParams.delete('limit');
      } else {
         searchParams.set('limit', e.target.value.toString());
      }

      setSearchParams(searchParams);
   };

   return (
      <Input
         type="number"
         placeholder="Enter limit..."
         min={12}
         value={searchParams.get('limit') ?? 12}
         onChange={limitChangeHandler}
      />
   );
};
