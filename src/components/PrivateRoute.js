import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// A wrapper for <Route> that redirects to the login
// screen if user is not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !!token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
