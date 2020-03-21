import React from 'react';
import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
  Legend,
} from 'devextreme-react/pie-chart';

import { countrydata } from '../../shared/allcountries';

function CountryPieChart({ country }) {
  var pieData = [];
  var y = countrydata[country][0];
  var keys = Object.keys(countrydata[country][0]).slice(
    1,
    Object.keys(countrydata[country][0]).length
  );
  for (var i in keys) {
    pieData.push({
      region: keys[i],
      cases: y[keys[i]],
    });
  }

  function pointClickHandler(e) {
    toggleVisibility(e.target);
  }

  function legendClickHandler(e) {
    let arg = e.target;
    let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    toggleVisibility(item);
  }

  function toggleVisibility(item) {
    item.isVisible() ? item.hide() : item.show();
  }

  return (
    <div className="row justify-content-center" style={{ height: '650px' }}>
      <PieChart
        id="pie"
        dataSource={pieData}
        palette="Bright"
        title="Cases by Region"
        onPointClick={pointClickHandler}
        onLegendClick={legendClickHandler}
      >
        <Series argumentField="region" valueField="cases">
          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>

        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="top"
        />

        <Size width={300} />
        <Export enabled={true} />
      </PieChart>
    </div>
  );
}

export default CountryPieChart;
