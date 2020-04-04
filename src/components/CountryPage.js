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
import { ISO } from '../shared/iso';
import { Link, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import OtherCountryCharts from './SimpleCharts/OtherCountryCharts';
import CountryCharts from './RegionCharts/CountryCharts';

function CountryPage(props) {
  const { country_timeseries, isFetching } = props;

  
  var pre_list = Object.values(country_timeseries).filter(country => { if ((country.state === "") && (country.county === "")) { return true } return false })
  var iso_list = [...new Set(pre_list.map(x => x.country))];
  var cont_list = ISO.filter(iso => iso_list.filter(x=>x ===iso.iso_code).length>0 )

  var pre_region_list = Object.values(country_timeseries).filter(country => { if ((country.state !== "") && (country.county === "")) { return true } return false})
  var reg_cont = [...new Set(pre_region_list.map(x => x.country))] 

  var map = new Map();

  for(var x in cont_list){
    if(!map.has(cont_list[x].iso_code)){
      map.set(cont_list[x].iso_code, x)
    }
  }
  for (var item in reg_cont){
    if(map.has(reg_cont[item])){
      cont_list[map.get(reg_cont[item])]["regions"] = true
    }
  }

  const Region = ({ match }) =>{
    var country_name = ISO.filter(x => x.country === match.params.country_region)
    if (country_name[0] !== undefined) {
      return <CountryCharts region_data={Object.values(country_timeseries).filter(country => { if ((country.country === country_name[0].iso_code) && (country.state !== "") && (country.county === "")) { return true } return false })}
                                          country={country_name[0].iso_code} country_name={match.params.country_region}
                                          isFetching={isFetching} />;
    }
    else {
      return <Redirect to="/" />
    }
  };


  const Country = ({ match }) => {
    var country_name = ISO.filter(x => x.country === match.params.country)
    if(country_name[0]!== undefined){
      return <OtherCountryCharts country_data={Object.values(country_timeseries).filter(country => { if ((country.country === country_name[0].iso_code) && (country.state === "") && (country.county === "")){return true} return false })} 
                                              country={country_name[0].iso_code} country_name={match.params.country}
                                              isFetching={isFetching}/>;
    }
    else {
      return <Redirect to="/"/>
    }
  };

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
            <UncontrolledButtonDropdown >
              <h2 className="" style={{ fontWeight: 300 }}>Select a Country: </h2>
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
                {cont_list.map(({ id, country, regions }) =>
                regions? ( 
                   <React.Fragment key={id}>
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
                    <DropdownItem key={id +"a"} onClick={destroyInput}>
                      <NavLink
                        tag={props => (
                          <Link
                            style={{
                              textDecoration: 'None',
                              color: 'rgb(0,0,0,0.9)',
                              textAlign: 'center'
                            }}
                            to={`/countrypages/${country}/regions`}
                            {...props}
                          >
                                 {country} Regions
                          </Link>
                        )}
                      />
                    </DropdownItem>
                    </React.Fragment> 
                )
                  :
                  (
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
                  )
                  
                )}
              
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <br />
            <br />
          </div>
        </div>
        <Switch>
          <Route exact path="/countrypages/:country" component={Country} />
          <Route exact path ="/countrypages/:country_region/regions" component={Region} />

        </Switch>
      </div>
    </React.Fragment>
  );
}

export default withRouter(CountryPage);