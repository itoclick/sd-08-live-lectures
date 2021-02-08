import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('App.js', () => {
  test('teste inicial', () => {
    const { history } = renderWithRouter(<App />);

    const aboutMeText = screen.getByRole('heading', {
      level: 1,
    });

    expect(aboutMeText).toBeInTheDocument();

    const projectsLink = screen.getByRole('link', {
      name: /projetos/i,
    });

    userEvent.click(projectsLink);

    const projectsText = screen.getByRole('heading', {
      level: 1,
      name: /página de projetos/i,
    });

    expect(projectsText).toBeInTheDocument();

    const { pathname } = history.location;

    expect(pathname).toBe('/projects');
  });
});

describe('App.js comments', () => {
  test('verifica se o comentário digitado aparece na tela', () => {
    const { history } = renderWithRouter(<App />);

    const aboutMeText = screen.getByRole('heading', {
      level: 1,
      name: 'Página sobre mim',
    });

    expect(aboutMeText).toBeInTheDocument();

    const commentsLink = screen.getByRole('link', {
      name: 'Deixe um comentário',
    });

    userEvent.click(commentsLink);

    const commentText = screen.getByRole('heading', {
      level: 1,
      name: 'Comente!',
    });

    expect(commentText).toBeInTheDocument();

    const { pathname } = history.location;
    expect(pathname).toBe('/comments');

    const inputComment = screen.getByRole('textbox');
    userEvent.type(inputComment, 'qualquer texto');

    const submitButton = screen.getByRole('button', {
      name: 'Add Comment!',
    });
    userEvent.click(submitButton);

    const comment = screen.getByText('qualquer texto');
    expect(comment).toBeInTheDocument();
  });
});
