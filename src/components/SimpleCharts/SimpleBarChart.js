import React from 'react';
import {
  Chart,
  Series,
  CommonSeriesSettings,
  Legend,
  ValueAxis,
  Title,
  Export,
  Tooltip,
  Label,
  ArgumentAxis,
  TickInterval,
} from 'devextreme-react/chart';

function SimpleBarChart(props) {
  const { country_name, region_data, title, field, color } = props;

  const customizeTooltip = arg => {
    return {
      text: `${field}: ${arg.valueText}`,
    };
  };

  for (var i in region_data) {
    if (new Date(region_data[i].date) !== 'Invalid Date') {
      region_data[i].date = new Date(region_data[i].date);
    }
  }

  return (
    <React.Fragment>
      <Chart
        id="chart"
        title={`${country_name} Bar Chart (${title})`}
        dataSource={region_data}
      >
        <CommonSeriesSettings
          argumentField="date"
          type="Bar"
          dataType="date"
        ></CommonSeriesSettings>
        <ArgumentAxis workdaysOnly={false}>
          <Label format="shortDate" overlappingBehavior="rotate" />
          <TickInterval days={3} />
        </ArgumentAxis>
        <ValueAxis position="left" format="integer">
          <Title text={title} />
        </ValueAxis>
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="top"
          visible={false}
        />
        <Series
          key={country_name}
          valueField={country_name}
          name={field}
          color={color}
        />

        <Export enabled={true} />
        <Tooltip
          enabled={true}
          location="edge"
          customizeTooltip={customizeTooltip}
        />
      </Chart>
    </React.Fragment>
  );
}

export default SimpleBarChart;
