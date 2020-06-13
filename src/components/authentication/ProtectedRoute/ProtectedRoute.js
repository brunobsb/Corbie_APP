import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ loggedUser, component: Component, ...props }) => {
  return loggedUser ? (
    <Route {...props} render={(routeProps) => <Component {...props} {...routeProps} />} />
  ) : <Redirect to="/login" />;
};

export default ProtectedRoute;
