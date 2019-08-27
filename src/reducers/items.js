import {
  REQUEST_ITEMS,
  RECEIVE_ITEMS
} from "../action/types";
  
  const INITIAL_STATE = {
    data: [],
    isFetching: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case REQUEST_ITEMS: {
        return { ...state, isFetching: true };
      }
      case RECEIVE_ITEMS: {
        return { ...state, isFetching: false, data: action.payload };
      }
      default:
        return state;
    }
  };