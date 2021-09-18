import { AddEmployee, EmployeeProfile, Team } from 'pages';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Overview } from '../pages/Overview';

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
      <Route path='/team/employee/:employeeId' exact>
        <EmployeeProfile />
      </Route>
      <Route path='/overview' exact>
        <Overview />
      </Route>
      <Route path='/' render={() => <Redirect to='/overview' />}></Route>
    </Switch>
  );
};

export default Home;
