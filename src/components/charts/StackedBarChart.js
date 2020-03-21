import React from 'react';
import { Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip, Label, ArgumentAxis } from 'devextreme-react/chart';


function StackedBarChart(props) {

    const { country_name, region_data, region_names, title } = props;

    const customizeTooltip = (arg) => {
        return {
            text: `${arg.seriesName} cases: ${arg.valueText}`
        };
    }

    for (var i in region_data) {
        if (new Date(region_data[i].date) !== "Invalid Date") {
            region_data[i].date = new Date(region_data[i].date)
        }
    }

    return (
        <React.Fragment>
            <Chart id="chart"
                title={`${country_name} Stacked Bar Chart (${title})`}
                dataSource={region_data}
            >
                <CommonSeriesSettings
                    argumentField="date"
                    type="stackedBar"
                    dataType="date"
                >
                </CommonSeriesSettings>
                <ArgumentAxis
                    workdaysOnly={false}
                >
                    <Label format="shortDate" />

                </ArgumentAxis>
                <ValueAxis position="left" format="integer">
                    <Title text="Cases" />
                </ValueAxis>
                <Legend
                    verticalAlignment="bottom"
                    horizontalAlignment="center"
                    itemTextPosition="top"
                />
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
                <Export enabled={true} />
                <Tooltip
                    enabled={true}
                    location="edge"
                    customizeTooltip={customizeTooltip}
                />
            </Chart>
        </React.Fragment>
    )

}


export default StackedBarChart;