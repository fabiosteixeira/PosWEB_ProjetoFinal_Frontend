import { cartReducer } from './cartReducer';
//import { OtherReducer } from './otherReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  cartState: cartReducer//,
  //otherState: otherReducer
});