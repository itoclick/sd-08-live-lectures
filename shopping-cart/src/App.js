import React from 'react';
import { Provider } from 'react-redux';

import store from './store/index';

function App() {
  return (
    <Provider store={ store }>
      <h1>Olá</h1>
    </Provider>
  );
}

export default App;
