import clsx from 'clsx';
import { FC, useRef, useState } from 'react';
import { ArrowIcon } from 'shared/assets/icons';
import classes from './Accordion.module.scss';

interface AccordionProps {
   title: string;
   content: JSX.Element | JSX.Element[];
}

export const Accordion: FC<AccordionProps> = ({ title, content }) => {
   const [isOpen, setIsOpen] = useState(false);
   const contentRef = useRef<HTMLDivElement>(null);

   const toggleAccordion = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div>
         <div
            className={classes.accordion_title__container}
            onClick={toggleAccordion}
         >
            <p>{title}</p>
            <ArrowIcon
               className={clsx(classes.accordion_arrow__icon, {
                  [classes.accordion_arrow__icon__open]: isOpen,
               })}
            />
         </div>
         <div
            ref={contentRef}
            className={clsx(classes.accordion_content)}
            style={{
               height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
               marginTop: isOpen ? 15 : 0,
               opacity: isOpen ? 1 : 0,
            }}
         >
            {content}
         </div>
      </div>
   );
};
