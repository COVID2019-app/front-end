import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import usaflag from '../../shared/images/usaflag.png'
import { getUsRegions } from '../../store/actions/index';


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
     <Table responsive>
     <thead>
     <tr>
         <th style={{backgroundColor:"red"}}>Regions</th>
         <th style={{backgroundColor:"pink"}}>ISO Code</th>
         <th style={{backgroundColor:"blue"}}>Confirmed Cases</th>
         <th style={{backgroundColor:"maroon"}}>Deaths</th>
         <th style={{backgroundColor:"gray"}}>Fatality Rate</th>
         </tr>
         </thead>
        <tbody>
        {region_name.map(item =>(
            <tr>
            <td>{item.region_name.toUpperCase()}</td>
            <td>{item.iso_code.toUpperCase()}</td>
            <td>{item.confirmed}</td>
            <td>{item.deaths}</td>
            <td>{item.fatality_rate}</td>
       
            </tr>
        ))}
        </tbody>
        
            <tr style={{backgroundColor:"yellow"}}>
            <th >Total</th>
             <th></th>
             <td>{}</td>
             <th></th>
             <td>{}</td>             
            </tr>
       
     </Table>
     <tfoot>
            <tr>

            <td style={{backgroundColor:"pink"}}>Because of the Immense Nature of the US, we are listing Regions on this main tab and below will have tables specific for the individual states to showcase outbreak by state</td>
          
            </tr>
            <tr>
            <td style={{backgroundColor:"grey"}}>**Repatriated means they were not infected on the diamond princess/Grand Princess cruise ships but tested positve once returned and in quarentime and 3 others came home from Wuhan rescue flights</td>
            </tr>
        </tfoot>
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
