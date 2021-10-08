import { PageHeader } from 'components/PageHeader';
import MissionsList from './MissionsList';

interface Props {}

const Missions = (props: Props) => {
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader title='Missions' description='View missions' />
      <MissionsList />
    </div>
  );
};

export default Missions;
