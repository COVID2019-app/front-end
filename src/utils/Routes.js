import React from "react";
import { Route, Redirect } from "react-router-dom";

import Home from "../components/Home";
import Live from "../components/Live"
const Routes = () => {
  return (
    <div>
      <Route exact path="/" render={() => <Redirect to="/live" />} />
      <Route exact path="/live" component={Live} />
      <Route exact path="/home" component={Home} />
    </div>
  );
};

export default Routes;
