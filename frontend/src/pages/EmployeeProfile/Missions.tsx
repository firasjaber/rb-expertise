import { Skeleton } from '@chakra-ui/skeleton';
import { BriefcaseIcon } from '@heroicons/react/solid';

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
            <div className='h-10 bg-gray-200 rounded-lg'></div>
            <div className='h-10 bg-gray-200 rounded-lg'></div>
            <div className='h-10 bg-gray-200 rounded-lg'></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Missions;
