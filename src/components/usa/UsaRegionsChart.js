import React from 'react';
import { Table } from 'reactstrap';
import usaflag from '../../shared/images/usaflag.png'
import { getUsRegions } from '../../store/actions/index';
import CountryPieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import SplineChart from '../charts/SplineChart';
import RegionsTableModal from "../../shared/RegionsTableModal"

function UsaRegionsChart({data}){

    
// re-generate the data from backend
    var regions_data = [];
    for (var i in data) {
      var d = {
        id: data[i].id,
        name: data[i].region_name,
        confirmed: data[i].confirmed,
        deaths: data[i].deaths,
        fatality_rate: data[i].fatality_rate
      };
      regions_data.push(d);
    }

 return (
   <div className="usaRegionsContainer">
     <div>
       <img src={usaflag} alt="usa flag" width={250} />
     </div>
     <center>
       <h1>United States Of America</h1>
     </center>
     <RegionsTableModal data={regions_data} />
     
     <Table>
       <tfoot>
         <tr>
           <td className="table-alert">
             Because of the Immense Nature of the US, we are listing Regions on
             this main tab and below will have tables specific for the
             individual states to showcase outbreak by state
           </td>
         </tr>
         <tr>
           <td className="table-secondary">
             **Repatriated means they were not infected on the diamond
             princess/Grand Princess cruise ships but tested positve once
             returned and in quarentime and 3 others came home from Wuhan rescue
             flights
           </td>
         </tr>
       </tfoot>
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

 );
}

export default UsaRegionsChart;
