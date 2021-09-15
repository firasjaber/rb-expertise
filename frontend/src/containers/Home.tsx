import { Route, Switch } from 'react-router-dom';
import { Overview } from '../pages/Overview';
import Team from '../pages/Team';

interface Props {}

const Home = (props: Props) => {
  return (
    <Switch>
      <Route path='/team'>
        <Team />
      </Route>
      <Route path='/'>
        <Overview />
      </Route>
    </Switch>
  );
};

export default Home;
