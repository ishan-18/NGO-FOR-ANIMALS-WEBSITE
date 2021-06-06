import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { DataProvider } from './GlobalState';
import Adopt from './components/AdoptMain/Adopt';
import Login from './components/Auth/Login'

function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/adopt/*" exact component={Adopt} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
