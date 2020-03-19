import React, { useState } from 'react';
import { withRouter, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/actions';
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';

const LoginPage = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };

  function onDismiss() {
    setIsAlertVisible(false);
  }

  async function submitForm(event) {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      await login({ username, password });
      history.replace(from);
    } catch {
      setIsSubmitting(false);
      setIsAlertVisible(true);
    }
  }

  return (
    <React.Fragment>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: '75vh' }}
      >
        <div className="col-lg-3">
          <Alert color="danger" isOpen={isAlertVisible} toggle={onDismiss}>
            Invalid username or password. Please try again!
          </Alert>
          <Form action="post" onSubmit={submitForm}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={event => setUsername(event.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                required
              />
            </FormGroup>
            <Button disabled={isSubmitting}>Submit</Button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = { login };

export default withRouter(connect(null, mapDispatchToProps)(LoginPage));
