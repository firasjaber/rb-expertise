import { CheckCircleIcon, ClockIcon, EyeIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

interface Props {
  data: any;
}

const MissionCard = ({ data }: Props) => {
  return (
    <>
      <div className='flex justify-between bg-white rounded-lg shadow p-6'>
        <div className='flex items-center'>
          <div className='flex flex-col text-gray-400 text-sm w-60'>
            <div>
              id: <span className='text-gray-800'>{data.id}</span>
            </div>
            <div>
              starts:{' '}
              <span className='text-xl text-gray-800'>{data.starts}</span>
            </div>
            <div>
              ends: <span className='text-xl text-gray-800'>{data.ends}</span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <img
              src={data.employee.pictureUrl}
              alt={data.employee.firstName}
              className='w-12 h-12 rounded-full shadow'
            />
            <div className='text-gray-800 text-xl'>
              {data.employee.firstName + ' ' + data.employee.lastName}
            </div>
          </div>
        </div>

        <div className='flex items-center space-x-4'>
          {data.finished && (
            <div className='flex items-center justify-center w-36 bg-green-100 opacity-80 p-2 rounded-xl'>
              <div className='flex space-x-2'>
                <CheckCircleIcon className='h-6 w-6 text-gray-600' />
                <div>Finished</div>
              </div>
            </div>
          )}

          {!data.finished && (
            <div className='flex items-center justify-center w-36 bg-yellow-100 opacity-80 p-2 rounded-xl'>
              <div className='flex space-x-2'>
                <ClockIcon className='h-6 w-6 text-gray-600' />
                <div>Pending</div>
              </div>
            </div>
          )}
          <Link to={`/missions/view/${data.id}`}>
            <div className='flex space-x-2 px-4 p-2 rounded-xl bg-gray-50 hover:bg-gray-200 transition-all cursor-pointer'>
              <div>more details</div>
              <EyeIcon className='h-6 w-6 text-gray-400' />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MissionCard;
