import { Button } from '@chakra-ui/button';
import { PageHeader } from 'components/PageHeader';
import './styles.css';
import { missionsData } from './../../utils/placeholderData';
import { useParams } from 'react-router-dom';

interface Props {}
interface EmployeeProfileParams {
  id?: string;
}

const ViewMission = (props: Props) => {
  const imgUrl =
    'https://images.generated.photos/GSOwjmIWKDjQQXed_9XFtQCG6zPuJrHevAFEtt2--Bg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY3MDQ1LmpwZw.jpg';
  const imgUrl2 =
    'https://www.star.com.tn/templates/ts_bizspeak/images/logo.png';
  const { id } = useParams<EmployeeProfileParams>();
  const data = missionsData.find((mission) => mission.id == id);
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader title='Mission' description='View mission' button={false} />

      <div className='flex w-full space-x-6'>
        <div className='w-3/5 bg-white rounded-lg p-4 shadow h-auto space-y-2 text-lg'>
          <div className='font-semibold text-xl'>Missions Details : </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>case number : </div>{' '}
            <div>{data?.id}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>title : </div>
            <div>{data?.title}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>address : </div>
            <div>{data?.address}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>starts : </div>
            <div>{data?.starts}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>ends : </div>
            <div>{data?.ends}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>created : </div>
            <div>{data?.createdAt}</div>
          </div>
          <div className='flex space-x-2 items-center text-yellow-400'>
            <div className='text-gray-400 text-base'>status : </div>
            <div>{data?.finished ? 'Finished' : 'Pending'}</div>
          </div>
          <div className='opacity-0'>empty space</div>
          <div className='font-semibold text-xl'>Vehicle Details : </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>
              registration number :{' '}
            </div>{' '}
            <div>{data?.regNumber}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>holder : </div>
            <div>{data?.holderName}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>holder email: </div>{' '}
            <div>{data?.holderEmail}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>
              holder phone number :{' '}
            </div>{' '}
            <div>{data?.holderPhone}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>
              assurance contract number :{' '}
            </div>{' '}
            <div>{data?.assuranceContractNumber}</div>
          </div>
          <div className='opacity-0'>empty space</div>
          <div className='font-semibold text-xl'>Car Mechanic Details : </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>agency name : </div>{' '}
            <div>{data?.agencyName}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>agency responsible : </div>
            <div>{data?.agencyResponsible}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>agency email: </div>{' '}
            <div>{data?.agencyEmail}</div>
          </div>
          <div className='flex space-x-2 items-center text-gray-800'>
            <div className='text-gray-400 text-base'>phone number : </div>{' '}
            <div>{data?.agencyPhone}</div>
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
              src={data?.employeePic}
              alt={data?.employeeName}
              className='w-10 h-10 rounded-full shadow'
            />
            <div className='text-gray-800 text-lg font-semibold'>
              {data?.employeeName}
            </div>
          </div>
          <div className='text-gray-500 '>Assurance : </div>
          <div className='flex items-center space-x-4'>
            <img src={data?.assurancePic} alt='elon' className='w-10 h-auto' />
            <div className='text-gray-800 text-lg font-semibold'>
              {data?.assuranceName}
            </div>
          </div>
          <div className='flex items-center space-x-2 text-gray-800'>
            <div className='text-gray-400'>assurance email : </div>
            <div>{data?.assuranceEmail}</div>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='text-gray-400'>phone number : </div>
            <div>{data?.assurancePhone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMission;
