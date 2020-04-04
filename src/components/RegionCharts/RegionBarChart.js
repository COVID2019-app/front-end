import React from 'react';

import { Chart, Series, Label, ArgumentAxis, Legend, Tooltip, ValueAxis } from 'devextreme-react/chart';

const RegionBarChart = props => {
  const { field, title, region_data } = props;

  const customizeTooltip = arg => {
    return {
      text: `Total ${field.replace('_', ' ')}: ${arg.valueText}`,
      color: '#000000',
      borderColor: '#000000',
      fontColor: '#ffffff',
    };
  };


  var data = [];
    if (region_data.length > 1) {
      Object.keys(region_data[region_data.length - 2])
        .slice(1, Object.keys(region_data[region_data.length - 2]).length)
        .map(x => {
          var d = {
            region: x,
            cases: parseInt(region_data[region_data.length - 2][x]),
          };
          data.push(d);
          return data;
        });
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Chart id="chart" 
      dataSource={data}
        title={`Confirmed ${title} by Regions`}>

        <Series
          valueField="cases"
          argumentField="region"
          name={field}
          type="bar"
          color="#00c0c7"
        >
          <Label
            position="outside"
            rotation={60}
            visible={false}
            showForZeroValues={true}
          />
        </Series>
        <Legend
          visible={false}
        />
        <ArgumentAxis>
          <Label wordWrap="breakWord" overlappingBehavior="rotate" />
        </ArgumentAxis>
        <ValueAxis
          position="left"
          format="integer"
        ></ValueAxis>
        <Tooltip
          enabled={true}
          location="edge"
          customizeTooltip={customizeTooltip}
        />
      </Chart>
    </div>
  );
};

export default RegionBarChart;
