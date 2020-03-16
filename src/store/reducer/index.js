import * as ActionTypes from '../actions/ActionTypes'
//import { isUpdating } from '../actions';

export const initialState = {
         isFetching: false,
         country: [],
         isServerError:false,
         message:'',
         usa_region:[],
        isUpdating:false,
        updatedCountry:[]
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
        case ActionTypes.FETCHING_COUNTRY_FAILURE:
          return {
            ...state,
            isFetching:false,
            isServerError:true,
            message:action.payload

          }
        case ActionTypes.FETCHING_US_START:
          return{
            ...state,
           isFetching:true,

          }
        case ActionTypes.FETCHING_US_SUCCESS:
          return{
            ...state,
            usa_region:action.payload,
            isFetching:false
          }
          case ActionTypes.FETCHING_US_FAILURE:
            return{
              ...state,
              isFetching:false,
              isServerError:true,
              message:action.payload
            }
            case ActionTypes.IS_UPDATING_START:
              return{
                ...state,
                isUpdating:true,
                isServerError:false,
                message:action.payload
        
                }
                  case ActionTypes.IS_UPDATING_SUCCESS:
                return{
                  ...state,
                  isUpdating:false,
                  isServerError:false,
                  updatedCountry:action.payload,
                  message:action.payload
                  }
                  case ActionTypes.IS_UPDATING_FAILURE:
                    return{
                      ...state,
                      isUpdating:false,
                      isServerError:true,
                      message:action.payload,
                      }

      default:
        return state;
    }

 }

export default rootReducer;