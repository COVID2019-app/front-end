import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function InputForm(prop) {
  // form input setup
  const [confirmed, setConfirmed] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // handle form submit -- to do: check if region in country
  function submitForm(event) {
    event.preventDefault();
    var postData = {
      country_id: prop.countrydata.country_id,
      regions_name: prop.regionName,
      date_of_case: prop.date,
      confirmed_cases: confirmed,
      deaths: deaths,
    };

    console.log(postData);
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
            name="password"
            value={deaths}
            onChange={event => setDeaths(event.target.value)}
            required
          />
        </FormGroup>
        <Button disabled={isSubmitted}>Submit</Button>
      </Form>
    </div>
  );
}

export default InputForm;
