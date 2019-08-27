import axios from 'axios';

import {
  ROOT,
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  REQUEST_ITEM,
  RECEIVE_ITEM
} from "./types";


export const fetchItems = searchString => async dispatch => {
  try {
    dispatch({ type: REQUEST_ITEMS });
    const res = await axios.get(`${ROOT}/items?q=${searchString.trim()}`);
    dispatch({ type: RECEIVE_ITEMS, payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: RECEIVE_ITEMS, payload: [] });
  }
};


export const fetchItem = id => async dispatch => {
  try {
    dispatch({ type: REQUEST_ITEM });
    const res = await axios.get(`${ROOT}/items/${id}`);
    dispatch({ type: RECEIVE_ITEM, payload: res.data });
  } catch(e) {
      console.log(e);
    dispatch({ type: RECEIVE_ITEM, payload: {} });
  }
};