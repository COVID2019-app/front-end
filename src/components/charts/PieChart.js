import React from 'react';
import PieChart, {
    Series,
    Label,
    Connector,
    Size,
    Export
} from 'devextreme-react/pie-chart';

import { countrydata } from '../../shared/allcountries';


function CountryPieChart ({country}){

    var pieData = []
    var y = countrydata[country][0]
    var keys = Object.keys(countrydata[country][0]).slice(2, ((Object.keys(countrydata[country][0])).length))
    for (var i in keys) {
        pieData.push({
            region: keys[i],
            cases: y[keys[i]]
        })

    }


    function pointClickHandler (e){
        this.toggleVisibility(e.target);
    }

    function legendClickHandler(e) {
        let arg = e.target;
        let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

        this.toggleVisibility(item);
    }

    //function toggleVisibility(item) {
    //    item.isVisible() ? item.hide() : item.show();
    //}

        return(
            <PieChart
                id="pie"
                dataSource={pieData}
                palette="Bright"
                title="Cases by Region"
                onPointClick={pointClickHandler}
                onLegendClick={legendClickHandler}
            >
                <Series
                    argumentField="region"
                    valueField="cases"
                >
                    <Label visible={true}>
                        <Connector visible={true} width={1} />
                    </Label>
                </Series>

                <Size width={500} />
                <Export enabled={true} />
            </PieChart>

        )
  
     
        }

export default CountryPieChart