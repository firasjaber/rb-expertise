import Pagination from 'components/Pagination';
import MissionCard from './MissionCard';

interface Props {
  missionsData?: any;
}

const MissionsList = ({ missionsData }: Props) => {
  return (
    <div className='flex flex-col  p-4 py-6 space-y-6'>
      {missionsData?.map((missionData: any) => (
        <MissionCard data={missionData} />
      ))}
      <Pagination
        all={missionsData?.length ?? 10}
        currentEnd={missionsData?.length < 5 ? missionsData?.length : 5}
        currentStart={1}
        pages={Math.floor(missionsData.length / 5) + 1}
      />
    </div>
  );
};

export default MissionsList;
