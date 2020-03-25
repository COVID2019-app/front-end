import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import CommonChart from './charts/CommonChart';
import { countrylist } from '../shared/countrylist';
import { getCountryRegions, getRegionSum } from '../store/actions';

function CountryCharts(props) {
  const {
    getRegionSum,
    getCountryRegions,
    region,
    country,
    region_sum,
    isFetching,
  } = props;

  var data;
  for (var i in countrylist) {
    if (countrylist[i]['country'] === country) {
      data = countrylist[i];
    }
  }

  useEffect(() => {
    getCountryRegions(data.id);
    getRegionSum(data.id);
  }, [getCountryRegions, getRegionSum, data.id]);

  const region_names = [...new Set(region.map(x => x.regions_name))];

  const region_cases = [];
  const region_deaths = [];
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
    } else if (map.has(item.date_of_case)) {
      var key = region_cases.findIndex(x => x.date === item.date_of_case);
      region_cases[key][item.regions_name] = item['confirmed_cases'];
      if (data.deaths) {
        region_deaths[key][item.regions_name] = item['deaths'];
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
  }

  if (!data) {
    return <Redirect to="/" />;
  } else {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontWeight: 300 }}>{country}</h1>
        <br />
        <br />
        <h2 style={{ fontWeight: 300 }}>Cases</h2>
        <br />
        <CommonChart
          region_sum={region_sum}
          regions={data.regions}
          region_data={region_cases}
          region_names={region_names}
          country_name={data.country}
          isFetching={isFetching}
          field="confirmed_cases"
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
            <CommonChart
              regions={data.regions}
              region_sum={region_sum}
              region_data={region_deaths}
              region_names={region_names}
              country_name={data.country}
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    region: state.region,
    region_sum: state.region_sum,
    isFetching: state.isFetching,
  };
};
export default withRouter(
  connect(mapStateToProps, { getCountryRegions, getRegionSum })(CountryCharts)
);
