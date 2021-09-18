import { PageHeader } from 'components/PageHeader';
import { useGetEmployeeQuery } from 'generated/graphql';
import { useParams } from 'react-router';
import Appointments from './Appointments';
import Missions from './Missions';
import Profile from './Profile';

interface Props {}

interface EmployeeProfileParams {
  employeeId?: string;
}

const EmployeeProfile = (props: Props) => {
  const { employeeId } = useParams<EmployeeProfileParams>();
  const { data, loading, error } = useGetEmployeeQuery({
    variables: { employeeId: Number(employeeId) },
  });
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader title='Employee' description='profile' />
      <div>
        {error && error.message}
        {!error && (
          <div className='flex flex-col lg:space-x-6 lg:flex-row'>
            <Profile
              loading={loading}
              employee={data?.employee}
              employeeId={employeeId}
            />
            <div className='w-full flex mt-5 space-x-4 lg:space-x-0 lg:w-1/3 lg:block lg:space-y-6 lg:mt-0'>
              <Missions loading={loading} />
              <Appointments loading={loading} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeProfile;
