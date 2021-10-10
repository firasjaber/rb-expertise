import { Skeleton } from '@chakra-ui/skeleton';
import { BriefcaseIcon } from '@heroicons/react/solid';
import { CalendarIcon } from '@heroicons/react/outline';

interface Props {
  loading: boolean;
}

const Missions = (props: Props) => {
  return (
    <div className='bg-gray-50 w-full rounded-lg shadow-lg'>
      <div className='flex justify-between items-center font-semibold shadow-sm p-3 px-5 text-xl text-gray-700'>
        <div>Missions</div>
        <BriefcaseIcon className='h-6 w-6 text-blue-400' />
      </div>
      <div className='p-4 pb-4'>
        {props.loading ? (
          <div>
            <Skeleton className=' space-y-2'>
              <div className='h-10 bg-gray-200 rounded-lg'></div>
            </Skeleton>
            <Skeleton>
              <div className='h-10 bg-gray-200 rounded-lg'></div>
            </Skeleton>
            <Skeleton>
              <div className='h-10 bg-gray-200 rounded-lg'></div>
            </Skeleton>
          </div>
        ) : (
          <div className=' space-y-2'>
            <div className='flex items-center justify-between p-4 text-sm h-10 bg-gray-100 rounded-lg'>
              <div className='flex items-center space-x-2'>
                <CalendarIcon className='w-5 h-5 text-gray-400 -mt-1' />
                <div>31 Octobre 2021</div>
              </div>
              <div className='bg-white p-1 px-3 text-xs rounded-xl'>
                Not Started
              </div>
            </div>
            <div className='flex items-center justify-between p-4 text-sm h-10 bg-gray-100 rounded-lg'>
              <div className='flex items-center space-x-2'>
                <CalendarIcon className='w-5 h-5 text-gray-400 -mt-1' />
                <div>15 Octobre 2021</div>
              </div>
              <div className='bg-yellow-300 p-1 px-3 text-xs rounded-xl'>
                Active
              </div>
            </div>
            <div className='flex items-center justify-between p-4 text-sm h-10 bg-gray-100 rounded-lg'>
              <div className='flex items-center space-x-2'>
                <CalendarIcon className='w-5 h-5 text-gray-400 -mt-1' />
                <div>13 August 2021</div>
              </div>
              <div className='bg-green-300 p-1 px-3 text-xs rounded-xl'>
                Completed
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Missions;
