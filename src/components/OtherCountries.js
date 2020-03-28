import React from 'react';
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  Form,
  Input,
} from 'reactstrap';
import { countrylist } from '../shared/countrylist';
import { Link, Switch, Route } from 'react-router-dom';
import OtherCountryCharts from './OtherCountryCharts';

export default function OtherCountries() {
  const Country = ({ match }) => {
    return <OtherCountryCharts country={match.params.country} />;
  };

  var country_list = [];
  countrylist.map(x => {
    return country_list.push(x.country);
  });

  const destroyInput = () => {
    document.getElementById('inputField').value = '';
  };

  const filter = () => {
    document.getElementById('help').style.display = 'block';
    var txtValue = document.getElementById('inputField').value;
    var filter, dropdown, button, a, i;
    filter = document.getElementById('inputField').value.toUpperCase();
    dropdown = document.getElementById('help');
    button = dropdown.getElementsByTagName('button');

    for (i = 0; i < button.length; i++) {
      a = button[i].getElementsByTagName('a')[0];
      if (a) {
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          button[i].style.display = '';
        } else {
          button[i].style.display = 'none';
        }
      }
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div
          className="row justify-content-start"
          style={{ textAlign: 'center' }}
        >
          <br></br>

          <div className="col-lg-6">
            <UncontrolledButtonDropdown direction="right">
              <h2 style={{ fontWeight: 300 }}>Select a Country: </h2>
              <DropdownToggle
                color="link"
                style={{
                  textDecoration: 'none',
                  color: 'rgb(0,0,0,0.9)',
                }}
              >
                <Form autoComplete="off">
                  <Input
                    type="text"
                    className="input"
                    placeholder="Search or scroll"
                    id="inputField"
                    onKeyUp={filter}
                  />
                </Form>
              </DropdownToggle>
              <DropdownMenu
                style={{
                  maxHeight: '80vh',
                  overflowY: 'scroll',
                  backgroundColor: 'rgb(255,255,255,0.7)',
                }}
                id="help"
              >
                {countrylist.map(({ id, country, regions }) =>
                  !regions ? (
                    <DropdownItem key={id} onClick={destroyInput}>
                      <NavLink
                        tag={props => (
                          <Link
                            style={{
                              textDecoration: 'None',
                              color: 'rgb(0,0,0,0.9)',
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
            <br />
            <br />
          </div>
        </div>
        <Switch>
          <Route exact path="/countrypages/:country" component={Country} />
        </Switch>
      </div>
    </React.Fragment>
  );
}
