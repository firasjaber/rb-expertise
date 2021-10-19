import { Skeleton } from '@chakra-ui/react';
import { PageHeader } from 'components/PageHeader';
import { useGetMissionsQuery } from 'generated/graphql';
import MissionsList from './MissionsList';

interface Props {}

const Missions = (props: Props) => {
  const { loading, data, error } = useGetMissionsQuery();
  console.log(data);
  if (error) return <p>Error loading data...</p>;
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader
        title='Missions'
        description='View missions'
        button={true}
        buttonName='Add Mission'
        buttonUrl='/missions/add'
      />
      {loading ? (
        <Skeleton height='400px' borderRadius='10px' />
      ) : (
        <MissionsList missionsData={data?.missions} />
      )}
    </div>
  );
};

export default Missions;
