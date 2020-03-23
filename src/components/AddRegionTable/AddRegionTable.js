import React, { useState, useEffect } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { DateBox } from 'devextreme-react';

import { COUNTRIES } from '../../shared/country_add';
import { Regions } from '../../shared/regions_add';
import InputForm from './InputForm';
function AddRegionTable() {
  // country dropdown setup
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const countryToggle = () => setCountryDropdownOpen(prevState => !prevState);

  const [countrydata, setCountryData] = useState({
    countryName: 'Choose Country',
    country_id: null,
  });

  // region dropdown setup

  const [regiondata, setRegiondata] = useState([]);

  // date setup
  const [date, setDate] = useState(new Date());

  // change region list when the country name is changed
  useEffect(() => {
    setRegiondata(Regions[countrydata.countryName]);
  }, [countrydata.countryName, regiondata]);

  // change country id - in country dropdown
  const handleIDChange = event => {
    setCountryData({
      ...countrydata,
      country_id: event.currentTarget.getAttribute('dropdownvalue'),
      countryName: event.currentTarget.textContent,
    });
  };

  // change date - in date calendar
  const handleDateChange = event => {
    setDate(event.value);
  };

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
      {regiondata
        ? regiondata.map(region => {
            return (
              <InputForm
                countrydata={countrydata}
                regionName={region}
                date={date}
                key={region}
              />
            );
          })
        : null}

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
