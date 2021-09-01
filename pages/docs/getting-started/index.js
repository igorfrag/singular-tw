import React from 'react';
import Content from '../../../Components/docs/Content';
import Sidebar from '../../../Components/docs/Sidebar';
import Navbar from '../../../Components/Navbar';

function Docs() {
  return (
    <>
      <Navbar />
      <div className='p-10 ml-10 mr-10 flex flex-row justify-center'>
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default Docs;
