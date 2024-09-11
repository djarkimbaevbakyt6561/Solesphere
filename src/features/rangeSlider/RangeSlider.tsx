import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactSlider from 'react-slider';
import { useDebounce } from 'shared/lib/debounce/useDebounce';
import { Input } from '../../shared/ui/input/Input';
import './RangeSlider.scss';

const MIN = 0;
const MAX = 10000;

export const RangeSlider = () => {
   const [values, setValues] = useState([MIN, MAX]);
   const [searchParams, setSearchParams] = useSearchParams();

   const { debouncedFunction: updateSearchParams } = useDebounce(newValues => {
      searchParams.set('price_min', newValues[0]);
      searchParams.set('price_max', newValues[1]);

      setSearchParams(searchParams);
   }, 100);

   useEffect(() => {
      updateSearchParams(values);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [values]);

   return (
      <div className="rangeSlider">
         <div className={'rangeSlider_input__container'}>
            <div className="rangeSlider_input_inner__container">
               from
               <Input
                  placeholder="from"
                  className="rangeSlider_input"
                  type="number"
                  value={values[0]}
                  onChange={e => {
                     const value = Number(e.target.value);
                     if (value > values[1]) {
                        return;
                     }
                     setValues([value, values[1]]);
                  }}
               />
            </div>
            <div className="rangeSlider_input_inner__container">
               to
               <Input
                  placeholder="to"
                  className="rangeSlider_input"
                  type="number"
                  value={values[1]}
                  onChange={e => {
                     const value = Number(e.target.value);
                     if (value > MAX) {
                        return;
                     }
                     setValues([values[0], value]);
                  }}
               />
            </div>
         </div>
         <ReactSlider
            className={'rangeSlider_slider'}
            ariaLabel={['Leftmost thumb', 'Rightmost thumb']}
            min={MIN}
            max={MAX}
            value={values}
            onChange={setValues}
         />
      </div>
   );
};
