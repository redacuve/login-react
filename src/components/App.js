import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container max-w-xs mx-auto">
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
