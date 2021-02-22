import { createStore, combineReducers } from 'redux';
import { cartReducer } from '../reducers';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
