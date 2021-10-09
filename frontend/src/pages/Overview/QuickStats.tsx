import {
  FlagIcon,
  LocationMarkerIcon,
  UsersIcon,
} from '@heroicons/react/outline';

interface Props {}

const QuickStats = (props: Props) => {
  return (
    <div>
      <div className='font-semibold text-2xl text-gray-800 my-4'>
        Quick Stats :
      </div>
      <div className='flex space-x-6'>
        <div className='w-1/3 flex justify-between bg-white p-4 rounded-xl shadow px-6'>
          <div className='text-gray-500 text-lg space-y-1'>
            <div className='text-xl'>Employees</div>
            <div className='text-gray-800 text-5xl font-bold'>10</div>
            <div className='text-base'>total employees</div>
          </div>
          <div className=''>
            <UsersIcon className='w-16 h-16 mt-4 text-gray-600' />
          </div>
        </div>
        <div className='w-1/3 flex justify-between bg-white p-4 rounded-xl shadow px-6'>
          <div className='text-gray-500 text-lg space-y-1'>
            <div className='text-xl'>Appointments</div>
            <div className='text-gray-800 text-5xl font-bold'>68</div>
            <div className='text-base'>15 active appointments</div>
          </div>
          <div className=''>
            <LocationMarkerIcon className='w-16 h-16 mt-4 text-gray-600' />
          </div>
        </div>
        <div className='w-1/3 flex justify-between bg-white p-4 rounded-xl shadow px-6'>
          <div className='text-gray-500 text-lg space-y-1'>
            <div className='text-xl'>Missions</div>
            <div className='text-gray-800 text-5xl font-bold'>42</div>
            <div className='text-base'>3 active missions</div>
          </div>
          <div className=''>
            <FlagIcon className='w-16 h-16 mt-4 text-gray-600' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
