import React from 'react';
import { Provider } from 'react-redux';

import BooksList from './components/BooksList';
import Cart from './components/Cart';

import store from './store/index';

function App() {
  return (
    <Provider store={ store }>
      <BooksList />
      <Cart />
    </Provider>
  );
}

export default App;
