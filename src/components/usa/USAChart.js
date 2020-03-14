import React, {useEffect } from "react";
import { connect } from 'react-redux';

import Chart, {
  ArgumentAxis,
  Label,
  Legend,
  Series
} from "devextreme-react/chart";

import { getUsRegions } from '../../store/actions/index';

const USAChart=(props)=> {



  const { getUsRegions, region_name/*, isFetching*/ } = props;
  useEffect(() => {
    getUsRegions();


  }, [getUsRegions])

  const data = []

  var x

  for(x in region_name){
    data.push({
      arg: region_name[x].iso_code,
      val: region_name[x].confirmed})
  }

  
    return (
      <Chart
        title="USA Confirmed Cases by Region"
        dataSource={data}
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

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    region_name: state.usa_region,
  };
};
export default connect(mapStateToProps, {
  getUsRegions,
})(USAChart);
