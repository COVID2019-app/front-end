import React, { useState} from 'react';
import {Link, NavLink } from 'react-router-dom';
import { Nav, NavItem, UncontrolledCollapse} from 'reactstrap';
import {COUNTRIES} from '../shared/livecountries';

const RenderDetailedCountries = ({countries}) =>{
    return(
        <div>
            {countries[0].data.map((x) => {
                return(
                    <div className= "submenu" key={x.index}>
                        <NavLink className="submenu" to='#'>{x.Country}</NavLink>
                    </div>
                )

            })
            }
        </div>
    )
}

function SideMenu(props) {

    const countries = useState(COUNTRIES)

    
        return (
            <div className="col-lg-2 sidebar sidebar-sicky bg-light">
                <div className="container">
              Dashboard
                <Nav vertical >
                    <NavItem>
                        <NavLink className="nav-link" to="/">Live</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="#" id="toggler">Country Tables</NavLink>
                        <UncontrolledCollapse  toggler='#toggler'>
                                <NavLink className="submenu" to='/home'>All Countries</NavLink>
                            <RenderDetailedCountries countries={countries}/>
                        </UncontrolledCollapse>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="#" id="toggler2">Charts</NavLink>
                        <UncontrolledCollapse toggler='#toggler2'>
                                <NavLink className="submenu" to='/usa/chart'>USA Chart</NavLink>
                        </UncontrolledCollapse>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="#">Maps</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="#">Sparklines</NavLink>
                    </NavItem>
                </Nav>
                <hr />
                <p>Popular</p>
                <Nav vertical>
                        <NavLink className="nav-link" to="/usa/chart">USA Chart</NavLink> <NavLink className="nav-link" to="/home">All Countries</NavLink> <NavLink className="nav-link" to="#">Something Popular</NavLink> <NavLink className="nav-link" disabled to="#">Something Popular</NavLink>
                </Nav>
                </div>
            </div>
        );

}

export default SideMenu;