import React from 'react';
import AllinOneCard from './AllinOneCard';

const AllinOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>All-in-One Platform</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
          {/* Loop 7x the AllinOne Component */}
          {[...Array(8)].map((_, i) => (
            <AllinOneCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllinOne;
