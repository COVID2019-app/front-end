import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import { connect,useDispatch } from 'react-redux';
import { getCountryList,isUpdating } from '../store/actions/index';
import number from 'react-bootstrap-table2-filter/lib/src/components/number';

const TableEdit = props => {

	const { country, getCountryList, isUpdating } = props;
  
	useEffect(() => {
    getCountryList()
        
	}, [getCountryList]);

	const handleChange = (row,column,newValue) => {
		let updatedData = {}
		updatedData[column.dataField] = parseInt(newValue)
		isUpdating(row.country_id, updatedData)
	};

	const columns = [
		{
			dataField: 'country_id',
			text: 'Country ID',
 
      filter: textFilter(),
      editor:{
        type:Type.TEXTAREA,
      }
		},
		{
			dataField: 'country_name',
			text: 'Territorry',
      filter: textFilter(),
 
		

		},
		{
			dataField: 'confirmed_cases',
			text: 'Cases',
			filter: textFilter(),

		},
		{
			dataField: 'deaths',
			text: 'Deaths',
			filter: textFilter(),
		
				
			
		},
		{
			dataField: 'recovered',
			text: 'Recovered',
			filter: textFilter(),
		
		},
		{
			dataField: 'severe_critical',
			text: 'Severe',
			filter: textFilter(),
	
			
		},
		{
			dataField: 'tested',
			text: 'Tested',
			filter: textFilter(),
		
			
		},
		{
			dataField: 'active_cases',
			text: 'Active',
			filter: textFilter(),

			},
	
	];
		return (
      <BootstrapTable
        keyField="country_id"
        data={country}
        columns={columns}
        cellEdit={cellEditFactory({
          mode: "click",
			afterSaveCell: (oldValue, newValue, row, column) => { 
            handleChange(row, column,newValue);
          }
        })}
        // onClick={e => {
        //   handleChange(e);
        // }}
        filter={filterFactory()}
      />
    );
//   const onTableChange = (type, newState) => {


// 	return (
// 		<BootstrapTable
    
// 			keyField="country_id"
// 			data={country}
// 			columns={columns}
     
// 			cellEdit={cellEditFactory({
//         onTableChange:{onTableChange}, 
//         mode: 'click',
//         afterSaveCell:(newValue)=>{ handleChange(newValue)} })}
//         onClick={(e) => {handleChange(e)}}
// 		    	filter={filterFactory()}
      
//          />)
//   }
}
    


const mapStateToProps = state => {
	return {
		country: state.country,
	};
};
export default connect(mapStateToProps, {
  getCountryList,
  isUpdating,
})(TableEdit);
