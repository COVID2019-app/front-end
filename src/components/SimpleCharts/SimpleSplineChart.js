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

  return (
    <React.Fragment>
      <Chart
        dataSource={region_data}
        title={`${country_name} Spline Chart (${title})`}
      >
        <CommonSeriesSettings argumentField="date" type={type} />
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
        <Series
          key={country_name}
          valueField={country_name}
          name={field}
          color={color}
        />
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="top"
        />
        <Export enabled={true} />
        <Tooltip enabled={true} />
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
    </React.Fragment>
  );
}

export default SimpleSplineChart;
