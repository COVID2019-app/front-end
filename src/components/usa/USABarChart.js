import React from 'react';

import { Chart, Series } from 'devextreme-react/chart';

const USABarChart = ({ data }) => {
  var regions_data = [];
  for (var i in data) {
    var d = {
      region: data[i].region_name.toUpperCase(),
      confirmed_cases: data[i].confirmed,
    };
    regions_data.push(d);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Confirmed Cases by Regions</h4>
      <Chart id="chart" dataSource={regions_data}>
        <Series
          valueField="confirmed_cases"
          argumentField="region"
          name="confirmed_cases"
          type="bar"
          color="#ffaa66"
        />
      </Chart>
    </div>
  );
};

export default USABarChart;
