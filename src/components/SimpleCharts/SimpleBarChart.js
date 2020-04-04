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
  const { country, country_name, region_data, title, field, color } = props;


  const customizeTooltip = arg => {
    return {
      text: `${arg.argumentText.slice(4, 10)} \n${field.replace('_', ' ')}: ${arg.valueText}`,
      color: '#000000',
      borderColor: '#000000',
      fontColor: '#ffffff',

    };
  };

  var new_region_data = [];

  for (var i in region_data) {
    if (new Date(region_data[i].date) !== 'Invalid Date' && i > 0 && region_data[i][country]!=="") {
      new_region_data.push({
        arg: new Date(region_data[i].date),
        val: region_data[i][country] - region_data[parseInt(i) - 1][country],
      });
    }
  }

  return (
    <div className="col-lg-6">
      <Chart
        id="chart"
        title={`${country_name} Bar Chart, Daily Increases (${title})`}
        dataSource={new_region_data}
      >
        <CommonSeriesSettings
          argumentField="arg"
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
          key={country}
          valueField="val"
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
    </div>
  );
}

export default SimpleBarChart;
