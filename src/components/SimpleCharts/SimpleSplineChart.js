import React from 'react';
//import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  CommonAxisSettings,
  Grid,
  Export,
  Legend,
  Margin,
  Tooltip,
  Label,
  ValueAxis,
  Title,
  TickInterval,
} from 'devextreme-react/chart';

function SimpleSplineChart(props) {
  const { country_name, region_data, title, color, field } = props;

  var type = 'spline';
  //var types = ['spline', 'stackedspline', 'fullstackedspline']

  const customizeTooltip = arg => {
    return {
      text: `${field.replace('_', ' ')}: ${arg.valueText}`,
    };
  };

  const new_region_data = [];
  for (var i in region_data) {
    if (new Date(region_data[i].date) !== 'Invalid Date') {
      new_region_data.push({
        arg: new Date(region_data[i].date),
        val: region_data[i][country_name],
      });
    }
  }

  return (
    <div className="col-lg-6">
      <Chart
        dataSource={new_region_data}
        title={`${country_name} Spline Chart (${title})`}
      >
        <CommonSeriesSettings argumentField="arg" type={type} />
        <CommonAxisSettings>
          <Grid visible={true} />
        </CommonAxisSettings>

        <Margin bottom={20} />
        <ArgumentAxis>
          <Label
            wordWrap="breakWord"
            overlappingBehavior="rotate"
            format="shortDate"
          />
          <TickInterval days={3} />
        </ArgumentAxis>
        <ValueAxis position="left">
          <Title text={title} />
        </ValueAxis>

        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="top"
          visible={false}
        />
        <Export enabled={true} />
        <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
        <Series
          key={country_name}
          valueField="val"
          name={field}
          color={color}
        />
      </Chart>
      {/*Need to figure out how to style this
                    <div className="row justify-content-center">
                    <div className="options container" style={{marginTop: '100px'}}>
                        <div className="caption">Options</div>
                        <div className="option">
                            <span>Series Type </span>
                            <SelectBox
                                dataSource={this.types}
                                value={this.state.type}
                                onValueChanged={this.handleChange}
                            />
                        </div>
                    </div>
                    </div>*/}
    </div>
  );
}

export default SimpleSplineChart;
