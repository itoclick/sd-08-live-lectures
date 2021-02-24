import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import rootReducer from '../reducers';

export default function renderWithRouterAndRedux(
  component,
  {
    initialEntries = ['/'],
    initialState,
    store = createStore(rootReducer, initialState),
  } = {},
) {
  return {
    ...render(
      <Router history={ createMemoryHistory({ initialEntries }) }>
        <Provider store={ store }>
          {component}
        </Provider>
      </Router>,
    ),
    store,
  };
}
