import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import usaflag from '../../shared/images/usaflag.png'
import { getUsRegions } from '../../store/actions/index';
import axios from 'axios'

function UsaRegionsChart(props){
    const { getUsRegions, region_name, isFetching } = props;
   useEffect(() =>{
    getUsRegions();


   },[])
 
 return (
     <div className='usaRegionsContainer'>
     <left>
         <img src = {usaflag} alt='usa flag' width={250}/>
     </left>
     <center>
         <h1>United States Of America</h1>
     </center>
     <table>
     <thead>
     <tr>
         <th>Regions</th>
         <th>ISO Code</th>
         <th>Confirmed Cases</th>
         <th>Deaths</th>
         <th>Fatality Rate</th>
         </tr>
         </thead>
        <tbody>
        {region_name.map(item =>(
            <tr>
            <td>{item.region_name.toUpperCase()}</td>
            <td>{item.iso_code.toUpperCase()}</td>
            <tb>{item.confirmed}</tb>
            <td>{item.cases}</td>
            <td>{item.deaths}</td>
            </tr>
        ))}
        </tbody>
        
            <tr>
            <th>total</th>
             <th></th>
             <td>num</td>
             <th></th>
             <td>num</td>             
            </tr>
        <tfoot>
            <tr>

            <td>Because of the Immense Nature of the US, we are listing Regions on this main tab and below will have tables specific for the individual states to showcase outbreak by state</td>
          
            </tr>
            <tr>
            <td>*Repatriated means they were not infected on the diamond princess/Grand Princess cruise ships but tested positve once returned and in quarentime and 3 others came home from Wuhan rescue flights</td>
            </tr>
        </tfoot>
     </table>
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
