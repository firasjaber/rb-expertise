import { useGetEmployeeQuery } from 'generated/graphql';
import { useParams } from 'react-router-dom';
import { PageHeader } from './../../components/PageHeader';
import EditEmployeeForm from './EditEmployeeForm';

interface Props {}

interface EmployeeProfileParams {
  employeeId?: string;
}

const EditEmployee = (props: Props) => {
  //get employee
  const { employeeId } = useParams<EmployeeProfileParams>();
  const { data } = useGetEmployeeQuery({
    variables: { employeeId: Number(employeeId) },
  });
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader title='Team' description='Edit employee' />
      {data?.employee && (
        <EditEmployeeForm data={data} employeeId={Number(employeeId)} />
      )}
    </div>
  );
};

export default EditEmployee;
