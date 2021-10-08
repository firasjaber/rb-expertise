import {
  CheckCircleIcon,
  ClockIcon,
  EyeIcon,
  XCircleIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

interface Props {}

const MissionCard = (props: Props) => {
  const status = Math.floor(Math.random() * 2);
  const imgUrl =
    'https://images.generated.photos/GSOwjmIWKDjQQXed_9XFtQCG6zPuJrHevAFEtt2--Bg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY3MDQ1LmpwZw.jpg';
  return (
    <>
      <div className='flex justify-between bg-gray-100 rounded-lg p-6'>
        <div className='flex items-center'>
          <div className='flex flex-col text-gray-400 text-sm w-60'>
            <div>
              id: <span className='text-gray-800'>120</span>
            </div>
            <div>
              starts:{' '}
              <span className='text-xl text-gray-800'>31 Octobre 2021</span>
            </div>
            <div>
              ends:{' '}
              <span className='text-xl text-gray-800'>31 Octobre 2021</span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <img
              src={imgUrl}
              alt='elon'
              className='w-12 h-12 rounded-full shadow'
            />
            <div className='text-gray-800 text-xl'>Elon Muskirinho</div>
          </div>
        </div>

        <div className='flex items-center space-x-4'>
          {status === 0 && (
            <div className='flex items-center justify-center w-36 bg-green-100 opacity-80 p-2 rounded-xl'>
              <div className='flex space-x-2'>
                <CheckCircleIcon className='h-6 w-6 text-gray-600' />
                <div>Accepted</div>
              </div>
            </div>
          )}

          {status === 1 && (
            <div className='flex items-center justify-center w-36 bg-yellow-100 opacity-80 p-2 rounded-xl'>
              <div className='flex space-x-2'>
                <ClockIcon className='h-6 w-6 text-gray-600' />
                <div>Pending</div>
              </div>
            </div>
          )}
          <Link to={`/missions/view`}>
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
