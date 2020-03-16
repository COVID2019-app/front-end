import React from 'react';
import SelectBox from 'devextreme-react/select-box';
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
import { countrydata } from '../../shared/allcountries';

class SplineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'spline'
        };
        this.types = ['spline', 'stackedspline', 'fullstackedspline'];
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <Chart
                    palette="Violet"
                    dataSource={countrydata.USA.slice(2, (countrydata.USA.length))}
                    title="USA Regions Spline Chart"
                >
                    <CommonSeriesSettings
                        argumentField="Date"
                        type={this.state.type}
                    />
                    <CommonAxisSettings>
                        <Grid visible={true} />
                    </CommonAxisSettings>
                    {
                        Object.keys(countrydata.USA[4]).slice(2, ((Object.keys(countrydata.USA[4])).length)).map((x) => {
                            return (
                                <Series
                                    key={x}
                                    valueField={x}
                                    name={x}
                                />
                            )
                        }
                        )}
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

    handleChange(e) {
        this.setState({ type: e.value });
    }
}

export default SplineChart;
