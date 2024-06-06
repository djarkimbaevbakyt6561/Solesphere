import { useEffect, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: unknown[]) => void;

interface UseDebounceResult<Func> {
   readonly debouncedFunction: Func;
}

export const useDebounce = <Func extends SomeFunction>(
   func: Func,
   delay = 1200,
): UseDebounceResult<Func> => {
   const timer = useRef<Timer>();

   useEffect(() => {
      return () => {
         if (!timer.current) return;
         clearTimeout(timer.current);
      };
   }, []);

   const debouncedFunction = ((...args) => {
      if (timer.current) {
         clearTimeout(timer.current);
      }
      const newTimer = setTimeout(() => {
         func(...args);
      }, delay);

      timer.current = newTimer;
   }) as Func;

   return { debouncedFunction };
};
