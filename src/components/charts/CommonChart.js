import React from 'react';
import StackedBarChart from './StackedBarChart';
import SplineChart from './SplineChart';
import CountryPieChart from './CountryPieChart';
import RegionBarChart from './RegionBarChart';
import CountryTable from './CountryTable';
//import Loading from '../Loading';

function CommonChart(props) {
  const {
    country_name,
    field,
    title,
    region_sum,
    isFetching,
    region_data,
    region_names,
    few_regions,
    regions,
    not_cumu,
  } = props;

  /*if(isFetching){
        return(
            <Loading/>
        )
    }else{*/
  /* if (country_name === 'USA') {
    return (
      <React.Fragment>
        <RegionBarChart region_sum={region_sum} field={field} title={title} />
        <br />
        <br />
        <CountryPieChart
          region_sum={region_sum}
          field={field}
          title={title}
          few_regions={few_regions}
        />
        <br />
        <br />
        <StackedBarChart
          region_data={region_data}
          country_name={country_name}
          field={field}
          region_names={region_names}
          title={title}
        />
        <br />
        <br />
        <SplineChart
          region_data={region_data}
          country_name={country_name}
          field={field}
          region_names={region_names}
          title={title}
        />
      </React.Fragment>
    );
  } else*/ if (
    regions
  ) {
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
          country_name={country_name}
          field={field}
          region_names={region_names}
          title={title}
        />
        <br />
        <br />
        <SplineChart
          region_data={region_data}
          country_name={country_name}
          field={field}
          region_names={region_names}
          title={title}
        />
      </React.Fragment>
    );
  } else
    return (
      <React.Fragment>
        <StackedBarChart
          region_data={region_data}
          country_name={country_name}
          field={field}
          region_names={region_names}
          title={title}
        />
        <br />
        <br />
        <SplineChart
          region_data={region_data}
          country_name={country_name}
          field={field}
          region_names={region_names}
          title={title}
        />
      </React.Fragment>
    );
  //}
}

export default CommonChart;
