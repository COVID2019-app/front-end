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
 

    return (
      <div style={{ textAlign: "center" }}>
        <h4>Confirmed Cases by Regions</h4>
        <PieChart
          id="pie"
          dataSource={data}
          palette="Bright"
          resolveLabelOverlapping="shift"
        >
          <Series argumentField="regions_name" valueField="cases">
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
