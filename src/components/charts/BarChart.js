import React, { useEffect } from 'react';
import { getCountryRegions } from '../../store/actions'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip, Label, ArgumentAxis } from 'devextreme-react/chart';



function BarChart(props) {

    const { getCountryRegions, region, country } = props;
    useEffect(() => {
        getCountryRegions(country);
    }, [getCountryRegions, country])

    console.log("region", region)

    if (country === 8) {
        var country_name = "USA"
    } else if (country === 2) {
        country_name = "China"
    } else if (country === 25) {
        country_name = "Italy"
    }

    const customizeTooltip = (arg) => {
        return {
            text: `${arg.seriesName} cases: ${arg.valueText}`
        };
    }

    for (var i in region) {
        if (new Date(region[i].date_of_case) !== "Invalid Date") {
            region[i].date_of_case = new Date(region[i].date_of_case)
        }
    }


    return (
        <React.Fragment>
            <Chart id="chart"
                title={`${country_name} Stacked Bar Chart`}
                dataSource={region}
            >

                <CommonSeriesSettings
                    argumentField="date_of_case"
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
                    region.map((x) => {

                        return (
                            <Series
                                key={x.regions_id}
                                valueField="confirmed_cases"
                                name={x.regions_name}
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


const mapStateToProps = state => {
    return {
        region: state.region
    };
};
export default withRouter(connect(mapStateToProps, { getCountryRegions })(BarChart));