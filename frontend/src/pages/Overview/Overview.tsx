import { PageHeader } from 'components/PageHeader';
import {
  useGetAppointmentsQuery,
  useGetEmployeesQuery,
  useGetMissionsQuery,
} from 'generated/graphql';
import IncomingTask from './IncomingTask';
import QuickStats from './QuickStats';
import { TQuickStats } from './../../types';

interface Props {}

const Overview = (props: Props) => {
  const { data: missionsData } = useGetMissionsQuery();
  const { data: appointmentsData } = useGetAppointmentsQuery();
  const { data: employeesData } = useGetEmployeesQuery();
  // extracting data
  let quickStats: TQuickStats = {
    employeesNumber: employeesData?.employees?.length,
    appointmentNumber: appointmentsData?.appointments?.length,
    missionsNumber: missionsData?.missions?.length,
    activeAppointmentsNumber: appointmentsData?.appointments
      ? appointmentsData.appointments.filter((a) => a?.resolved === false)
          .length
      : 0,
    activeMissionsNumber: missionsData?.missions
      ? missionsData?.missions.filter((m) => m?.finished === false).length
      : 0,
  };
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader title='Overview' description='Welcome' button={false} />
      <QuickStats stats={quickStats} />
      <IncomingTask />
    </div>
  );
};

export default Overview;
