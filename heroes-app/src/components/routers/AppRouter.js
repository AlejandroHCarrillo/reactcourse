import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";

import { AuthContext } from '../../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  const { user } =  useContext(AuthContext);
  const isAuthenticated = user && user.logged;

  console.log("isAuthenticated: ", isAuthenticated);

    return (
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/login" component={ LoginScreen } /> */}
            <PublicRoute path="/login" component={ LoginScreen } isAuthenticated={ isAuthenticated } />
            <PrivateRoute path="/" component={ DashboardRoutes } isAuthenticated={ isAuthenticated } />
          </Switch>
        </div>
      </Router>
    );
}
