import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
        <div className="container mx-auto">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
