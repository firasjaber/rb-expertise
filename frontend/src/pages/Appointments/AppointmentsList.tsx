import Pagination from 'components/Pagination';
import AppointmentCard from './AppointmentCard';

interface Props {}

const AppointmentsList = (props: Props) => {
  return (
    <div className='flex flex-col p-4 py-6 space-y-6'>
      <AppointmentCard date='02 Mars 2021' />
      <AppointmentCard />
      <AppointmentCard />
      <AppointmentCard />
      <AppointmentCard />
      <Pagination />
    </div>
  );
};

export default AppointmentsList;
