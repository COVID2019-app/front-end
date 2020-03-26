import React, { useState, useEffect } from 'react';
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

  var country_list = [];
  countrylist.map(x => {
    country_list.push(x.country);
  });
  const [filtered, updatefiltered] = useState(country_list);

  //useEffect(() => {
  //   updatefiltered(newList)
  //},[newList]
  //)

  const handleChange = e => {
    let currentList = [];
    let newList = [];

    e.stopPropagation();

    if (e.target.value !== '') {
      console.log(e.target.value);

      currentList = country_list;

      newList = currentList.filter(item => {
        const lc = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
      console.log(newList);
    } else {
      newList = currentList;
    }

    updatefiltered(newList);
  };

  console.log('new', filtered);

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
                <input
                  type="text"
                  className="input"
                  onChange={handleChange}
                  placeholder="Select a Country:"
                />
                {/*<h2 style={{ fontWeight: 300 }}>Select a Country: </h2>*/}
              </DropdownToggle>
              <DropdownMenu
                style={{
                  height: '80vh',
                  overflowY: 'scroll',
                  backgroundColor: 'rgb(255,255,255,0.5)',
                }}
              >
                {filtered.map(x =>
                  filtered.length > 1 ? (
                    <DropdownItem key={x}>
                      <NavLink
                        tag={props => (
                          <Link
                            style={{
                              textDecoration: 'None',
                              color: 'rgb(0,0,0,0.8)',
                            }}
                            to={`/countrypages/${x}`}
                            {...props}
                          >
                            {x}
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
