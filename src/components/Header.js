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
import logo from '../components/LOGO.svg';
import { COUNTRIES } from '../shared/livecountries';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand
        tag={props => (
          <Link to="/" {...props}>
            <img src={logo} alt="covid2019 logo" width="64" height="64" />
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
              {COUNTRIES.data.map(({ index, Country }) => (
                <DropdownItem key={index}>
                  <NavLink
                    tag={props => (
                      <Link to={`/${Country.toLowerCase()}`} {...props}>
                        {Country}
                      </Link>
                    )}
                  />
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
