import {
  CalendarIcon,
  FlagIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';
import { useGetIncomingTasksQuery } from 'generated/graphql';
import { Link } from 'react-router-dom';
import { formatIncomingTasks } from 'utils/formatters';

interface Props {}

const IncomingTask = (props: Props) => {
  const { data } = useGetIncomingTasksQuery({
    variables: { activeAppointment: true, activeMission: true },
  });
  const formattedData = formatIncomingTasks(data?.appointments, data?.missions);
  return (
    <div className='mb-6'>
      <div className='font-semibold text-2xl text-gray-800 mb-4 mt-8'>
        Incoming Tasks :
      </div>
      <div className='flex flex-col space-y-4'>
        {formattedData.map((data) =>
          data.__typename === 'Appointment' ? (
            <div className='flex items-center justify-between bg-white rounded-lg w-full shadow p-4 px-6 text-lg'>
              <div className='flex items-center space-x-4 w-full max-w-xs'>
                <LocationMarkerIcon className='w-10 h-10 bg-yellow-300 rounded-full p-2 text-yellow-700' />
                <div>{data.title}</div>
              </div>
              <div className='flex items-center space-x-2'>
                <CalendarIcon className='w-6 h-6 text-gray-600 -mt-1' />
                <div>{data.date}</div>
              </div>
              <div className='flex items-center space-x-2'>
                <img
                  src={data.employee.pictureUrl}
                  alt={data.employee.firstName}
                  className='w-10 h-10 rounded-full shadow'
                />
                <div className='text-gray-800 text-xl'>
                  {data.employee.firstName + ' ' + data.employee.lastName}
                </div>
              </div>
              <Link to={`/appointments`}>
                <div className='hover:bg-gray-200 p-2 px-4 -mr-2 rounded-full cursor-pointer'>
                  view details
                </div>
              </Link>
            </div>
          ) : (
            <div className='flex items-center justify-between bg-white rounded-lg w-full shadow p-4 px-6 text-lg'>
              <div className='flex items-center space-x-4  w-full max-w-xs'>
                <FlagIcon className='w-10 h-10 bg-blue-300 rounded-full p-2 text-blue-700' />
                <div>{data.title}</div>
              </div>
              <div className='flex items-center space-x-2'>
                <CalendarIcon className='w-6 h-6 text-gray-600 -mt-1' />
                <div>{data.starts}</div>
              </div>
              <div className='flex items-center space-x-2'>
                <img
                  src={data.employee.pictureUrl}
                  alt={data.employee.firstName}
                  className='w-10 h-10 rounded-full shadow'
                />
                <div className='text-gray-800 text-xl'>
                  {data.employee.firstName + ' ' + data.employee.lastName}
                </div>
              </div>
              <Link to={`/missions/view/${data.id}`}>
                <div className='hover:bg-gray-200 p-2 px-4 -mr-2 rounded-full cursor-pointer'>
                  view details
                </div>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default IncomingTask;
