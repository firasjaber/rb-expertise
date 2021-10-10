import Pagination from 'components/Pagination';
import MissionCard from './MissionCard';
import { missionsData } from './../../utils/placeholderData';

interface Props {}

const MissionsList = (props: Props) => {
  return (
    <div className='flex flex-col  p-4 py-6 space-y-6'>
      {missionsData.map((missionData: any) => (
        <MissionCard data={missionData} />
      ))}
      <Pagination
        all={missionsData.length}
        currentEnd={3}
        currentStart={1}
        pages={2}
      />
    </div>
  );
};

export default MissionsList;
