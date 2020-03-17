import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// A wrapper for <Route> that redirects to the login
// screen if user is not yet authenticated.
const PrivateRoute = ({ children, token, ...rest }) => {
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
                state: { from: location },
              }}
            />
          )
      }
    />
  );
};

const mapStateToProps = state => ({
  token: state.token,
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));