import React from 'react';
import { Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip, Label, ArgumentAxis } from 'devextreme-react/chart';
import { countrydata } from '../../shared/allcountries';



function BarChart({country}){



    const customizeTooltip = (arg) =>{
        return {
            text: `${arg.seriesName} cases: ${arg.valueText}`
        };
    }



    for (var i in countrydata[country].slice(2, (countrydata[country].length))) {
        if (new Date(countrydata[country][i].Date) !== "Invalid Date") {
            countrydata[country][i].Date = new Date(countrydata[country][i].Date)

        }

    }

    
    

        return (
            <React.Fragment>
            <Chart id="chart"
                title={`${country} Stacked Bar Chart`}
                    dataSource={countrydata[country].slice(2, (countrydata[country].length))}
                >

                <CommonSeriesSettings
                    argumentField="Date"
                    type="stackedBar"
                >
                        <Label visible={false} workdaysOnly={false} format="shortDate">
                          
                    </Label>
                </CommonSeriesSettings>
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
              
                {
                    Object.keys(countrydata[country][0]).slice(2, ((Object.keys(countrydata[country][0])).length)).map((x)=>{
                        return(
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




export default BarChart;