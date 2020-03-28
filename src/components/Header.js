import React, { useState } from 'react';
import useDarkMode  from '../shared/hooks/useDarkMode';

import { darkTheme } from '../themes/theme';

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
} from 'reactstrap';
import logo from '../components/logo.png';
//import { COUNTRIES } from '../shared/livecountries';
import { countrylist } from '../shared/countrylist';
import { Link } from 'react-router-dom';
import { Toggle } from 'material-ui';

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

  
    <Navbar className='dark-mode' color={darkMode ? 'dark-mode':'light'} light expand="md">
      <NavbarBrand
        tag={props => (
          <Link to="/" {...props}>
            <img src={logo} alt="covid2019 logo" width="48" height="48" />
          </Link>
      
        )}
      />
      
     
      
   
   
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink
              tag={props => (
                <Link to="/" {...props}>
                  Live
                </Link>
              )}
            />
          </NavItem>
          <NavItem>
            <NavLink
              tag={props => (
                <Link to="/home" {...props}>
                  Home
                </Link>
              )}
            />
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Country Tables
            </DropdownToggle>
            <DropdownMenu right>
              {countrylist.map(({ id, country, regions }) =>
                regions ? (
                  <DropdownItem key={id}>
                    <NavLink
                      tag={props => (
                        <Link to={`/country/${country}`} {...props}>
                          {country}
                        </Link>
                      )}
                    />
                  </DropdownItem>
                ) : (
                  <div key={id + 'a'}></div>
                )
              )}
              <DropdownItem key={'b'}>
                <NavLink
                 
                  tag={props => (
                    <Link to="/countrypages" {...props}>
                      Rest of Countries
                    </Link>
                  )}
                />
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
      
          <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>

          {sessionStorage.getItem('token') !== null ? (
            <React.Fragment>
              <NavItem>
                <NavLink
                  tag={props => (
                    <Link to="/edit" {...props}>
                      Edit
                    </Link>
                  )}
                />
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Daily Region Data
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavItem>
                      <NavLink
                        tag={props => (
                          <Link to="/addDailyRegion" {...props}>
                            Add
                          </Link>
                        )}
                      />
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                      <NavLink
                        tag={props => (
                          <Link to="/editDailyRegion" {...props}>
                            Edit
                          </Link>
                        )}
                      />
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </React.Fragment>
          ) : (
            <div></div>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  
 
  );
};

export default Header;
