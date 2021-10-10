import { PageHeader } from 'components/PageHeader';
import AddEmployeeFrom from './AddEmployeeFrom';

interface Props {}

const AddEmployee = (props: Props) => {
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader title='Team' description='Add employee' button={false} />
      <AddEmployeeFrom />
    </div>
  );
};

export default AddEmployee;
