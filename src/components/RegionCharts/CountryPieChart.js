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
  const {
    region_sum,
    region_data,
    not_cumu,
    field,
    title,
    few_regions,
  } = props;

  var data = [];

  if (not_cumu) {
    for (var i in region_sum) {
      var d = {
        region: region_sum[i].regions_name,
        cases: region_sum[i][`${field}`],
      };
      data.push(d);
    }
  } else {
    //if (region_data.length>1){
    //  console.log(Object.keys(region_data[region_data.length - 1]).slice(1, Object.keys(region_data[region_data.length - 1]).length))

    //}
    if (region_data.length > 1) {
      Object.keys(region_data[region_data.length - 2])
        .slice(1, Object.keys(region_data[region_data.length - 2]).length)
        .map(x => {
          var d = {
            region: x,
            cases: region_data[region_data.length - 2][x],
          };
          data.push(d);
          return data;
        });
    }
  }
  console.log('data', data);

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
