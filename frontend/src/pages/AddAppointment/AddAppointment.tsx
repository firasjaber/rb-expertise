import { PageHeader } from 'components/PageHeader';
import React from 'react';
import AddAppointmentForm from './AddAppointmentForm';

interface Props {}

const AddAppointment = (props: Props) => {
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader
        title='Appointment'
        description='Add an Appointment'
        button={false}
      />
      <AddAppointmentForm />
    </div>
  );
};

export default AddAppointment;
