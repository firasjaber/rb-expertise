import Pagination from 'components/Pagination';
import AppointmentCard from './AppointmentCard';
import { appointmentsData } from './../../utils/placeholderData';
import { useGetAppointmentsQuery } from 'generated/graphql';

interface Props {}

const AppointmentsList = (props: Props) => {
  const { data } = useGetAppointmentsQuery();
  console.log(data);
  return (
    <div className='flex flex-col p-4 py-6 space-y-6'>
      {data?.appointments?.map((appData: any) => (
        <AppointmentCard key={appData.id} data={appData} />
      ))}

      <Pagination
        all={appointmentsData.length}
        currentStart={1}
        currentEnd={6}
        pages={1}
      />
    </div>
  );
};

export default AppointmentsList;
