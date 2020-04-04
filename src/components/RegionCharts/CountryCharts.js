import React from 'react';
import CommonChart from './CommonChart';
import Loading from '../Loading';


function CountryCharts(props) {
  const { country, country_name, region_data, isFetching } = props;

  //var region_names = [...new Set(region_data.map(x => x.state))]
  if (isFetching) {
    return <Loading />
  } else {
    return <CommonChart country={country} country_data={region_data} country_name={country_name} />
  }
}

export default CountryCharts;
