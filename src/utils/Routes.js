import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Live from '../components/Live';
import Header from '../components/Header';
import HomeTableEdit from '../components/HomeTableEdit';
import AddRegionTable from '../components/DailyRegionTable/AddRegionTable';
import EditRegionTable from '../components/DailyRegionTable/EditRegionTable';
import USA from '../components/usa/USA';
import France from '../components/France/France';
import CountryCharts from '../components/CountryCharts';
import PrivateRoute from '../components/PrivateRoute';
import LoginPage from '../components/LoginPage';
import OtherCountries from '../components/OtherCountries'

const Routes = () => {
  const Country = ({ match }) => {
    return <CountryCharts country={match.params.country} />;
  };

  return (
    <React.Fragment>
      <Header />

      <main className="p-4">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/live" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/live" component={Live} />
          <PrivateRoute exact path="/edit">
            <HomeTableEdit />
          </PrivateRoute>
          <PrivateRoute exact path="/addDailyRegion">
            <AddRegionTable />
          </PrivateRoute>
          <PrivateRoute exact path="/editDailyRegion">
            <EditRegionTable />
          </PrivateRoute>
          {/* <Route exact path="/edit" component={HomeTableEdit} /> */}
          <Route exact path="/usa" component={USA} />
          {/* <Route exact path="/usa/charts/regions" component={UsaRegionsChart}/> */}
          <Route exact path="/france" component={France} />
          <Route path="/country/:country" component={Country} />
          <Route path="/login" component={LoginPage} />
          <Route path="/countrypages" component={OtherCountries} />

          <Redirect to="/" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default Routes;
