import React, { useEffect } from 'react';
import { getCountryRegions, getRegionSum } from '../../store/actions'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import StackedBarChart from "./StackedBarChart";
import SplineChart from "./SplineChart";
import CountryPieChart from './CountryPieChart';
import RegionBarChart from './RegionBarChart';
import CountryTable from './CountryTable';
//import Loading from '../Loading';


function CommonChart(props) {

    const { getRegionSum, getCountryRegions, region, country, country_name, field, region_sum, title, isFetching } = props;

    useEffect(() => {
        getCountryRegions(country);
        getRegionSum(country)
    }, [getCountryRegions, country, getRegionSum])

    


    const region_names = [...new Set(region.map(x => x.regions_name))]

    const region_data = [];
    const map = new Map();
    for (const item of region) {
        if (!map.has(item.date_of_case)) {
            map.set(item.date_of_case, true);
            var Obj = {}
            Obj["date"] = item.date_of_case
            Obj[item.regions_name] = item[`${field}`]
            region_data.push(Obj);
        }
        else if (map.has(item.date_of_case)) {
            var key = region_data.findIndex(x => x.date === item.date_of_case)
            region_data[key][item.regions_name] = item[`${field}`]

        }
    }


    for (var i in region_data) {
        if (new Date(region_data[i].date) !== "Invalid Date") {
            region_data[i].date = new Date(region_data[i].date)
        }
    }

    /*if(isFetching){
        return(
            <Loading/>
        )
    }else{*/
        if (country_name === "USA") {
            return (
                <React.Fragment>
                    <RegionBarChart region_sum={region_sum} field={field} title={title} />
                    <br />
                    <br />
                    <CountryPieChart region_sum={region_sum} field={field} title={title} />
                    <br />
                    <br />
                    <StackedBarChart region_data={region_data} country={country} country_name={country_name} field={field} region_names={region_names} title={title} />
                    <br />
                    <br />
                    <SplineChart region_data={region_data} country={country} country_name={country_name} field={field} region_names={region_names} title={title} />
                </React.Fragment>

            )
        } else return (
            <React.Fragment>
                <CountryTable region_data={region_data} field={field} title={title} isFetching={isFetching} region_names={region_names} />
                <br />
                <br />
                <RegionBarChart region_sum={region_sum} field={field} title={title} />
                <br />
                <br />
                <CountryPieChart region_sum={region_sum} field={field} title={title} />
                <br />
                <br />
                <StackedBarChart region_data={region_data} country={country} country_name={country_name} field={field} region_names={region_names} title={title} />
                <br />
                <br />
                <SplineChart region_data={region_data} country={country} country_name={country_name} field={field} region_names={region_names} title={title} />
            </React.Fragment>
        )
    //}
}


const mapStateToProps = state => {
    return {
        region: state.region,
        region_sum: state.region_sum,
        isFetching: state.isFetching,
    };
};
export default withRouter(connect(mapStateToProps, { getCountryRegions, getRegionSum })(CommonChart));