import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

interface Props {
  data: any;
}
export default class FullCalender extends React.Component<Props> {
  render() {
    console.log(this.props.data);
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        events={this.props.data}
      />
    );
  }
}
