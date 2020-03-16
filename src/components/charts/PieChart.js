import React from 'react';
import PieChart, {
    Series,
    Label,
    Connector,
    Size,
    Export
} from 'devextreme-react/pie-chart';

import { countrydata } from '../../shared/allcountries';


var pieData = []
var y = countrydata.USA[0]
var keys = Object.keys(countrydata.USA[0]).slice(2, ((Object.keys(countrydata.USA[0])).length))
var i
for (i in keys) {
    pieData.push({
        region: keys[i],
        cases: y[keys[i]]
    })

}

class CountryPieChart extends React.Component {

    constructor(props) {
        super(props);
        this.pointClickHandler = this.pointClickHandler.bind(this);
        this.legendClickHandler = this.legendClickHandler.bind(this);
    }

    render() {
        return(
            <PieChart
                id="pie"
                dataSource={pieData}
                palette="Bright"
                title="Cases by Region"
                onPointClick={this.pointClickHandler}
                onLegendClick={this.legendClickHandler}
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
  
        pointClickHandler(e) {
            this.toggleVisibility(e.target);
        }

        legendClickHandler(e) {
            let arg = e.target;
            let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

            this.toggleVisibility(item);
        }

        toggleVisibility(item) {
            item.isVisible() ? item.hide() : item.show();
        }
        }

export default CountryPieChart