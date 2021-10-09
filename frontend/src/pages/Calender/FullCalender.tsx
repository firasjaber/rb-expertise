import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default class FullCalender extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        events={[
          { title: 'Appointment', date: '2021-10-01' },
          { title: 'Mission', date: '2021-10-04' },
        ]}
      />
    );
  }
}
