import React from 'react';

import { Redirect } from 'react-router-dom';
import CommonChart from './RegionCharts/CommonChart';
import { countrylist } from '../shared/countrylist';

function CountryCharts(props) {
  const { country } = props;

  var data;
  for (var i in countrylist) {
    if (countrylist[i]['country'] === country) {
      data = countrylist[i];
    }
  }

  if (!data) {
    return <Redirect to="/" />;
  } else {
    return <CommonChart data={data} country={country} />;
  }
}

export default CountryCharts;
