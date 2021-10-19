import { useDisclosure } from '@chakra-ui/react';
import {
  CheckCircleIcon,
  ClockIcon,
  EyeIcon,
  XCircleIcon,
} from '@heroicons/react/outline';
import AppointmentModal from './AppointmentModal';

interface Props {
  date?: String;
  data: any;
}

const AppointmentCard = ({ date = '21 Octobre 2021', data }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className='flex justify-between bg-white shadow rounded-lg p-6'>
        <div className='flex items-center'>
          <div className='flex flex-col text-gray-400 text-sm w-60'>
            <div>
              id: <span className='text-gray-800'>{data.id}</span>
            </div>
            <div>
              date: <span className='text-xl text-gray-800'>{data.date}</span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <img
              src={data.employee?.pictureUrl}
              alt={data.employee?.firstName}
              className='w-12 h-12 rounded-full shadow'
            />
            <div className='text-gray-800 text-xl'>
              {data.employee?.firstName + ' ' + data.employee?.lastName}
            </div>
          </div>
        </div>

        <div className='flex items-center space-x-4'>
          {data.resolvedAt && data.resolved && (
            <div className='flex items-center justify-center w-36 bg-green-100 opacity-80 p-2 rounded-xl'>
              <div className='flex space-x-2'>
                <CheckCircleIcon className='h-6 w-6 text-gray-600' />
                <div>Accepted</div>
              </div>
            </div>
          )}
          {data.resolvedAt && !data.resolved && (
            <div className='flex items-center justify-center w-36 bg-red-100 opacity-80 p-2 rounded-xl'>
              <div className='flex space-x-2'>
                <XCircleIcon className='h-6 w-6 text-gray-600' />
                <div>Rejected</div>
              </div>
            </div>
          )}
          {data.resolvedAt == null && (
            <div className='flex items-center justify-center w-36 bg-yellow-100 opacity-80 p-2 rounded-xl'>
              <div className='flex space-x-2'>
                <ClockIcon className='h-6 w-6 text-gray-600' />
                <div>Pending</div>
              </div>
            </div>
          )}
          <div
            className='flex space-x-2 px-4 p-2 rounded-xl bg-gray-50 hover:bg-gray-200 transition-all cursor-pointer'
            onClick={onOpen}
          >
            <div>more details</div>
            <EyeIcon className='h-6 w-6 text-gray-400' />
          </div>
        </div>
      </div>
      <AppointmentModal onClose={onClose} isOpen={isOpen} data={data} />
    </>
  );
};

export default AppointmentCard;
