import axios from "axios";

export const FETCHING_COUNTRY_START = "FETCHING_COUNTRY_START";
export const FETCHING_COUNTRY_SUCCESS = "FETCHING_COUNTRY_SUCCESS";
export const FETCHING_COUNTRY_FAILURE = "FETCHING_COUNTRY_FAILURE";

export const getCountryList_home = info => dispatch => {
  console.log(info);
  dispatch({ type: FETCHING_COUNTRY_START });
  axios
    .get("https://cvid.herokuapp.com/country")
    .then(res => {
      console.log("comments  from server-home :", res);

      dispatch({ type: FETCHING_COUNTRY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getCountryList = () => dispatch => {
         dispatch({ type: FETCHING_COUNTRY_START });
         axios
           .get("https://cvid.herokuapp.com/country")
           .then(res => {
             console.log("comments  from server :", res);
              
                dispatch({ type: FETCHING_COUNTRY_SUCCESS, payload: res.data });
              
           })
           .catch(err => {
             console.log(err);
           });
       };
