import React,{useEffect,useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory,{Type} from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import axios from 'axios'
import { connect } from 'react-redux'
import {getCountryList} from '../store/actions/index'
import number from 'react-bootstrap-table2-filter/lib/src/components/number';
const TableEdit = (props) =>{
    const {country , getCountryList } = props;
    const [local,setLocal] =useState()
    useEffect(() => {
        getCountryList();
      }, [getCountryList]);

const handleSubmit = evt =>{
    console.log(evt)
    const changes = evt.target.value
    const id = evt.target.value.country_id
    axios
    .put(`http://localhost:5000/${id}`,changes)
    .then(response  => {
        const updated = response.data
        setLocal(updated)
        console.log(local)
    })
}
const handleChange = evt =>{
     console.log(evt)
    // evt.preventDefault()
    const update = evt.target.value
    setLocal(update)
    console.log(local)
}


const columns = [{
  dataField: 'country_id',
  text: 'Country ID',

  filter:textFilter()
  
}, {
  dataField: 'country_name',
  text: 'Territorry',
  filter: textFilter(),
  editor:{
    type:Type.TEXT
  },
  validator: (newValue, row, column, done) => {
     this.settimeout(() => {
      // async validation ok
      if (newValue === String){
      return done();
      }
      // async validation not ok
      return done({
        valid: false,
        message: 'SOME_REASON_HERE'
      });

    }, 2000);
    return { async: true };
  }

}, {
  dataField: 'confirmed_cases',
  text: 'Cases',
  filter: textFilter(),
  validator: (newValue, row, column, done) => {
    this.settimeout(() => {
     // async validation ok
     if (newValue = Number){
     return done();
     }
     // async validation not ok
     return done({
       valid: false,
       message: 'SOME_REASON_HERE'
     });

   }, 2000);
   return { async: true };
 }
},{
  dataField: 'deaths',
  text: 'Deaths',
  filter: textFilter(),
  validator: (newValue, row, column, done) => {
    this.settimeout(() => {
     // async validation ok
     if (newValue = Number){
     return done();
     }
     // async validation not ok
     return done({
       valid: false,
       message: 'SOME_REASON_HERE'
     });

   }, 2000);
   return { async: true };
 }  
},{
    dataField: 'recovered',
    text: 'Recovered'  ,
    filter: textFilter(),
    validator: (newValue, row, column, done) => {
        this.settimeout(() => {
         // async validation ok
         if (newValue = Number){
         return done();
         }
         // async validation not ok
         return done({
           valid: false,
           message: 'SOME_REASON_HERE'
         });
    
       }, 2000);
       return { async: true };
     }
  },{
    dataField: 'severe_critical',
    text: 'Severe'  ,
    filter: textFilter(),
    validator: (newValue, row, column, done) => {
        this.settimeout(() => {
         // async validation ok
         if (newValue = Number){
         return done();
         }
         // async validation not ok
         return done({
           valid: false,
           message: 'SOME_REASON_HERE'
         });
    
       }, 2000);
       return { async: true };
     }
  },{
    dataField: 'tested',
    text: 'Tested',
    filter: textFilter(),
    validator: (newValue, row, column, done) => {
    
         // async validation ok
         if (newValue = Number){
         return done();
         }
         // async validation not ok
         return done({
           valid: false,
           message: 'SOME_REASON_HERE'
         });
    

     }
  
  },{
    dataField: 'active_cases',
    text: 'Active'  ,
    filter: textFilter(),
    validator: (newValue, row, column, done) => {

         // async validation ok
         if (newValue === Number){
         return done();
         }
         // async validation not ok
         return done({
           valid: false,
           message: 'SOME_REASON_HERE'
         });
    
     }
  }
];

return(
<BootstrapTable
  keyField="country_id"
  data={ country }
  columns={ columns }
  onChange={handleChange}
  onSubmit={handleSubmit}
  cellEdit={ cellEditFactory({ mode: 'click' }) }
  filter={filterFactory()}

/>
)
}


const mapStateToProps = state => {
    return {

      country: state.country
    };
  };
  export default connect(mapStateToProps, {
      getCountryList,
  })(TableEdit);