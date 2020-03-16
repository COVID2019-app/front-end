import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header(props) {
    return (
        <React.Fragment>
            <Navbar className="fixed-nav fixed-top" color="dark" dark expand="md">
                {/* <img src={logo} width="50" alt="covid2019 logo"/> */}
           
            </Navbar>
        </React.Fragment>
    );

}

export default Header;