import { Button } from '@chakra-ui/button';
import { PageHeader } from 'components/PageHeader';
import './styles.css';
import { useHistory, useParams } from 'react-router-dom';
import {
  useGetSingleMissionQueryQuery,
  useResolveMissionMutation,
} from 'generated/graphql';
import { Skeleton } from '@chakra-ui/skeleton';
import { Link } from '@chakra-ui/react';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

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
  const [resolveMission, { loading: resolveLoading }] =
    useResolveMissionMutation();

  const history = useHistory();
  const handleResolve = () => {
    resolveMission({
      variables: { data: { id: Number(id), finished: true } },
    })
      .then(() => toast.success('Mission Resolved !'))
      .catch(() => toast.error('Error occured, try again...'));
    history.push('/missions');
  };
  //file upload
  const [file, setFile] = useState<any>('');
  const [fileUrl, setFileUrl] = useState<any>('');
  const [uploadLoading, setUploadLoading] = useState<Boolean>(false);
  useEffect(() => {
    if (file[0]) uploadImage(file[0]);
  }, [file]);
  const uploadImage = async (file: any) => {
    setUploadLoading(true);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'seat_preset');
    data.append('cloud_name', 'dpqezvuku');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dpqezvuku/image/upload',
      {
        method: 'post',
        body: data,
      }
    );
    const resData = await res.json();
    setFileUrl(resData);
    setUploadLoading(true);
    console.log(resData);
  };

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
                accept='.jpg, .png, .jpeg, .gif, .bmp, .tif,.pdf, .tiff|image/*'
                onChange={(e) => setFile(e.target.files)}
                multiple
              />
              <span className='file-custom'>
                {file ? file[0]?.name : 'Select a file to upload'}
              </span>
              {uploadLoading && !fileUrl && (
                <div className='text-gray-400 mt-3 ml-2 underline'>
                  loading...
                </div>
              )}
              {fileUrl && (
                <Link
                  target='_blank'
                  href='https://cloudinary.com/console/c-2a2ee49074574c1e8c19b097e90e1a/media_library/folders/be645750818909db5ec8480b9c29799d9f'
                >
                  <div className='text-gray-400 mt-3 ml-2 underline'>
                    view file
                  </div>
                </Link>
              )}
            </label>
          </div>
          <div className=''>
            <Button
              colorScheme='green'
              my='2'
              onClick={handleResolve}
              isLoading={resolveLoading}
            >
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
