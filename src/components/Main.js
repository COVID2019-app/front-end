import React, { Component } from 'react';
//import Home from './HomeComponent';
import Header from './Header';
import Live from './Live';
import { Switch, Route, Redirect, /*withRouter*/ } from 'react-router-dom';
import Sidemenu from './SideMenu';
import AllCountriesTable from './AllCountriesTable';

class Main extends Component {

    render() {

        return(
            <div>
                <Header />
                <Sidemenu />
                    <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <Switch>
                            <Route exact path='/' component={()=><Live />}/>
                            <Route exact path='/allcountriestable' component={()=><AllCountriesTable/>}/>
                            <Redirect to='/'/>
                        </Switch>
            
                    </main>
                
            </div>
        )
    }
}

export default Main