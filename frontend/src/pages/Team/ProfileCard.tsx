import { Employee, Maybe } from 'generated/graphql';
import { format } from 'date-fns';
import { Button } from '@chakra-ui/button';

interface Props {
  employee?: Maybe<Employee | undefined>;
}

const ProfileCard = ({ employee }: Props) => {
  return (
    <div
      className='my-1 px-1 w-full md:full lg:my-4 lg:px-4 lg:w-1/2 xl:w-1/3'
      key={employee?.id}
    >
      <div className='overflow-hidden rounded-lg shadow-lg p-4 px-6 bg-gray-50'>
        <div className='flex items-center space-x-4 mb-6'>
          <img
            src={employee?.pictureUrl ?? ''}
            alt={employee?.firstName ?? 'profile picture'}
            className='w-20 h-20 rounded-full justify-center shadow-lg border-4 border-gray-800'
          />
          <div>
            <div className='font-semibold text-xl'>
              {employee?.firstName} {employee?.lastName}
            </div>
            <span className=' text-gray-600'>Expert</span>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col text-gray-400 text-sm'>
            <div>
              Joined :{' '}
              <span className='text-gray-700'>
                {format(
                  new Date(employee?.startDate) ?? Date.now(),
                  'dd-MM-yyyy'
                )}
              </span>
            </div>
            <div>
              Phone : <span className='text-gray-700'>{employee?.phone}</span>
            </div>
          </div>
          <Button>Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
