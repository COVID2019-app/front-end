import React, { useState } from 'react';
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
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
              {countrylist.map(({ id, country }) => (
                <DropdownItem key={id}>
                  <NavLink
                    tag={props => (
                      <Link to={`/${country}`} {...props}>
                        {country}
                      </Link>
                    )}
                  />
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
          {sessionStorage.getItem('token') !== null ? (
            <NavItem>
              <NavLink
                tag={props => (
                  <Link to="/edit" {...props}>
                    Edit
                  </Link>
                )}
              />
            </NavItem>
          ) : (
            <div></div>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
