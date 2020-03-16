import React, { useState } from 'react';
import { withRouter, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/actions';

const LoginPage = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };

  async function submitForm(event) {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      await login(username, password);
      // It takes some time to add the token to the store. We fake waiting
      // for a second, so we can navigate to where the user came from.
      setTimeout(() => history.replace(from), 1000);
    } catch {
      setIsSubmitting(false);
    }
  }

  return (
    <form action="post" onSubmit={submitForm}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          id="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

const mapDispatchToProps = { login };

export default withRouter(connect(null, mapDispatchToProps)(LoginPage));
