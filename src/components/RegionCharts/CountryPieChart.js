import React from 'react';
import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
  Legend,
  SmallValuesGrouping,
  Tooltip,
} from 'devextreme-react/pie-chart';

function CountryPieChart(props) {
  const {
    region_data,
    field,
    title,
  } = props;

  const customizeTooltip = arg => {
    return {
      text: `Total ${field.replace('_', ' ')}: ${arg.valueText}`,
      color: '#000000',
      borderColor: '#000000',
      fontColor: '#ffffff',
    };
  };

  var data = [];

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
          {field === "cases" ? (
            <SmallValuesGrouping threshold={1000} mode="smallValueThreshold" />
          ) : (
              <SmallValuesGrouping threshold={5} mode="smallValueThreshold" />
          )}
        </Series>
        <Legend horizontalAlignment="center" verticalAlignment="bottom" />

        <Size width={300} />
        <Export enabled={true} />
        <Tooltip
          enabled={true}
          location="edge"
          customizeTooltip={customizeTooltip}
        />
      </PieChart>
    </div>
  );
}

export default CountryPieChart;
