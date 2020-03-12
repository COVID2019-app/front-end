import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar className="fixed-nav fixed-top" color="dark" dark expand="md">
                    <NavbarBrand className="brand" href="/">Covid2019 App</NavbarBrand>
                    <p>     Live Updates</p>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;