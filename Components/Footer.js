import React from 'react';

function Footer() {
  return (
    <div className='border-t border-gray-300 bg-gray-100 flex flex-row justify-center'>
      <div className='flex flex-col m-10 items-center'>
        <h3 className='font-semibold'>Resources</h3>
        <a
          className='text-gray-500 hover:text-black duration-150 transition ease-in-out'
          href='#'
        >
          Docs
        </a>
        <a
          className='text-gray-500 hover:text-black duration-150 transition ease-in-out'
          href='#'
        >
          Learn
        </a>
      </div>
      <div className='flex flex-col m-10 items-center'>
        <h3 className='font-semibold'>About</h3>
        <a
          className='text-gray-500 hover:text-black duration-150 transition ease-in-out'
          href='#'
        >
          GitHub
        </a>
        <a
          className='text-gray-500 hover:text-black duration-150 transition ease-in-out'
          href='#'
        >
          Twitter
        </a>
      </div>
      <div className='flex flex-col m-10 items-center'>
        <h3 className='font-semibold'>Legal</h3>
        <a
          className='text-gray-500 hover:text-black duration-150 transition ease-in-out'
          href='#'
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default Footer;
