import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { countrylist } from '../shared/countrylist';
import { Link } from 'react-router-dom';

export default function OtherCountries() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <React.Fragment>
      <div className="row justify-content-center" style={{ height: '100vh' }}>
        <h2 style={{ fontWeight: 300 }}>
          Select a Country from the Dropdown:{' '}
        </h2>

        <br></br>
        <div className="col-lg-3">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle
              style={{
                borderRadius: 0,
                backgroundColor: 'rgb(230, 230, 230)',
                borderColor: 'rgb(230, 230, 230)',
                color: 'rgb(0,0,0,0.8)',
              }}
              caret
            >
              Countries
            </DropdownToggle>
            <DropdownMenu style={{ overflow: 'scroll' }}>
              {countrylist.map(({ id, country, regions }) =>
                !regions ? (
                  <DropdownItem key={id}>
                    <Link
                      style={{
                        textDecoration: 'None',
                        color: 'rgb(0,0,0,0.8)',
                      }}
                      to={`/country/${country}`}
                    >
                      {country}
                    </Link>
                  </DropdownItem>
                ) : (
                  <div key={id + 'a'} />
                )
              )}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </React.Fragment>
  );
}
