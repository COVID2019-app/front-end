import React from 'react';

import SimpleBarChart from './SimpleBarChart';
import SimpleSplineChart from './SimpleSplineChart';
import CountryInfo from './CountryInfo';
//import Loading from '../Loading';

const RenderSimpleCharts = props => {
  const {
    country,
    country_name,
    field,
    title,
    region_data,
    region_names,
    color,
  } = props;

  return (
    <div className="row justify-content-between">
      <SimpleBarChart
        region_data={region_data}
        country_name={country_name}
        country={country}
        field={field}
        region_names={region_names}
        title={title}
        color={color}
      />
      <br />
      <br />
      <SimpleSplineChart
        region_data={region_data}
        country_name={country_name}
        country={country}
        field={field}
        region_names={region_names}
        title={title}
        color={color}
      />
    </div>
  );
};



function SimpleCommonChart(props) {
  const { isFetching, country, country_data, country_name } = props;

  const region_cases = [];
  const region_deaths = [];
  const region_recovered = [];
  const map = new Map();
  for (const item of country_data) {
    if (!map.has(item.date)) {
      map.set(item.date, true);
      var Obj = {};
      Obj['date'] = item.date;
      Obj[item.country] = item['cases'];
      region_cases.push(Obj);

      var Obj2 = {};
      Obj2['date'] = item.date;
      Obj2[item.country] = item['deaths'];
      region_deaths.push(Obj2);

      var Obj3 = {};
      Obj3['date'] = item.date;
      Obj3[item.country] = item['recovered'];
      region_recovered.push(Obj3);
    } else if (map.has(item.date)) {
      var key = region_cases.findIndex(x => x.date === item.date);
      region_cases[key][item.country] = item['cases'];
      region_deaths[key][item.country] = item['deaths'];
      region_recovered[key][item.country] = item['recovered'];
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontWeight: 300 }}>{country_name}</h1>
      <br />
      <CountryInfo region_data={country_data} />
      <br />
      <h2 style={{ fontWeight: 300 }}>Cases</h2>
      <br />
      <br />
      <RenderSimpleCharts
        region_data={region_cases}
        country_name={country_name}
        country={country}
        isFetching={isFetching}
        field="cases"
        title="Cases"
        color="rgb(102, 153, 255)"
      />
      <br />
      <hr />
      <h2 style={{ fontWeight: 300 }}>Deaths</h2>
      <br />
      <RenderSimpleCharts
        region_data={region_deaths}
        country_name={country_name}
        country={country}
        isFetching={isFetching}
        field="deaths"
        title="Deaths"
        color="rgb(255, 102, 102)"
      />
      <hr />
      <h2 style={{ fontWeight: 300 }}>Recoveries</h2>
      <br />
      <RenderSimpleCharts
        region_data={region_recovered}
        country_name={country_name}
        country={country}
        isFetching={isFetching}
        field="recovered"
        title="Recoveries"
        color="rgb(13, 215, 73)"
      />
    </div>
  );
}

export default SimpleCommonChart;
