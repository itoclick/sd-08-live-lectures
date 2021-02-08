import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../App';

describe('routes', () => {
  test('navigating from home to comments', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const personalInfo = getByText(/Página sobre mim/i);
    expect(personalInfo).toBeInTheDocument();

    fireEvent.click(getByText(/Deixe um comentário/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/comments');

    const project = getByText(/Comente!/i);
    expect(project).toBeInTheDocument();
  });
});
