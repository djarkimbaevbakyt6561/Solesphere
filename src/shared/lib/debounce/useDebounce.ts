import { useEffect, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = <Func extends (...args: any[]) => void>(
   func: Func,
   delay = 1200,
): { debouncedFunction: Func } => {
   const timer = useRef<Timer>();

   useEffect(() => {
      return () => {
         if (!timer.current) return;
         clearTimeout(timer.current);
      };
   }, []);

   const debouncedFunction = ((...args: Parameters<Func>) => {
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
