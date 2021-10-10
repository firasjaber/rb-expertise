import Pagination from 'components/Pagination';
import AppointmentCard from './AppointmentCard';
import { appointmentsData } from './../../utils/placeholderData';

interface Props {}

const AppointmentsList = (props: Props) => {
  return (
    <div className='flex flex-col p-4 py-6 space-y-6'>
      {appointmentsData.map((appData: any) => (
        <AppointmentCard key={appData.id} data={appData} />
      ))}

      <Pagination />
    </div>
  );
};

export default AppointmentsList;
