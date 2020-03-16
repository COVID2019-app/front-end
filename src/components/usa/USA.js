import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsRegions } from "../../store/actions/index";
import Loading from "../Loading";
import UsaRegionsChart from "./UsaRegionsChart";
import USABarChart from "./USABarChart";
import USAPieChart from "./USAPieChart";
import SplineChart from "../charts/SplineChart";
import BarChart from "../charts/BarChart";


function USA(props) {
  const { getUsRegions, usa_region, isFetching } = props;
  useEffect(() => {
    getUsRegions();
  }, [getUsRegions]);
  if (isFetching) {
    return <Loading />;
  } else {
    return (
<div>
          <UsaRegionsChart data={usa_region} />
          <USABarChart data={usa_region} />
          <USAPieChart data={usa_region} />
          <BarChart country="USA" /> 
          <SplineChart country='USA' />
</div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    usa_region: state.usa_region
  };
};
export default connect(mapStateToProps, {
  getUsRegions
})(USA);

