import * as ActionTypes from '../actions/ActionTypes'

export const initialState = {
         isFetching: false,
         country: []
       };

function rootReducer(state = initialState, action) {
    switch (action.type) {
      case ActionTypes.FETCHING_COUNTRY_START:
        return {
          ...state,
          isFetching: true
        };
      case ActionTypes.FETCHING_COUNTRY_SUCCESS:
        return {
          ...state,
          country: action.payload,
          isFetching: false,
        };
      default:
        return state;
    }

 }

export default rootReducer;