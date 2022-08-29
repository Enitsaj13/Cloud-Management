import React from 'react';
import '../assets/Styles/main.css';

import { CheckIcon } from '@heroicons/react/solid';

const CardPricing = ({ title, price }) => {
  return (
    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
      <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>
        {/* Display the title from the pricing page */}
        {title}
      </span>
      <div>
        <p className='text-6xl font-bold py-4 flex'>
          {/* Display the price from the pricing page */}
          {price}
          <span className='text-xl text-slate-500 flex flex-col justify-end'></span>
          /mo
        </p>
      </div>
      <p className='text-2xl py-8 text-slate-500'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className='text-2xl'>
        <p className='flex py-4'>
          <CheckIcon className='check-Icon' /> Lorem, impsum dolor.
        </p>
        <p className='flex py-4'>
          <CheckIcon className='check-Icon' /> Lorem, impsum dolor.
        </p>
        <p className='flex py-4'>
          <CheckIcon className='check-Icon' /> Lorem, impsum dolor.
        </p>
        <p className='flex py-4'>
          <CheckIcon className='check-Icon' /> Lorem, impsum dolor.
        </p>
        <p className='flex py-4'>
          <CheckIcon className='check-Icon' /> Lorem, impsum dolor.
        </p>
        <button className='w-full py-4 my-4 border border-slate-900 bg-slate-900'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CardPricing;
