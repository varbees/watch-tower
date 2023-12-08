import React from 'react';

const Banner = () => {
  return (
    <div
      className='flex items-end justify-center h-[40vh] md:h-[60vh] bg-center bg-no-repeat object-cover'
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        objectFit: 'contain',
      }}
    >
      <div className='text-xl md:text-6xl font-semibold  bg-gray-900 bg-opacity-50 text-white text-center w-full py-7 '>
        IRON MAN
      </div>
    </div>
  );
};

export default Banner;
