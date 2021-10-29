import {
  FlagIcon,
  LocationMarkerIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { TQuickStats } from 'types';
import { minTwoDigits } from 'utils/formatters';

interface Props {
  stats: TQuickStats;
}

const QuickStats = ({ stats }: Props) => {
  return (
    <div>
      <div className='font-semibold text-2xl text-gray-800 my-4'>
        Quick Stats :
      </div>
      <div className='flex space-x-6'>
        <div className='w-1/3 flex justify-between bg-white p-4 rounded-xl shadow px-6'>
          <div className='text-gray-500 text-lg space-y-1'>
            <div className='text-xl'>Employees</div>
            <div className='text-gray-800 text-5xl font-bold'>
              {minTwoDigits(stats.employeesNumber ?? 0)}
            </div>
            <div className='text-base'>total employees</div>
          </div>
          <div className=''>
            <UsersIcon className='w-16 h-16 mt-4 text-gray-600' />
          </div>
        </div>
        <div className='w-1/3 flex justify-between bg-white p-4 rounded-xl shadow px-6'>
          <div className='text-gray-500 text-lg space-y-1'>
            <div className='text-xl'>Appointments</div>
            <div className='text-gray-800 text-5xl font-bold'>
              {minTwoDigits(stats.appointmentNumber ?? 0)}
            </div>
            <div className='text-base'>
              {minTwoDigits(stats.activeAppointmentsNumber ?? 0)} active
              appointments
            </div>
          </div>
          <div className=''>
            <LocationMarkerIcon className='w-16 h-16 mt-4 text-gray-600' />
          </div>
        </div>
        <div className='w-1/3 flex justify-between bg-white p-4 rounded-xl shadow px-6'>
          <div className='text-gray-500 text-lg space-y-1'>
            <div className='text-xl'>Missions</div>
            <div className='text-gray-800 text-5xl font-bold'>
              {minTwoDigits(stats.missionsNumber ?? 0)}
            </div>
            <div className='text-base'>
              {minTwoDigits(stats.activeMissionsNumber ?? 0)} active missions
            </div>
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
