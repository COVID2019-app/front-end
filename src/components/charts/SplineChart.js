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
  Title
} from 'devextreme-react/chart';

function SplineChart(props) {

  const {country_name, region_data, region_names, title } = props;


  var type = 'spline'
  //var types = ['spline', 'stackedspline', 'fullstackedspline']


  return (
    <React.Fragment>
      <Chart
        palette="Violet"
        dataSource={region_data}
        title={`${country_name} Spline Chart by Region (${title})`}
      >
        <CommonSeriesSettings
          argumentField="date"
          type={type}
        />
        <CommonAxisSettings>
          <Grid visible={true} />
        </CommonAxisSettings>
        {
          region_names.map((x) => {

            return (
              <Series
                key={x}
                valueField={x}
                name={x}
              />
            )
          })
        }
        <Margin bottom={20} />
        <ArgumentAxis
          workdaysOnly={false}

        >
          <Label format="shortDate" />

        </ArgumentAxis>
        <ValueAxis position="left">
          <Title text="Cases" />
        </ValueAxis>
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

export default SplineChart;