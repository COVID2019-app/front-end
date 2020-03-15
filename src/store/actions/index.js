import axios from "axios";
import * as ActionTypes from './ActionTypes'

export const getCountryList = () => dispatch => {
  dispatch({ type: ActionTypes.FETCHING_COUNTRY_START });
  axios
    .get("https://cvid.herokuapp.com/country/sort")
    .then(res => {
      console.log("comments  from server :", res);

      dispatch({
        type: ActionTypes.FETCHING_COUNTRY_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
export const getSortedCountryList = (sortedBy) => dispatch => {
  var order = "desc";
  if (sortedBy === "country_name") {
    order ="asc"
  } 
         dispatch({ type: ActionTypes.FETCHING_COUNTRY_START });
         axios
           .get("https://cvid.herokuapp.com/country/sort",)
           .then(res => {
             res.data.forEach((item) => {
              item.active_cases = item.confirmed_cases - item.deaths - item.recovered
             })
             res.data.sort(function(a, b) {
               let comparison = 0;
               if (a[sortedBy] > b[sortedBy]) {
                 comparison = 1;
               } else if (a[sortedBy] < b[sortedBy]) {
                 comparison = -1;
               }
               return order === "desc" ? comparison * -1 : comparison;
             });
                dispatch({
                  type: ActionTypes.FETCHING_COUNTRY_SUCCESS,
                  payload: res.data
                });
              
           })
           .catch(err => {
             console.log(err);
           });
       };

       export const getUsRegions = () => dispatch =>{
        dispatch({type: ActionTypes.FETCHING_US_START})
        axios
        .get('https://cvid.herokuapp.com/usa_regions')
        .then(res => {
            console.log("usa_regions:",res);
            dispatch({type:ActionTypes.FETCHING_US_SUCCESS,payload:res.data})
        })
        .catch(err =>{
            dispatch({type:ActionTypes.FETCHING_US_FAILURE, payload:err.message})
            console.log(err)
        })
    }
export const isUpdating = (country_id, updates) => dispatch => {

      dispatch({type: ActionTypes.IS_UPDATING_START})
      
      axios
      .put(`https://cvid.herokuapp.com/country/${country_id}`,updates)
      .then(response => {
        dispatch({type:ActionTypes.IS_UPDATING_SUCCESS,payload:response.data  })
      })
     
      .catch(err =>{console.log(err)
        dispatch({type:ActionTypes.IS_UPDATING_FAILURE, payload:err.message})
        })    }

/*Needs daily countries ordered by confirmed cases by server can limit to 25 for 
export const getTopCountries = () => dispatch => {
  dispatxh({type: ActionTypes.FETCHING_TOP_COUNTRIES});
  axios
    .get("https://cvid.herokuapp.com/")
    .then(res => {
      dispatch({ type: ActionTypes.FETCHING_TOP_COUNTRIES_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: ActionTypes.FETCHING_TOP_COUNTRIES_FAILURE, payload: err})
    })
}*/
