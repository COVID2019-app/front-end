import {
  FETCHING_COUNTRY_START,
  FETCHING_COUNTRY_SUCCESS,
  FETCHING_COUNTRY_FAILURE,
  FETCHING_US_START,
  FETCHING_US_SUCCESS,
  FETCHING_US_FAILURE
} from "../actions";

export const initialState = {
         isFetching: false,
         country: [],
         isServerError:false,
         message:'',
         usa_region:[]
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
        case FETCHING_US_START:
          return{
            ...state,
           isFetching:true,

          }
        case FETCHING_US_SUCCESS:
          return{
            ...state,
            usa_region:action.payload,
            isFetching:false
          }
          case FETCHING_US_FAILURE:
            return{
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