import axios from "axios";

export const FETCHING_COUNTRY_START = "FETCHING_COUNTRY_START";
export const FETCHING_COUNTRY_SUCCESS = "FETCHING_COUNTRY_SUCCESS";
export const FETCHING_COUNTRY_FAILURE = "FETCHING_COUNTRY_FAILURE";
export const FETCHING_US_START = "FETCHING_US_START";
export const FETCHING_US_SUCCESS = 'FETCHING_US_SUCCESS';
export const FETCHING_US_FAILURE = 'FETCHING_US_FAILURE'

export const getCountryList = () => dispatch => {
    dispatch({ type: FETCHING_COUNTRY_START });
    axios
        .get("https://cvid.herokuapp.com/country")
        .then(res => {
            console.log("comments  from server :", res);

            dispatch({ type: FETCHING_COUNTRY_SUCCESS, payload: res.data });

        })
        .catch(err => {
            dispatch({ type: FETCHING_COUNTRY_FAILURE, payload: err.message })
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