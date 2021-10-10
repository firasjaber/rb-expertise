import { PageHeader } from 'components/PageHeader';
import AddMissionForm from './AddMissionForm';

interface Props {}

const AddMission = (props: Props) => {
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader title='Missions' description='add mission' button={false} />
      <AddMissionForm />
    </div>
  );
};

export default AddMission;
