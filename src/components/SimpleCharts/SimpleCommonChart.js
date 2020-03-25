import React, { useEffect } from 'react';
import SimpleBarChart from './SimpleBarChart';
import SimpleSplineChart from './SimpleSplineChart';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCountryRegions } from '../../store/actions';
//import Loading from '../Loading';

const RenderSimpleCharts = props => {
  const {
    country_name,
    field,
    title,
    region_data,
    region_names,
    color,
  } = props;

  return (
    <React.Fragment>
      <SimpleBarChart
        region_data={region_data}
        country_name={country_name}
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
        field={field}
        region_names={region_names}
        title={title}
        color={color}
      />
    </React.Fragment>
  );
};

function SimpleCommonChart(props) {
  const { getCountryRegions, region, data, isFetching, country } = props;

  useEffect(() => {
    getCountryRegions(data.id);
  }, [getCountryRegions, data.id]);

  const region_cases = [];
  const region_deaths = [];
  const region_recovered = [];
  const map = new Map();
  for (const item of region) {
    if (!map.has(item.date_of_case)) {
      map.set(item.date_of_case, true);
      var Obj = {};
      Obj['date'] = item.date_of_case;
      Obj[item.regions_name] = item['confirmed_cases'];
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
      region_cases[key][item.regions_name] = item['confirmed_cases'];
      if (data.deaths) {
        region_deaths[key][item.regions_name] = item['deaths'];
      }
      if (data.recoveries) {
        region_recovered[key][item.regions_name] = item['recovered'];
      }
    }
  }

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
      <RenderSimpleCharts
        region_data={region_cases}
        country_name={data.country}
        isFetching={isFetching}
        field="confirmed_cases"
        title="Cases"
        color="rgb(102, 153, 255)"
      />
      <br />
      <hr />
      <h2 style={{ fontWeight: 300 }}>Deaths</h2>
      <br />
      <RenderSimpleCharts
        region_data={region_deaths}
        country_name={data.country}
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
        country_name={data.country}
        isFetching={isFetching}
        field="recovered"
        title="Recoveries"
        color="rgb(13, 215, 73)"
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    region: state.region,
    isFetching: state.isFetching,
  };
};
export default withRouter(
  connect(mapStateToProps, { getCountryRegions })(SimpleCommonChart)
);
