import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Sidebar } from './components/Sidebar';
import Home from './containers/Home';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ChakraProvider>
      <Toaster />
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <div className='flex bg-blue-bg'>
              <Sidebar />
              <Home />
            </div>
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
