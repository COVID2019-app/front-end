import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCountryRegions, getRegionSum } from '../../store/actions';
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
    getRegionSum,
    getCountryRegions,
    region,
    data,
    region_sum,
    isFetching,
    country,
  } = props;

  useEffect(() => {
    getCountryRegions(data.id);
    getRegionSum(data.id);
  }, [getCountryRegions, getRegionSum, data.id]);

  const region_names = [...new Set(region.map(x => x.regions_name))];

  const region_cases = [];
  const region_deaths = [];
  const region_recovered = [];
  const map = new Map();
  for (const item of region) {
    if (!map.has(item.date_of_case)) {
      map.set(item.date_of_case, true);
      var Obj = {};
      Obj['date'] = item.date_of_case;
      Obj[item.regions_name] = item['cases'];
      region_cases.push(Obj);
      if (data.deaths) {
        var Obj2 = {};
        Obj2['date'] = item.date_of_case;
        Obj2[item.regions_name] = item['deaths'];
        region_deaths.push(Obj2);
      }
      if (data.recoveries) {
        var Obj3 = {};
        Obj3['date'] = item.date_of_case;
        Obj3[item.regions_name] = item['recovered'];
        region_recovered.push(Obj3);
      }
    } else if (map.has(item.date_of_case)) {
      var key = region_cases.findIndex(x => x.date === item.date_of_case);
      region_cases[key][item.regions_name] = item['cases'];
      if (data.deaths) {
        region_deaths[key][item.regions_name] = item['deaths'];
      }
      if (data.recoveries) {
        region_recovered[key][item.regions_name] = item['recovered'];
      }
    }
  }
  console.log('recoveries', region_recovered);

  for (var j in region_cases) {
    if (new Date(region_cases[j].date) !== 'Invalid Date') {
      region_cases[j].date = new Date(
        region_cases[j].date
      ).toLocaleString('en-US', { timeZone: 'Asia/Brunei' });
    }
    if (data.deaths) {
      if (new Date(region_deaths[j].date) !== 'Invalid Date') {
        region_deaths[j].date = new Date(
          region_deaths[j].date
        ).toLocaleString('en-US', { timeZone: 'Asia/Brunei' });
      }
    }
    if (data.recoveries) {
      if (new Date(region_recovered[j].date) !== 'Invalid Date') {
        region_deaths[j].date = new Date(
          region_deaths[j].date
        ).toLocaleString('en-US', { timeZone: 'Asia/Brunei' });
      }
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontWeight: 300 }}>{country}</h1>
      <br />
      <br />
      <h2 style={{ fontWeight: 300 }}>Cases</h2>
      <br />
      <RenderCharts
        region_sum={region_sum}
        regions={data.regions}
        region_data={region_cases}
        region_names={region_names}
        country={data.country}
        isFetching={isFetching}
        field="cases"
        title="Cases"
        few_regions={data.few_regions}
        not_cumu={data.not_cumu}
      />
      <br />
      {data.deaths ? (
        <React.Fragment>
          <hr />
          <h2 style={{ fontWeight: 300 }}>Deaths</h2>
          <br />
          <RenderCharts
            regions={data.regions}
            region_sum={region_sum}
            region_data={region_deaths}
            region_names={region_names}
            country={data.country}
            isFetching={isFetching}
            field="deaths"
            title="Deaths"
            few_regions={data.few_regions}
            not_cumu={data.not_cumu}
          />
        </React.Fragment>
      ) : (
        <div></div>
      )}
      {data.recoveries ? (
        <React.Fragment>
          <hr />
          <h2 style={{ fontWeight: 300 }}>Recoveries</h2>
          <br />
          <RenderCharts
            regions={data.regions}
            region_sum={region_sum}
            region_data={region_recovered}
            region_names={region_names}
            country={data.country}
            isFetching={isFetching}
            field="recovered"
            title="Recoveries"
            few_regions={data.few_regions}
            not_cumu={data.not_cumu}
          />
        </React.Fragment>
      ) : (
        <div></div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    region: state.region,
    region_sum: state.region_sum,
    isFetching: state.isFetching,
  };
};
export default withRouter(
  connect(mapStateToProps, { getCountryRegions, getRegionSum })(CommonChart)
);
