import {
  CalendarIcon,
  FlagIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';
import React from 'react';

interface Props {}

const IncomingTask = (props: Props) => {
  const imgUrl =
    'https://images.generated.photos/GSOwjmIWKDjQQXed_9XFtQCG6zPuJrHevAFEtt2--Bg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY3MDQ1LmpwZw.jpg';

  return (
    <div className='mb-6'>
      <div className='font-semibold text-2xl text-gray-800 mb-4 mt-8'>
        Incoming Tasks :
      </div>
      <div className='flex flex-col space-y-4'>
        <div className='flex items-center justify-between bg-white rounded-lg w-full shadow p-4 px-6 text-lg'>
          <div className='flex items-center space-x-4 w-full max-w-xs'>
            <LocationMarkerIcon className='w-10 h-10 bg-yellow-300 rounded-full p-2 text-yellow-700' />
            <div>My First Appoinment</div>
          </div>
          <div className='flex items-center space-x-2'>
            <CalendarIcon className='w-6 h-6 text-gray-600 -mt-1' />
            <div>31 Octobre 2021</div>
          </div>
          <div className='flex items-center space-x-2'>
            <img
              src={imgUrl}
              alt='elon'
              className='w-10 h-10 rounded-full shadow'
            />
            <div className='text-gray-800 text-xl'>Elon Muskirinho</div>
          </div>
          <div className='hover:bg-gray-200 p-2 px-4 -mr-2 rounded-full cursor-pointer'>
            view details
          </div>
        </div>
        <div className='flex items-center justify-between bg-white rounded-lg w-full shadow p-4 px-6 text-lg'>
          <div className='flex items-center space-x-4  w-full max-w-xs'>
            <FlagIcon className='w-10 h-10 bg-blue-300 rounded-full p-2 text-blue-700' />
            <div>My First Mission</div>
          </div>
          <div className='flex items-center space-x-2'>
            <CalendarIcon className='w-6 h-6 text-gray-600 -mt-1' />
            <div>31 Octobre 2021</div>
          </div>
          <div className='flex items-center space-x-2'>
            <img
              src={imgUrl}
              alt='elon'
              className='w-10 h-10 rounded-full shadow'
            />
            <div className='text-gray-800 text-xl'>Elon Muskirinho</div>
          </div>
          <div className='hover:bg-gray-200 p-2 px-4 -mr-2 rounded-full cursor-pointer'>
            view details
          </div>
        </div>
        <div className='flex items-center justify-between bg-white rounded-lg w-full shadow p-4 px-6 text-lg'>
          <div className='flex items-center space-x-4 w-full max-w-xs'>
            <LocationMarkerIcon className='w-10 h-10 bg-yellow-300 rounded-full p-2 text-yellow-700' />
            <div>My First Appoinment</div>
          </div>
          <div className='flex items-center space-x-2'>
            <CalendarIcon className='w-6 h-6 text-gray-600 -mt-1' />
            <div>31 Octobre 2021</div>
          </div>
          <div className='flex items-center space-x-2'>
            <img
              src={imgUrl}
              alt='elon'
              className='w-10 h-10 rounded-full shadow'
            />
            <div className='text-gray-800 text-xl'>Elon Muskirinho</div>
          </div>
          <div className='hover:bg-gray-200 p-2 px-4 -mr-2 rounded-full cursor-pointer'>
            view details
          </div>
        </div>
        <div className='flex items-center justify-between bg-white rounded-lg w-full shadow p-4 px-6 text-lg'>
          <div className='flex items-center space-x-4  w-full max-w-xs'>
            <FlagIcon className='w-10 h-10 bg-blue-300 rounded-full p-2 text-blue-700' />
            <div>My First Mission</div>
          </div>
          <div className='flex items-center space-x-2'>
            <CalendarIcon className='w-6 h-6 text-gray-600 -mt-1' />
            <div>31 Octobre 2021</div>
          </div>
          <div className='flex items-center space-x-2'>
            <img
              src={imgUrl}
              alt='elon'
              className='w-10 h-10 rounded-full shadow'
            />
            <div className='text-gray-800 text-xl'>Elon Muskirinho</div>
          </div>
          <div className='hover:bg-gray-200 p-2 px-4 -mr-2 rounded-full cursor-pointer'>
            view details
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomingTask;
