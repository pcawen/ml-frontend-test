import {
  REQUEST_ITEM,
  RECEIVE_ITEM
} from "../action/types";
  
  const INITIAL_STATE = {
    name: '',
    isFetching: false,
  };
  
  export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
      case REQUEST_ITEM: {
        return { ...state, isFetching: true };
      }
      case RECEIVE_ITEM: {
        return { ...state, isFetching: false, ...action.payload };
      }
      default: return state;
    }
  };