import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/login'
import Signup from './pages/signup'
import Clockin from './pages/clock'
import TimeSheet from './pages/timeSheet'
import Admin from './pages/admin'





function App() {
  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>

      <Route path="/signup" exact>
        <Signup />
      </Route>

      <Route path="/clock" exact>
        <Clockin />
      </Route>

      <Route path="/timeSheet" exact>
        <TimeSheet />
      </Route>
      
      <Route path="/admin" exact>
        <Admin />
      </Route>
      
    </Switch>
  );
}


export default App;































