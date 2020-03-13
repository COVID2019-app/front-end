import React from "react";

import Chart, {
  ArgumentAxis,
  Label,
  Legend,
  Series
} from "devextreme-react/chart";

import { USAConfirmedData } from "./region_confirm_data";

const USAChart=()=> {
  
    return (
      <Chart
        title="USA Confirmed Cases by Region"
        dataSource={USAConfirmedData}
        id="chart"
      >
        <ArgumentAxis tickInterval={10}>
          <Label format="decimal" />
        </ArgumentAxis>

        <Series type="bar" />

        <Legend visible={true} />
      </Chart>
    );
  
}

export default USAChart;
