import {
  AddEmployee,
  EmployeeProfile,
  Team,
  Appointments,
  EditEmployee,
  AddAppointment,
  Missions,
  ViewMission,
  AddMission,
  Overview,
  Calendar,
} from 'pages';
import { Redirect, Route, Switch } from 'react-router-dom';

interface Props {}

const Home = (props: Props) => {
  return (
    <Switch>
      <Route path='/team' exact>
        <Team />
      </Route>
      <Route path='/team/addemployee' exact>
        <AddEmployee />
      </Route>
      <Route path='/team/editemployee/:employeeId' exact>
        <EditEmployee />
      </Route>
      <Route path='/team/employee/:employeeId' exact>
        <EmployeeProfile />
      </Route>
      <Route path='/appointments' exact>
        <Appointments />
      </Route>
      <Route path='/appointments/add' exact>
        <AddAppointment />
      </Route>
      <Route path='/missions' exact>
        <Missions />
      </Route>
      <Route path='/missions/view/:id' exact>
        <ViewMission />
      </Route>
      <Route path='/missions/add'>
        <AddMission />
      </Route>
      <Route path='/overview' exact>
        <Overview />
      </Route>
      <Route path='/calendar' exact>
        <Calendar />
      </Route>
      <Route path='/' render={() => <Redirect to='/overview' />}></Route>
    </Switch>
  );
};

export default Home;
