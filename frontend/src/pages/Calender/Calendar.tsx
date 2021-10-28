import React from 'react';
import { PageHeader } from 'components/PageHeader';
import FullCalender from './FullCalender';
import { useGetIncomingTasksQuery } from 'generated/graphql';
import { formatDate } from 'utils/formatters';
interface Props {}

const Calendar = (props: Props) => {
  const { data } = useGetIncomingTasksQuery();
  const formattedData = data
    ? formatDate(data?.appointments, data?.missions)
    : [];
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader
        title='Calendar'
        description='List of appointments & missions'
        button={false}
      />
      <div className='bg-white rounded-lg shadow p-6'>
        <FullCalender data={formattedData} />
      </div>
    </div>
  );
};

export default Calendar;
