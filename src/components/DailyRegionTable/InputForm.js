import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { addingDailyRegion } from '../../store/actions';

function InputForm(prop) {
  const { addingDailyRegion, token, isServerError } = prop;

  // form input setup
  const [confirmed, setConfirmed] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [recovered, setRecovered] = useState(0);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(isServerError);
  useEffect(() => {
    setIsAlertVisible(isServerError);
  }, [isServerError]);

  // handle form submit
  function submitForm(event) {
    event.preventDefault();
    var postData = {
      country_id: prop.countrydata.country_id,
      regions_name: prop.regionName,
      date_of_case: prop.date,
      confirmed_cases: confirmed,
      deaths: deaths,
      recovered: recovered,
    };

    addingDailyRegion(postData, token);
    setIsSubmitted(true);
  }
  function onDismiss() {
    setIsAlertVisible(false);
  }
  return (
    <React.Fragment>
      <Alert color="danger" isOpen={isAlertVisible} toggle={onDismiss}>
        Unauthorized! Please Login again!
      </Alert>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ width: '150px' }}>{prop.regionName}</p>
        <Form
          action="post"
          onSubmit={submitForm}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <FormGroup style={{ width: '150px', margin: '10px 5px' }}>
            <Label for="confirmed">Confirmed Cases</Label>
            <Input
              type="number"
              name="confirmed"
              value={confirmed}
              onChange={event => setConfirmed(event.target.value)}
              required
            />
          </FormGroup>
          <FormGroup style={{ width: '150px', margin: '10px 5px' }}>
            <Label for="deaths">Deaths</Label>
            <Input
              type="number"
              name="deaths"
              value={deaths}
              onChange={event => setDeaths(event.target.value)}
              required
            />
          </FormGroup>
          <FormGroup style={{ width: '150px', margin: '10px 5px' }}>
            <Label for="recovered">Recovered</Label>
            <Input
              type="number"
              name="recovered"
              value={recovered}
              onChange={event => setRecovered(event.target.value)}
              required
            />
          </FormGroup>
          <Button disabled={isSubmitted}>Submit</Button>
        </Form>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    token: state.token,
    isServerError: state.isServerError,
  };
};

export default connect(mapStateToProps, {
  addingDailyRegion,
})(InputForm);
