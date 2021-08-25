import React from 'react';

function HomeCard(props) {
  return (
    <div className='border rounded-md flex flex-col hover:shadow-xl p-4 m-3'>
      <h3 className='text-lg font-semibold p-2 text-left'>{props.title}</h3>
      <p className='p-1 text-left text-sm'>{props.description}</p>
      <a
        className='p-1 text-left text-blue-600 hover:text-blue-400'
        href={props.href}
      >
        Documentation →
      </a>
    </div>
  );
}

export default HomeCard;
