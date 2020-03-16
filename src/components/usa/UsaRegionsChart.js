import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import usaflag from '../../shared/images/usaflag.png'
import { getUsRegions } from '../../store/actions/index';
import CountryPieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import SplineChart from '../charts/SplineChart';


function UsaRegionsChart(props){
    const { getUsRegions, region_name/*, isFetching*/ } = props;
   useEffect(() =>{
    getUsRegions();


   },[getUsRegions])

   
   var i; 
   var tot_cases =0 ;
   var tot_deaths =0
   for(i in region_name){
       tot_cases += region_name[i].confirmed;
       tot_deaths += region_name[i].deaths

   }
 
 return (
     <div className='usaRegionsContainer'>
     <left>
         <img src = {usaflag} alt='usa flag' width={250}/>
     </left>
     <center>
         <h1>United States Of America</h1>
     </center>
     <Table hover responsive>
        <thead>
            <tr className="thead-dark" style={{ textAlign: 'center' }}>
            <th style={{ textAlign: 'left' }}>Regions</th>
            <th >ISO Code</th>
            <th>Confirmed Cases</th>
            <th>Deaths</th>
            <th>Fatality Rate</th>
            </tr>
        </thead>
        <tbody>
        {region_name.map(item =>(
            <tr>
                <td style={{fontWeight: "600"}}>{item.region_name.toUpperCase()}</td>
                <td style={{ textAlign: 'center' }}>{item.iso_code.toUpperCase()}</td>
                <td style={{ color: 'rgb(71, 71, 243)', textAlign: 'center'}}>{item.confirmed}</td>
                <td style={{ color: 'rgb(216, 14, 41)', textAlign: 'center'}}>{item.deaths}</td>
                <td style={{textAlign: 'center'}}>{item.fatality_rate}</td>
            </tr>
        ))}
        </tbody>
            <tr className="table-warning">
                <th >Total</th>
                <td></td>
                 <td style={{ fontWeight: "600", color: 'rgb(71, 71, 243)', textAlign: 'center'}}>{tot_cases}</td>
                 <td style={{ fontWeight: "600", color: 'rgb(71, 71, 243)', textAlign: 'center'}}>{tot_deaths}</td> 
                 <td></td>            
            </tr>
     </Table>
     <tfoot>
            <tr>
            <td className="table-alert">Because of the Immense Nature of the US, we are listing Regions on this main tab and below will have tables specific for the individual states to showcase outbreak by state</td>
            </tr>
            <tr>
            <td className="table-secondary">**Repatriated means they were not infected on the diamond princess/Grand Princess cruise ships but tested positve once returned and in quarentime and 3 others came home from Wuhan rescue flights</td>
            </tr>
        </tfoot>

    <div className="container align-items-center, justify-content-center">
        <div className="row justify-content-center">
            <CountryPieChart country="USA" /> 
        </div>
        <div className="container">
            <BarChart country="USA"/>
        </div>
        <div className="container">
            <SplineChart/>
        </div>

    </div>
     </div>
 )
}
const mapStateToProps = state => {
	return {
		isFetching: state.isFetching,
		region_name: state.usa_region,
	};
};
export default connect(mapStateToProps, {
	getUsRegions,
})(UsaRegionsChart);
