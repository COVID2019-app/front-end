import {
  FETCHING_COUNTRY_START,
  FETCHING_COUNTRY_SUCCESS,
  FETCHING_COUNTRY_FAILURE
} from "../actions";

export const initialState = {
         isFetching: false,
         country: [],
         isServerError:false,
         message:''
       };

function rootReducer(state = initialState, action) {
    switch (action.type) {
      case FETCHING_COUNTRY_START:
        return {
          ...state,
          isFetching: true
        };
      case FETCHING_COUNTRY_SUCCESS:
        return {
          ...state,
          country: action.payload,
          isFetching: false,
        };
        case FETCHING_COUNTRY_FAILURE:
          return {
            ...state,
            isFetching:false,
            isServerError:true,
            message:action.payload

          }
      default:
        return state;
    }

 }

export default rootReducer;