import { createStore } from 'redux';

import reducer from '../reducers';

// const composeWithDevTools = (
//   typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : (...args) => {
//       if (args.length === 0) return undefined;
//       if (typeof args[0] === 'object') return compose;
//       return compose(...args);
//     }
// );

export const store = createStore(
  reducer,
);

export default store;
