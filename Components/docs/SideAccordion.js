import React from 'react';
import { accData } from './accordionData';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

function SideAccordion() {
  return (
    <Accordion allowMultipleExpanded='true' allowZeroExpanded='true'>
      {accData.map((i) => (
        <AccordionItem className=' p-1'>
          <AccordionItemHeading className='text-lg text-gray-500 hover:text-gray-800'>
            <AccordionItemButton className='pl-5 accordion-group'>
              {i.groupTitle}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className='pl-6'>
            {i.groupLinks.map((links) => (
              <a
                className='accordion-item text-gray-500 border-l border-gray-200 flex flex-col p-2 pl-3'
                href={links.link}
                key={links.link}
              >
                {' • ' + links.linkName}
              </a>
            ))}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default SideAccordion;
