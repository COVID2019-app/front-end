import axios from 'axios';
import * as ActionTypes from './ActionTypes';

export const getCountryList = () => dispatch => {
  dispatch({ type: ActionTypes.FETCHING_COUNTRY_START });
  axios
    .get('https://cvid.herokuapp.com/country/sort')
    .then(res => {
      dispatch({
        type: ActionTypes.FETCHING_COUNTRY_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getSortedCountryList = sortedBy => dispatch => {
  var order = 'desc';
  if (sortedBy === 'country_name') {
    order = 'asc';
  }
  dispatch({ type: ActionTypes.FETCHING_COUNTRY_START });
  axios
    .get('https://cvid.herokuapp.com/country/sort')
    .then(res => {
      res.data.forEach(item => {
        item.active_cases = item.confirmed_cases - item.deaths - item.recovered;
      });
      res.data.sort(function(a, b) {
        let comparison = 0;
        if (a[sortedBy] > b[sortedBy]) {
          comparison = 1;
        } else if (a[sortedBy] < b[sortedBy]) {
          comparison = -1;
        }
        return order === 'desc' ? comparison * -1 : comparison;
      });
      dispatch({
        type: ActionTypes.FETCHING_COUNTRY_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getUsRegions = () => dispatch => {
  dispatch({ type: ActionTypes.FETCHING_US_START });
  axios
    .get('https://cvid.herokuapp.com/usa_regions')
    .then(res => {
      console.log('usa_regions:', res);
      dispatch({ type: ActionTypes.FETCHING_US_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ActionTypes.FETCHING_US_FAILURE, payload: err.message });
      console.log(err);
    });
};

export const isUpdating = (country_id, updates, token) => dispatch => {
  dispatch({ type: ActionTypes.IS_UPDATING_START });

  axios
    .put(`https://cvid.herokuapp.com/country/${country_id}`, updates, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then(response => {
      dispatch({
        type: ActionTypes.IS_UPDATING_SUCCESS,
        payload: response.data,
      });
    })

    .catch(err => {
      console.log(err);
      dispatch({ type: ActionTypes.IS_UPDATING_FAILURE, payload: err.message });
    });
};

export const login = ({ username, password }) => async dispatch => {
  await axios
    .post('https://cvid.herokuapp.com/auth/login', {
      username,
      password,
    })
    .then(response => {
      //add token to local storage
      //have to eventually write code to expire token (especially if user doesn't choose to remember login)
      sessionStorage.setItem('token', response.data.token);
      dispatch({
        type: ActionTypes.LOGIN_USER_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      dispatch({
        type: ActionTypes.LOGIN_USER_FAILURE,
        payload: error,
      });

      // We throw the error so we can catch it in components
      // and update accordingly!
      throw error;
    });
};
