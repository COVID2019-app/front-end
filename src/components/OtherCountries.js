import React from 'react';
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
} from 'reactstrap';
import { countrylist } from '../shared/countrylist';
import { Link, Switch, Route } from 'react-router-dom';
import OtherCountryCharts from './OtherCountryCharts';

export default function OtherCountries() {
  const Country = ({ match }) => {
    return <OtherCountryCharts country={match.params.country} />;
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div
          className="row justify-content-center align-items-center"
          style={{ textAlign: 'center' }}
        >
          <br></br>

          <div className="col-lg-3">
            <UncontrolledButtonDropdown>
              <DropdownToggle
                color="link"
                style={{
                  textDecoration: 'none',
                  color: 'rgb(0,0,0,0.8)',
                }}
                caret
              >
                <h2 style={{ fontWeight: 300 }}>Select a Country: </h2>
              </DropdownToggle>
              <DropdownMenu
                style={{
                  height: '80vh',
                  overflowY: 'scroll',
                  backgroundColor: 'rgb(255,255,255,0.5)',
                }}
              >
                {countrylist.map(({ id, country, regions }) =>
                  !regions ? (
                    <DropdownItem key={id}>
                      <NavLink
                        tag={props => (
                          <Link
                            style={{
                              textDecoration: 'None',
                              color: 'rgb(0,0,0,0.8)',
                            }}
                            to={`/countrypages/${country}`}
                            {...props}
                          >
                            {country}
                          </Link>
                        )}
                      />
                    </DropdownItem>
                  ) : null
                )}
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </div>
        <Switch>
          <Route exact path="/countrypages/:country" component={Country} />
        </Switch>
      </div>
    </React.Fragment>
  );
}
