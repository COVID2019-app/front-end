import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Home} from '../components/Home';
import Live from '../components/Live';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import USAChart from '../components/usa/USAChart';
import EditForm from '../Form'
import UsaRegionsChart from '../components/usa/UsaRegionsChart';
import TableEdit from '../components/TableEdit'
const Routes = () => {
	return (
		<React.Fragment>
			<Header />
			<SideMenu />
			<main className="col-md-9 ml-sm-auto col-lg-10 px-4">
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/live" />} />{' '}
					<Route exact path="/home" component={Home} /> 
                    <Route exact path="/live" component={Live} />{' '}
					<Route exact path="/edit" component={TableEdit}/>
					<Route exact path="/usa/chart" component={USAChart} /> 
					<Route exact path="/usa/charts/regions" component={UsaRegionsChart}/>
				
                    <Redirect to="/" />
				</Switch>
			</main>{' '}
		</React.Fragment>
	);
};

export default Routes;
