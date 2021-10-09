import Pagination from 'components/Pagination';
import MissionCard from './MissionCard';

interface Props {}

const MissionsList = (props: Props) => {
  return (
    <div className='flex flex-col  p-4 py-6 space-y-6'>
      <MissionCard />
      <MissionCard />
      <MissionCard />
      <MissionCard />
      <MissionCard />
      <Pagination />
    </div>
  );
};

export default MissionsList;
