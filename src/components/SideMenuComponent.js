import React, { Component } from 'react';
import { Nav, NavItem, NavLink, UncontrolledCollapse} from 'reactstrap';
import Footer from './FooterComponent'
import {COUNTRIES} from '../shared/livecountries';

const RenderDetailedCountries = ({countries}) =>{
    return(
        <div>
            {countries.data.map((x) => {
                return(
                    <div>
                        <NavItem>
                            <NavLink href='#'>{x.Country}</NavLink>
                        </NavItem>

                    </div>
                )

            })
            }
        </div>
    )
}

class Sidemenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: COUNTRIES
        }
    }


    render() {
        return (
            <div className="col-lg-2 sidebar sidebar-sicky bg-light">
                <div className="container">
              Dashboard
                <Nav vertical >
                    <NavItem>
                        <NavLink className="caret" href="#" id="toggler">Country Tables</NavLink>
                        <UncontrolledCollapse toggler='#toggler'>
                            <NavItem>
                                <NavLink href='#'>All Countries</NavLink>
                            </NavItem>
                            <RenderDetailedCountries countries={this.state.country}/>
                        </UncontrolledCollapse>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>  Charts</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Maps</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                </Nav>
                <hr />
                <p>Link based</p>
                <Nav vertical>
                    <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
                </Nav>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Sidemenu;