import React from 'react';
import { Redirect } from 'react-router-dom';
import SimpleCommonChart from './SimpleCharts/SimpleCommonChart';
import { countrylist } from '../shared/countrylist';

function OtherCountryCharts(props) {
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
    return <SimpleCommonChart data={data} country={country} />;
  }
}

export default OtherCountryCharts;
