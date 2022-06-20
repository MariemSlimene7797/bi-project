import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AppLayout from '../AppLayout';
import { useAuthContext } from '../contexts/AuthContext';
import Login from '../pages/login';

const Navigation: React.FC = () => {
  const { session } = useAuthContext();
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {session?.isAuthenticated ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route render={() => (session?.isAuthenticated ? <AppLayout /> : <Redirect to="/login" />)} />
      </Switch>
    </Router>
  );
};

export default Navigation;
