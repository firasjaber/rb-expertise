import { PageHeader } from 'components/PageHeader';
import AppointmentsList from './AppointmentsList';

interface Props {}

const Appointments = (props: Props) => {
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader
        title='Appointments'
        description='View appointments'
        button={true}
        buttonName='Add Appointment'
        buttonUrl='/appointments/add'
      />
      <AppointmentsList />
    </div>
  );
};

export default Appointments;
