import React from 'react';
import StackedBarChart from './StackedBarChart';
import SplineChart from './SplineChart';
import CountryPieChart from './CountryPieChart';
import RegionBarChart from './RegionBarChart';
import CountryTable from './CountryTable';

const RenderCharts = props => {
  const {
    country,
    field,
    title,
    region_sum,
    isFetching,
    region_data,
    region_names,
    few_regions,
    not_cumu,
  } = props;

  return (
    <React.Fragment>
      <CountryTable
        region_data={region_data}
        field={field}
        title={title}
        isFetching={isFetching}
        region_names={region_names}
      />
      <br />
      <br />
      <RegionBarChart
        region_data={region_data}
        region_sum={region_sum}
        field={field}
        title={title}
        not_cumu={not_cumu}
      />
      <br />
      <br />
      <CountryPieChart
        region_sum={region_sum}
        region_data={region_data}
        field={field}
        title={title}
        few_regions={few_regions}
        not_cumu={not_cumu}
      />
      <br />
      <br />
      <StackedBarChart
        region_data={region_data}
        country={country}
        field={field}
        region_names={region_names}
        title={title}
      />
      <br />
      <br />
      <SplineChart
        region_data={region_data}
        country={country}
        field={field}
        region_names={region_names}
        title={title}
      />
    </React.Fragment>
  );
};

function CommonChart(props) {
  const {

    isFetching,
    country, 
    country_name, 
    country_data,
  } = props;



  const region_names = [...new Set(country_data.map(x => x.state))];

  const compare = (a, b) => {
    let comparison = 0
    a.date > b.date ? comparison = 1 : comparison = -1
    return comparison;
  }

  country_data.sort(compare)

  const region_sum = []
  region_names.map(z => {
    region_sum.push(country_data[country_data.map(y => y.state).lastIndexOf(z)])
    
    return (region_sum)
  }
  )
  
  const region_cases = [];
  const region_deaths = [];
  const region_recovered = [];
  const map = new Map();
  for (const item of country_data) {
    if (!map.has(item.date)) {
      map.set(item.date, true);
      var Obj = {};
      Obj['date'] = item.date;
      !isNaN(parseInt(item['cases'])) ? Obj[item.state] = parseInt(item['cases']) : Obj[item.state] = null
      region_cases.push(Obj);

      var Obj2 = {};
      Obj2['date'] = item.date;
      !isNaN(parseInt(item['deaths'])) ? Obj2[item.state] = parseInt(item['deaths']) : Obj2[item.state] = null
      region_deaths.push(Obj2);

      var Obj3 = {};
      Obj3['date'] = item.date;
      !isNaN(parseInt(item['recovered'])) ? Obj3[item.state] = parseInt(item['recovered']) : Obj3[item.state] = null
      region_recovered.push(Obj3);

    } else if (map.has(item.date)) {
      var key = region_cases.findIndex(x => x.date === item.date);
      !isNaN(parseInt(item['cases'])) ?  region_cases[key][item.state] = parseInt(item['cases']) :region_cases[key][item.state] = null
      !isNaN(parseInt(item['deaths'])) ? region_deaths[key][item.state] = parseInt(item['deaths']) : region_deaths[key][item.state] = null
      !isNaN(parseInt(item['recovered'])) ? region_recovered[key][item.state] = parseInt(item['recovered']) : region_recovered[key][item.state] = null
    }
  }


for (var j in region_cases) {
  if (new Date(region_cases[j].date) !== 'Invalid Date') {
    region_cases[j].date = new Date(
      region_cases[j].date
    )
    if (new Date(region_deaths[j].date) !== 'Invalid Date') {
      region_deaths[j].date = new Date(
        region_deaths[j].date
      )
    }
    if (new Date(region_recovered[j].date) !== 'Invalid Date') {
      region_deaths[j].date = new Date(
        region_deaths[j].date
      )
    }
  }
}


return (
  <div style={{ textAlign: 'center' }}>
    <h1 style={{ fontWeight: 300 }}>{country_name} {"(" + country + ")"}</h1>
    <br />
    <br />
    <h2 style={{ fontWeight: 300 }}>Cases</h2>
    <br />
    <RenderCharts
      region_sum={region_sum}
      regions={true}
      region_data={region_cases}
      region_names={region_names}
      country={country}
      country_name={country_name}
      isFetching={isFetching}
      field="cases"
      title="Cases"
    />
    <br />
    <React.Fragment>
      <hr />
      <h2 style={{ fontWeight: 300 }}>Deaths</h2>
      <br />
      <RenderCharts
        regions={true}
        region_sum={region_sum}
        region_data={region_deaths}
        region_names={region_names}
        country={country}
        country_name={country_name}
        isFetching={isFetching}
        field="deaths"
        title="Deaths"
      />
    </React.Fragment>
    <React.Fragment>
      <hr />
      <h2 style={{ fontWeight: 300 }}>Recoveries</h2>
      <br />
      <RenderCharts
        regions={true}
        region_sum={region_sum}
        region_data={region_recovered}
        region_names={region_names}
        country={country}
        isFetching={isFetching}
        field="recovered"
        title="Recoveries"
      />
    </React.Fragment>
  </div>
);
}


export default CommonChart;
