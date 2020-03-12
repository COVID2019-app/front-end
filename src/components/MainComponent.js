import React, { Component } from 'react';
//import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Live from './LiveComponent'
import { Switch, Route, Redirect, /*withRouter*/ } from 'react-router-dom';
import Sidemenu from './SideMenuComponent';

class Main extends Component {

    render() {

        return(
            <div>
                <Header />
                <Sidemenu />
                    <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <Switch>
                            <Route path='/' component={()=><Live />}/>
                            <Redirect to='/'/>
                        </Switch>
            
                    </main>
                
            </div>
        )
    }
}

export default Main