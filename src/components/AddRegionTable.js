import React, { useState, useEffect } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';
import { DateBox } from 'devextreme-react';

import { COUNTRIES } from '../shared/country_add';
import { Regions } from '../shared/regions_add';

function AddRegionTable() {
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const countryToggle = () => setCountryDropdownOpen(prevState => !prevState);

  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const regionToggle = () => setRegionDropdownOpen(prevState => !prevState);

  const [date, setDate] = useState(convert(new Date()));
  const [recovered, setRecovered] = useState(0);
  const [confirmed, setConfirmed] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const [countrydata, setCountryData] = useState({
    countryName: 'Choose Country',
    country_id: null,
  });
  const [regiondata, setRegiondata] = useState({
    regionName: 'Choose Region',
    regionList: [],
  });
  useEffect(() => {
    setRegiondata({
      ...regiondata,
      regionList: Regions[countrydata.countryName],
    });
  }, [countrydata.countryName]);
  const handleIDChange = event => {
    setCountryData({
      ...countrydata,
      country_id: event.currentTarget.getAttribute('dropdownvalue'),
      countryName: event.currentTarget.textContent,
    });
  };
  const handleDateChange = event => {
    var date = convert(event.value);
    setDate(date);
  };
  function convert(str) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [mnth, day, date.getFullYear()].join('-');
  }

  const handleRegionChange = event => {
    setRegiondata({
      ...regiondata,
      regionName: event.currentTarget.textContent,
    });
  };
  function onDismiss() {
    setIsAlertVisible(false);
  }
  async function submitForm(event) {
    event.preventDefault();
    var postData = {
      country_id: countrydata.country_id,
      regions_name: regiondata.regionName,
      date_of_case: date,
      confirmed_cases: confirmed,
      recovered: recovered,
      deaths: deaths,
    };

    if (
      postData.country_id === null ||
      postData.regions_name === "'Choose Region'"
    ) {
      setIsAlertVisible(true);
    } else {
      console.log(postData);
    }
  }

  return (
    <React.Fragment>
      <Dropdown
        isOpen={countryDropdownOpen}
        toggle={countryToggle}
        style={{ margin: '10px 0' }}
        direction="right"
      >
        <DropdownToggle caret>{countrydata.countryName}</DropdownToggle>
        <DropdownMenu
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: data => {
                return {
                  ...data,
                  styles: {
                    ...data.styles,
                    overflow: 'auto',
                    maxHeight: '150px',
                  },
                };
              },
            },
          }}
        >
          {COUNTRIES.map(country => {
            return (
              <DropdownItem
                onClick={handleIDChange}
                dropdownvalue={country.country_id}
                key={country.country_id}
              >
                {country.name}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>

      {regiondata.regionList ? (
        <Dropdown
          isOpen={regionDropdownOpen}
          toggle={regionToggle}
          direction="right"
          style={{ margin: '10px 0' }}
        >
          <DropdownToggle caret>{regiondata.regionName}</DropdownToggle>
          <DropdownMenu
            modifiers={{
              setMaxHeight: {
                enabled: true,
                order: 890,
                fn: data => {
                  return {
                    ...data,
                    styles: {
                      ...data.styles,
                      overflow: 'auto',
                      maxHeight: '150px',
                    },
                  };
                },
              },
            }}
          >
            {' '}
            {regiondata.regionList.map(region => {
              return (
                <DropdownItem onClick={handleRegionChange} key={region}>
                  {region}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      ) : null}
      <br />
      <p>Date:</p>
      <div className="dx-field" style={{ width: '200px' }}>
        <div>
          <DateBox
            defaultValue={date}
            type="date"
            onValueChanged={handleDateChange}
          />
        </div>
      </div>
      <br />
      <Form action="post" onSubmit={submitForm}>
        <FormGroup>
          <Label for="confirmed">Confirmed Cases</Label>
          <Input
            type="number"
            id="confirmed"
            value={confirmed}
            onChange={event => setConfirmed(event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="deaths">Deaths</Label>
          <Input
            type="number"
            id="password"
            value={deaths}
            onChange={event => setDeaths(event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="recovered">Recovered</Label>
          <Input
            type="number"
            id="password"
            value={recovered}
            onChange={event => setRecovered(event.target.value)}
            required
          />
        </FormGroup>
        <Button>Submit</Button>
        <Alert color="danger" isOpen={isAlertVisible} toggle={onDismiss}>
          Invalid country or region. Please try again!
        </Alert>
      </Form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default AddRegionTable;
