import React from 'react';

import { Chart, Series, Label, ArgumentAxis } from 'devextreme-react/chart';

const RegionBarChart = props => {
  const { region_sum, field, title, not_cumu, region_data } = props;

  var data = [];
  if (not_cumu) {
    for (var i in region_sum) {
      var d = {
        region: region_sum[i].regions_name,
        cases: parseInt(region_sum[i][`${field}`]),
      };
      data.push(d);
    }
  } else {
    if (region_data.length > 1) {
      Object.keys(region_data[region_data.length - 2])
        .slice(1, Object.keys(region_data[region_data.length - 2]).length)
        .map(x => {
          var d = {
            region: x,
            cases: region_data[region_data.length - 2][x],
          };
          data.push(d);
          return data;
        });
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Confirmed {title} by Regions</h4>
      <Chart id="chart" dataSource={data}>
        <Series
          valueField="cases"
          argumentField="region"
          name={field}
          type="bar"
          color="#ffaa66"
        >
          <Label
            position="outside"
            rotation={60}
            visible={false}
            showForZeroValues={true}
          />
        </Series>
        <ArgumentAxis>
          <Label wordWrap="breakWord" overlappingBehavior="rotate" />
        </ArgumentAxis>
      </Chart>
    </div>
  );
};

export default RegionBarChart;
