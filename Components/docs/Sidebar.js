import React from 'react';
import SideAccordion from './SideAccordion';

function Sidebar() {
  return (
    <div className='w-1/5 h-full flex flex-col'>
      <h4 className='text-lg font-semibold p-5'>Documentation</h4>
      <SideAccordion className='p-5' />
    </div>
  );
}

export default Sidebar;
