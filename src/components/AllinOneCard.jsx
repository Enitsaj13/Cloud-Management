import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const AllinOneCard = () => {
  return (
    <div>
      <div className='flex'>
        <div>
          <CheckIcon className='w-7 mr-4 text-green-600' />
        </div>
        <div>
          <h3 className='font-bold text-lg'>Notifications</h3>
          <p className='text-lg pt-2 pb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllinOneCard;
