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
  Size,
  TickInterval,
} from 'devextreme-react/chart';

function StackedBarChart(props) {
  const { country_name, region_data, region_names, title, field } = props;

  const customizeTooltip = arg => {
    return {
      text: `${arg.seriesName} ${field}: ${arg.valueText}`,
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
          type="stackedBar"
          dataType="date"
        ></CommonSeriesSettings>
        <ArgumentAxis workdaysOnly={false}>
          <Label format="shortDate" overlappingBehavior="rotate" />
          <TickInterval days={3} />
        </ArgumentAxis>
        <ValueAxis
          position="left"
          format="integer"
          autoBreaksEnabled={true}
          maxAutoBreakCount={2}
          breakStyle={{ line: 'waved' }}
        >
          <Title text={title} />
        </ValueAxis>
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="top"
          visible={true}
        />
        {region_names.map(x => {
          return <Series key={x} valueField={x} name={x} />;
        })}

        <Export enabled={true} />
        <Tooltip
          enabled={true}
          location="edge"
          customizeTooltip={customizeTooltip}
        />
        <Size height={600} />
      </Chart>
    </React.Fragment>
  );
}

export default StackedBarChart;
