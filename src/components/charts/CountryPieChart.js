import React from 'react';
import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
  Legend,
  SmallValuesGrouping,
} from 'devextreme-react/pie-chart';

function CountryPieChart(props) {
  const { region_sum, field, title, few_regions } = props;

  var data = [];
  for (var i in region_sum) {
    var d = {
      region: region_sum[i].regions_name,
      cases: region_sum[i][`${field}`],
    };
    data.push(d);
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
        dataSource={data}
        palette="Bright"
        title={`${title} by Region`}
        onPointClick={pointClickHandler}
        onLegendClick={legendClickHandler}
      >
        <Series argumentField="region" valueField="cases">
          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
          {few_regions === false ? (
            <SmallValuesGrouping threshold={400} mode="smallValueThreshold" />
          ) : (
            <div />
          )}
        </Series>
        <Legend horizontalAlignment="center" verticalAlignment="bottom" />

        <Size width={300} />
        <Export enabled={true} />
      </PieChart>
    </div>
  );
}

export default CountryPieChart;
