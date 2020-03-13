import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, UncontrolledCollapse} from 'reactstrap';
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
                        <NavLink href="/">Live</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" id="toggler">Country Tables</NavLink>
                        <UncontrolledCollapse toggler='#toggler'>
                            <NavLink href='/home'>All Countries</NavLink>
                            <RenderDetailedCountries countries={this.state.country}/>
                        </UncontrolledCollapse>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" id="toggler2">Charts</NavLink>
                            <UncontrolledCollapse toggler='#toggler2'>
                                    <NavLink href='/usa/chart'>USA Chart</NavLink>
                            </UncontrolledCollapse>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Maps</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Sparklines</NavLink>
                    </NavItem>
                </Nav>
                <hr />
                <p>Popular</p>
                <Nav vertical>
                    <NavLink href="/usa/chart">USA Chart</NavLink> <NavLink href="/home">All Countries</NavLink> <NavLink href="#">Something Popular</NavLink> <NavLink disabled href="#">Something Popular</NavLink>
                </Nav>
                </div>
            </div>
        );
    }
}

export default Sidemenu;