import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import axios from 'axios';
import { connect,useDispatch } from 'react-redux';
import { getCountryList,isUpdating } from '../store/actions/index';
import number from 'react-bootstrap-table2-filter/lib/src/components/number';
const TableEdit = props => {
  const dispatch = useDispatch()
  const { country, getCountryList , isUpdating } = props;
  console.log("PROPS",props)
  const [local, setLocal] = useState();
  
	useEffect(() => {
    getCountryList()
        
	}, [getCountryList]);

	const handleSubmit = (evt) => {

      

     
      setLocal(evt)
       isUpdating(evt)
	    console.log(evt)
  

    
  }
	
	const handleChange = newValue => {
      setLocal(newValue)
    console.log(props)

		console.log(local);
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
  const onTableChange = (type, newState) => {

      
    
  



	return (
		<BootstrapTable
    
			keyField="country_id"
			data={country}
			columns={columns}
     
			cellEdit={cellEditFactory({
        onTableChange:{onTableChange}, 
        mode: 'click',
        afterSaveCell:(newValue)=>{ handleChange(newValue)} })}
        onClick={(e) => {handleChange(e)}}
		    	filter={filterFactory()}
      
         />)
  }
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
