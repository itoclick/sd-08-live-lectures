import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('routes', () => {
  test('navigating from home to comments', () => {
    const { getByText, history } = renderWithRouter(<App />);

    const personalInfo = screen.getByText(/Página sobre mim/i);
    expect(personalInfo).toBeInTheDocument();

    fireEvent.click(getByText(/Deixe um comentário/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/comments');

    const project = getByText(/Comente!/i);
    expect(project).toBeInTheDocument();
  });

  test('navigating from home to projects', () => {
    const { getByText, history } = renderWithRouter(<App />);

    const personalInfo = getByText(/Página sobre mim/i);
    expect(personalInfo).toBeInTheDocument();

    fireEvent.click(getByText(/Projetos/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/projects');

    const project = getByText(/Página de projetos/i);
    expect(project).toBeInTheDocument();
  });

  test('landing on a bad page shows error 404', () => {
    const { getByText, history } = renderWithRouter(<App />);

    const route = '/pagina-que-nao-existe';
    history.push(route);

    const pageNotFound = getByText(/Página não encontrada/i);
    expect(pageNotFound).toBeInTheDocument();
  });
});

describe('comment form', () => {
  test('commenting and show comment on the screen', () => {
    const { getByText, getByTestId } = renderWithRouter(<App />);

    fireEvent.click(getByText(/Deixe um comentário/i));
    const input = screen.getByRole('textbox');
    // fireEvent.change(input, { target: { value: 'my comment' } });
    userEvent.type(input, 'my comment');
    fireEvent.click(getByTestId('button-comment'));
    expect(getByText(/my comment/i)).toBeInTheDocument();
  });
});
