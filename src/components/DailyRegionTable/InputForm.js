import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addingDailyRegion } from '../../store/actions';

function InputForm(prop) {
  const { addingDailyRegion, token } = prop;

  // form input setup
  const [confirmed, setConfirmed] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [recovered, setRecovered] = useState(0);

  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
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
  );
}

const mapStateToProps = state => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps, {
  addingDailyRegion,
})(InputForm);
