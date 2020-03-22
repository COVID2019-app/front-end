import * as ActionTypes from '../actions/ActionTypes';
//import { isUpdating } from '../actions';
import { reducer as formReducer } from 'redux-form'
export const initialState = {
  isFetching: false,
  country: [],
  isServerError: false,
  message: '',
  usa_region: [],
  isUpdating: false,
  updatedCountry: [],
<<<<<<< HEAD
  token: null,
  form:formReducer
=======
  token: sessionStorage.getItem('token')
>>>>>>> d95eff252041822f8485070145a034e086bb1fd6
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCHING_COUNTRY_START:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.FETCHING_COUNTRY_SUCCESS:
      return {
        ...state,
        country: action.payload,
        isFetching: false,
      };
    case ActionTypes.FETCHING_COUNTRY_FAILURE:
      return {
        ...state,
        isFetching: false,
        isServerError: true,
        message: action.payload,
      };
    case ActionTypes.FETCHING_US_START:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.FETCHING_US_SUCCESS:
      return {
        ...state,
        usa_region: action.payload,
        isFetching: false,
      };
    case ActionTypes.FETCHING_US_FAILURE:
      return {
        ...state,
        isFetching: false,
        isServerError: true,
        message: action.payload,
      };
    case ActionTypes.IS_UPDATING_START:
      return {
        ...state,
        isUpdating: true,
        isServerError: false,
        message: action.payload,
      };
    case ActionTypes.IS_UPDATING_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        isServerError: false,
        updatedCountry: action.payload,
        message: action.payload,
      };
    case ActionTypes.IS_UPDATING_FAILURE:
      return {
        ...state,
        isUpdating: false,
        isServerError: true,
        message: action.payload,
      };
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    case ActionTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isServerError: true,
        message: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;