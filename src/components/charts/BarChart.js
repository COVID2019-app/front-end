import React from 'react';
import { Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip, Label, ArgumentAxis } from 'devextreme-react/chart';
import { countrydata } from '../../shared/allcountries';




var i

for (i in countrydata.USA.slice(2, (countrydata.USA.length))){
    if (new Date(countrydata.USA[i].Date)!=="Invalid Date"){
        countrydata.USA[i].Date = new Date(countrydata.USA[i].Date)

    }
    
}


class BarChart extends React.Component {
    customizeTooltip(arg) {
        return {
            text: `${arg.seriesName} years: ${arg.valueText}`
        };
    }
    

    render() {
        return (
            <React.Fragment>
            <Chart id="chart"
                title="USA Stacked Bar Chart"
                    dataSource={countrydata.USA.slice(2, (countrydata.USA.length))}
                onPointClick={this.onPointClick}>

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
                    Object.keys(countrydata.USA[0]).slice(2, ((Object.keys(countrydata.USA[0])).length)).map((x)=>{
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
                        customizeTooltip={this.customizeTooltip}
                    />
        
            </Chart>
            </React.Fragment>
            
        )
    }

}




export default BarChart;