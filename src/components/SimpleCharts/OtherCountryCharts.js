import React from 'react';
//import { Redirect } from 'react-router-dom';
import SimpleCommonChart from './SimpleCommonChart';
import Loading from '../Loading';


function OtherCountryCharts(props) {
  const { country, country_data, country_name, isFetching } = props;

  if (isFetching && country === undefined) {
    return <Loading />
  } else if (country !== undefined) {
    return (<SimpleCommonChart country_data={country_data} country={country} country_name={country_name} />);
  }
}
export default OtherCountryCharts;

