import axios from "axios";
import * as ActionTypes from './ActionTypes'


export const getCountryList = () => dispatch => {
         dispatch({ type: ActionTypes.FETCHING_COUNTRY_START });
         axios
           .get("https://cvid.herokuapp.com/country")
           .then(res => {
             console.log("comments  from server :", res);
              
                dispatch({ type: ActionTypes.FETCHING_COUNTRY_SUCCESS, payload: res.data });
              
           })
           .catch(err => {
             console.log(err);
           });
       };

       export const getUsRegions = () => dispatch =>{
        dispatch({type:FETCHING_US_START})
        axios
        .get('https://cvid.herokuapp.com/usa_regions')
        .then(res => {
            console.log("usa_regions:",res);
            dispatch({type:FETCHING_US_SUCCESS,payload:res.data})
        })
        .catch(err =>{
            dispatch({type:FETCHING_US_FAILURE, payload:err.message})
            console.log(err)
        })
    }

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
