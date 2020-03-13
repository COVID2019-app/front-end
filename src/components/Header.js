import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <React.Fragment>
            <Navbar className="fixed-nav fixed-top" color="dark" dark expand="md">
                <NavbarBrand className="brand" href="/">Covid2019 App</NavbarBrand>
            </Navbar>
        </React.Fragment>
    );

}

export default Header;