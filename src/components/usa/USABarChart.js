import React from 'react';

import { Chart, Series, Label } from 'devextreme-react/chart';

const USABarChart = ({ data }) => {
  var regions_data = [];
  for (var i in data) {
    var d = {
      region: data[i].regions_name.toUpperCase(),
      cases: parseInt(data[i].cases),
    };
    regions_data.push(d);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Confirmed Cases by Regions</h4>
      <Chart id="chart" dataSource={regions_data}>
        <Series
          valueField="cases"
          argumentField="region"
          name="cases"
          type="bar"
          color="#ffaa66"
          
        >
          <Label
            position="outside"
            rotation={60}
            visible={false}
            showForZeroValues={true} />
          </Series>

      </Chart>
    </div>
  );
};

export default USABarChart;
