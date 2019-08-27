import { combineReducers } from 'redux';
import Items from './items';
import Item from './item';

export default combineReducers({
  items: Items,
  item: Item
});