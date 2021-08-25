import React from 'react';

function HeroSection() {
  return (
    <div className='flex text-center flex-col p-12'>
      <h1 className='text-8xl font-bold p-6 tracking-tighter'>
        The React Framework for Production
      </h1>
      <h6 className='px-20 mx-24 text-gray-500 font-medium text-lg'>
        Next.js gives you the best developer experience with all the features
        you need for production: hybrid static & server rendering, TypeScript
        support, smart bundling, route pre-fetching, and more. No config needed.
      </h6>
      <div className='py-12 '>
        <button className='text-white font-medium shadow-md bg-blue-600 rounded-lg p-2 px-12 mx-6 hover:bg-blue-500'>
          Start Learning
        </button>
        <button className='text-gray-600 p-2 px-12 mx-6 rounded-lg shadow-md hover:shadow-lg delay-100 duration-150 transition ease-in-out'>
          Documentation
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
