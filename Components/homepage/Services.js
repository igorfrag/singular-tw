import React from 'react';
import HomeCard from './HomeCard';

function Services() {
  const cardData = [
    {
      title: 'Image Optimization',
      description:
        '<Image> and Automatic Image Optimization with instant builds.',
      href: 'https://www.google.com/',
    },
    {
      title: 'Image Optimization',
      description:
        '<Image> and Automatic Image Optimization with instant builds.',
      href: '#',
    },
    {
      title: 'Image Optimization',
      description:
        '<Image> and Automatic Image Optimization with instant builds.',
      href: '#',
    },
    {
      title: 'Image Optimization',
      description:
        '<Image> and Automatic Image Optimization with instant builds.',
      href: '#',
    },
    {
      title: 'Image Optimization',
      description:
        '<Image> and Automatic Image Optimization with instant builds.',
      href: '#',
    },
    {
      title: 'Image Optimization',
      description:
        '<Image> and Automatic Image Optimization with instant builds.',
      href: '#',
    },
  ];

  return (
    <div className='flex text-center flex-col p-12'>
      <h2 className='text-4xl font-semibold p-4'>Why Next.js</h2>
      <h3 className='text-gray-500 font-medium'>
        The world’s leading companies use and love Next.js
      </h3>
      <div className='grid grid-flow-row lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-6'>
        {cardData.map((item) => (
          <HomeCard
            title={item.title}
            description={item.description}
            href={item.href}
            key={item.title}
          />
        ))}
      </div>
      <p className='font-medium'>
        And More: Support for environment variables, preview mode, custom head
        tags, automatic polyfills, and more.
      </p>
    </div>
  );
}

export default Services;
