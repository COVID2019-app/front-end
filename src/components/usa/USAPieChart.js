import React from "react";

import PieChart, {
  Series,
  Label,
  Margin,
  Export,
  Legend,
  Animation
} from 'devextreme-react/pie-chart';

function formatText(arg) {
  return `${arg.argumentText} (${arg.percentText})`;
}

const USAPieChart = ({data}) => {
    var regions_data = []
    for (var i in data) {
        var d = {
          region: data[i].region_name.toUpperCase(),
          confirmed_cases: data[i].confirmed
        };
        regions_data.push(d)
    }

    return (
      <div style={{ textAlign: "center" }}>
        <h4>Confirmed Cases by Regions</h4>
        <PieChart
          id="pie"
          dataSource={regions_data}
          palette="Bright"
          resolveLabelOverlapping="shift"
        >
          <Series argumentField="region" valueField="confirmed_cases">
            <Label visible={true} customizeText={formatText} />
          </Series>
          <Margin bottom={20} />
          <Export enabled={true} />
          <Legend visible={false} />
          <Animation enabled={false} />
        </PieChart>
      </div>
    );
  
}

export default USAPieChart;
