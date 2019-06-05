import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Components/Login/Login';

export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Login} />
  </Switch>
);
