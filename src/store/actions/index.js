import axios from 'axios';
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const getCountryList = () => dispatch => {
  dispatch({ type: ActionTypes.FETCHING_COUNTRY_START });
  axios
    .get(baseUrl + 'country/sort')
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
    .get(baseUrl + 'country/sort')
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
    .get(baseUrl + 'usa_regions')
    .then(res => {
      dispatch({ type: ActionTypes.FETCHING_US_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ActionTypes.FETCHING_US_FAILURE, payload: err.message });
      console.log(err);
    });
};

export const getCountryRegions = id => dispatch => {
  dispatch({ type: ActionTypes.FETCHING_REGION_START });
  axios
    .get(baseUrl + `regions/${id}`)
    .then(res => {
      dispatch({
        type: ActionTypes.FETCHING_REGION_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: ActionTypes.FETCHING_REGION_FAILURE,
        payload: err.message,
      });
      console.log(err);
    });
};

export const getRegionSum = id => dispatch => {
  dispatch({ type: ActionTypes.FETCHING_REGION_SUM_START });
  axios
    .get(baseUrl + `regions/sum/${id}`)
    .then(res => {
      dispatch({
        type: ActionTypes.FETCHING_REGION_SUM_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: ActionTypes.FETCHING_REGION_SUM_FAILURE,
        payload: err.message,
      });
      console.log(err);
    });
};

export const isUpdating = (country_id, updates, token) => dispatch => {
  dispatch({ type: ActionTypes.IS_UPDATING_START });

  axios
    .put(baseUrl + `country/${country_id}`, updates, {
      headers: {
        authorization: token,
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
    .post(baseUrl + 'auth/login', {
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

export const addingDailyRegion = (data, token) => dispatch => {
  dispatch({ type: ActionTypes.ADDING_DAILYREGION_START });
  axios
    .post(baseUrl + `regions`, data, {
      headers: {
        authorization: token,
      },
    })
    .then(response => {
      dispatch({
        type: ActionTypes.ADDING_DAILYREGION_SUCCESS,
        payload: response.data,
      });
    })

    .catch(err => {
      console.log(err);
      dispatch({
        type: ActionTypes.ADDING_DAILYREGION_FAILURE,
        payload: err.message,
      });
    });
};

export const getCountryRegionsByDate = data => dispatch => {
  dispatch({ type: ActionTypes.FETCHING_REGIONBYDATE_START });
  axios
    .post(baseUrl + `regions/byDate`, data)
    .then(res => {
      res.data.sort(function(a, b) {
        let comparison = 0;
        if (a['regions_name'] > b['regions_name']) {
          comparison = 1;
        } else if (a['regions_name'] < b['regions_name']) {
          comparison = -1;
        }
        return comparison;
      });
      dispatch({
        type: ActionTypes.FETCHING_REGIONBYDATE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: ActionTypes.FETCHING_REGIONBYDATE_FAILURE,
        payload: err.message,
      });
      console.log(err);
    });
};
export const updateDailyRegion = (region_id, updates, token) => dispatch => {
  dispatch({ type: ActionTypes.IS_UPDATINGDAILYREGION_START });
  axios
    .put(baseUrl + `regions/${region_id}`, updates, {
      headers: {
        authorization: token,
      },
    })
    .then(response => {
      dispatch({
        type: ActionTypes.IS_UPDATINGDAILYREGION_SUCCESS,
        payload: response.data,
      });
    })

    .catch(err => {
      console.log(err);
      dispatch({
        type: ActionTypes.IS_UPDATINGDAILYREGION_FAILURE,
        payload: err.message,
      });
    });
};
