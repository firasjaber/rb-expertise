import { Button } from '@chakra-ui/button';
import { PageHeader } from 'components/PageHeader';
import './styles.css';
import { missionsData } from './../../utils/placeholderData';
import { useParams } from 'react-router-dom';
import { useGetSingleMissionQueryQuery } from 'generated/graphql';
import { Skeleton } from '@chakra-ui/skeleton';

interface Props {}
interface EmployeeProfileParams {
  id?: string;
}

const ViewMission = (props: Props) => {
  const { id } = useParams<EmployeeProfileParams>();
  const { data, loading, error } = useGetSingleMissionQueryQuery({
    variables: { missionId: Number(id) },
    fetchPolicy: 'no-cache',
  });
  if (error) return <p>Error loading data...</p>;
  if (loading) return <Skeleton height='800px' borderRadius='10px' />;
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader title='Mission' description='View mission' button={false} />

      <div className='flex w-full space-x-6'>
        <div className='w-3/5 bg-white rounded-lg p-4 shadow h-auto space-y-2 text-lg'>
          <div className='font-semibold text-xl'>Missions Details : </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>case number : </div>{' '}
            <div>{data?.mission?.id}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>title : </div>
            <div>{data?.mission?.title}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>address : </div>
            <div>{data?.mission?.address}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>starts : </div>
            <div>{data?.mission?.starts}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>ends : </div>
            <div>{data?.mission?.ends}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>created : </div>
            <div>{data?.mission?.createdAt}</div>
          </div>
          <div className='flex space-x-2 items-center text-yellow-400'>
            <div className='text-gray-400 text-base'>status : </div>
            <div>{data?.mission?.finished ? 'Finished' : 'Pending'}</div>
          </div>
          <div className='opacity-0'>empty space</div>
          <div className='font-semibold text-xl'>Vehicle Details : </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>
              registration number :{' '}
            </div>{' '}
            <div>{data?.mission?.carRegistrationNumber}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>holder : </div>
            <div>{data?.mission?.carHolderName}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>holder email: </div>{' '}
            <div>{data?.mission?.carHolderEmail}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>
              holder phone number :{' '}
            </div>{' '}
            <div>{data?.mission?.carHolderPhone}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>
              assurance contract number :{' '}
            </div>{' '}
            <div>{data?.mission?.assuranceContractNumber}</div>
          </div>
          <div className='opacity-0'>empty space</div>
          <div className='font-semibold text-xl'>Car Mechanic Details : </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>agency name : </div>{' '}
            <div>{data?.mission?.repairAgencyName}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>agency responsible : </div>
            <div>{data?.mission?.repairAgencyResponsible}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>agency email: </div>{' '}
            <div>{data?.mission?.repairAgencyEmail}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>phone number : </div>{' '}
            <div>{data?.mission?.repairAgencyPhone}</div>
          </div>
          <div className='opacity-0'>empty space</div>

          <div className='font-semibold text-xl'>
            Actions :{' '}
            <div className='text-sm text-gray-400'>
              ( submit by uploading raport document )
            </div>
            <label className='file text-sm my-4'>
              <input
                type='file'
                id='file'
                aria-label='File browser example'
                accept='.jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*'
                multiple
              />
              <span className='file-custom'>Select a file to upload</span>
              <div className='text-gray-400 mt-3 ml-2 underline'>view file</div>
            </label>
          </div>
          <div className=''>
            <Button colorScheme='green' my='2'>
              Mark as Done
            </Button>
          </div>
        </div>
        {/* TODO : on click goes to correspending employee & assurance profile */}
        <div className='w-2/5 bg-white rounded-lg p-4 space-y-2 shadow pb-6 max-h-72'>
          <div className='font-semibold text-xl'>Assignees : </div>
          <div className='text-gray-500'>Employee : </div>
          <div className='flex items-center space-x-4'>
            <img
              src={data?.mission?.employee?.pictureUrl ?? ''}
              alt={data?.mission?.employee?.firstName ?? ''}
              className='w-10 h-10 rounded-full shadow'
            />
            <div className='text-gray-800 text-lg font-semibold'>
              {data?.mission?.employee?.firstName +
                ' ' +
                data?.mission?.employee?.lastName}
            </div>
          </div>
          <div className='text-gray-500 '>Assurance : </div>
          <div className='flex items-center space-x-4'>
            <img
              src={data?.mission?.assurance?.pictureUrl ?? ''}
              alt='assurance'
              className='w-10 h-auto'
            />
            <div className='text-gray-800 text-lg font-semibold'>
              {data?.mission?.assurance?.name}
            </div>
          </div>
          <div className='flex items-center space-x-2 text-gray-800'>
            <div className='text-gray-400'>assurance email : </div>
            <div>contact@star.com.tn</div>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='text-gray-400'>phone number : </div>
            <div>80100200</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMission;
