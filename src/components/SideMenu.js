import React, { useState} from 'react';
import {NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, UncontrolledCollapse, Collapse, NavbarToggler} from 'reactstrap';
import {COUNTRIES} from '../shared/livecountries';
import { Button } from 'devextreme-react/button';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.dark.css';
//import UsaRegionsChart from '../components/usa/UsaRegionsChart'
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

const SideMenu = (props) => {

    const [collapsed, setCollapsed] = useState(true);
    const countries = useState(COUNTRIES)

    const toggleNavbar = () => setCollapsed(!collapsed);

    

    
        return (
            <React.Fragment>
                <Navbar expand="lg" className=".d-md-none .d-lg-block">
                    <Button onClick={toggleNavbar} icon="menu" className="mr-2" id="navToggler"  />
                    <Collapse isOpen={!collapsed} navbar>
            <div className="col-lg-2 sidebar sidebar-sicky bg-light">
                <div className="container">
            
                <Nav onClick={toggleNavbar} vertical >
                    Dashboard
                        
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
                        
                                <NavLink className="submenu" to='/usa/chart'>USA Chart</NavLink><br/>
                                <NavLink className="submenu" to="/usa/charts/regions">USA Regions</NavLink>
                                
                        </UncontrolledCollapse>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="#">Maps</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="#">Sparklines</NavLink>
                    </NavItem>
                    <p style={{width: '200%', height: '70%'}}><hr /></p>
                    Popular Links
                                    
                    <NavLink className="nav-link" to="/usa/chart">USA Chart</NavLink> 
                    <NavLink className="nav-link" to="/home">All Countries</NavLink> 
                    <NavLink className="nav-link" to="#">Something Popular</NavLink> 
                    <NavLink className="nav-link" disabled to="#">Something Popular</NavLink>
                        
                </Nav>
           
                </div>
            </div>
            </Collapse>
                </Navbar>
            </React.Fragment>
        );

}

export default SideMenu;