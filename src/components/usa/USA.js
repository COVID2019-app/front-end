import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsRegions } from "../../store/actions/index";
//import Loading from "../Loading";
import UsaRegionsChart from "./UsaRegionsChart";
import CommonChart from "../charts/CommonChart";


function USA(props) {
  const { getUsRegions, usa_region/*, isFetching*/ } = props;
  useEffect(() => {
    getUsRegions()
  }, [getUsRegions]);
  
  /*if (isFetching) {
    return <Loading />;
  } else {*/
    return (
    <div>
        <UsaRegionsChart data={usa_region} />
        <CommonChart country={8} country_name="USA" field="confirmed_cases" title="Cases" /> 
    </div>
    );
  }
//}
const mapStateToProps = state => {
  return {
    //isFetching: state.isFetching,
    usa_region: state.usa_region,

  };
};
export default connect(mapStateToProps, {
  getUsRegions
})(USA);
