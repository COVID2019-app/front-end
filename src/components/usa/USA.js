import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsRegions, getRegionSum } from "../../store/actions/index";
import Loading from "../Loading";
import UsaRegionsChart from "./UsaRegionsChart";
import USABarChart from "./USABarChart";
import USAPieChart from "./USAPieChart";
import SplineChart from "../charts/SplineChart";
import BarChart from "../charts/BarChart";


function USA(props) {
  const { getRegionSum, getUsRegions, region_sum, usa_region, isFetching } = props;
  useEffect(() => {
    getRegionSum(8);
    getUsRegions()
  }, [getRegionSum, getUsRegions]);
  
  /*if (isFetching) {
    return <Loading />;
  } else {*/
    return (
<div>
          <UsaRegionsChart data={usa_region} />
          <USABarChart data={region_sum} />
          <USAPieChart data={region_sum} />
          <BarChart country={8} /> 
          <SplineChart country='USA' />
</div>
    );
  }
//}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    usa_region: state.usa_region,
    region_sum: state.region_sum,
  };
};
export default connect(mapStateToProps, {
  getUsRegions, getRegionSum
})(USA);

