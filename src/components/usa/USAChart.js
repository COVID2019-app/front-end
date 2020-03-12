import React from "react";

import Chart, {
  ArgumentAxis,
  Label,
  Legend,
  Series
} from "devextreme-react/chart";

import { USAComfirmedData } from "./region_confirm_data";

const USAChart=()=> {
  
    return (
      <Chart
        title="USA Comfirmed Case by Regions"
        dataSource={USAComfirmedData}
        id="chart"
      >
        <ArgumentAxis tickInterval={10}>
          <Label format="decimal" />
        </ArgumentAxis>

        <Series type="bar" />

        <Legend visible={false} />
      </Chart>
    );
  
}

export default USAChart;
