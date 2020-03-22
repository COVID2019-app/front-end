import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Live from '../components/Live';
import Header from '../components/Header';
// import USAChart from '../components/usa/USAChart';
// import EditForm from '../Form'
// import UsaRegionsChart from '../components/usa/UsaRegionsChart';
import HomeTableEdit from '../components/HomeTableEdit';
import USA from '../components/usa/USA';
import France from '../components/Franch/France';
import Germany from '../components/Germany/Germany';
import Iran from '../components/Iran/Iran';
import Italy from '../components/Italy/Italy';
import Korea from '../components/Korea/Korea';
import Spain from '../components/Spain/Spain';
import China from '../components/China/China';
import Diamond_Princess from '../components/Diamond_Princess/Diamond_Princess';
import Switzerland from '../components/Switzerland/Switzerland';
import Japan from '../components/Japan/Japan';
import Norway from '../components/Norway/Norway';
import Netherlands from '../components/Netherlands/Netherlands';
import Sweden from '../components/Sweden/Sweden';
import United_Kingdom from '../components/United_Kingdom/United_Kingdom';
import Denmark from '../components/Denmark/Denmark';
import Belgium from '../components/Belgium/Belgium';
import Austria from '../components/Austria/Austria';
import Bahrain from '../components/Bahrain/Bahrain';
import Singapore from '../components/Singapore/Singapore';
import PrivateRoute from '../components/PrivateRoute';
import LoginPage from '../components/LoginPage';

const Routes = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="p-4">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/live" />}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/live" component={Live} />
          <PrivateRoute exact path="/edit">
            <HomeTableEdit />
          </PrivateRoute>
          {/* <Route exact path="/edit" component={HomeTableEdit} /> */}
          <Route exact path="/usa" component={USA} />
          {/* <Route exact path="/usa/charts/regions" component={UsaRegionsChart}/> */}
          <Route exact path="/china" component={China} />
          <Route exact path="/france" component={France} />
          <Route exact path="/germany" component={Germany} />
          <Route exact path="/iran" component={Iran} />
          <Route exact path="/italy" component={Italy} />
          <Route exact path="/korea" component={Korea} />
          <Route exact path="/spain" component={Spain} />
          <Route exact path="/diamond_princess" component={Diamond_Princess} />
          <Route exact path="/switzerland" component={Switzerland} />
          <Route exact path="/japan" component={Japan} />
          <Route exact path="/norway" component={Norway} />
          <Route exact path="/netherlands" component={Netherlands} />
          <Route exact path="/sweden" component={Sweden} />
          <Route exact path="/united_kingdom" component={United_Kingdom} />
          <Route exact path="/denmark" component={Denmark} />
          <Route exact path="/belgium" component={Belgium} />
          <Route exact path="/austria" component={Austria} />
          <Route exact path="/bahrain" component={Bahrain} />
          <Route exact path="/singapore" component={Singapore} />
          <Route path="/login" component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default Routes;
