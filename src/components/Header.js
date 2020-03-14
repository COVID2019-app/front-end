import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

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