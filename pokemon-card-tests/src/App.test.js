import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

const pokemonMock = {
  cards: [
    {
      id: "swshp-SWSH052",
      name: "Gengar",
      nationalPokedexNumber: 94,
      imageUrl: "https://images.pokemontcg.io/swshp/SWSH052.png",
      imageUrlHiRes: "https://images.pokemontcg.io/swshp/SWSH052_hires.png",
      types: [
        "Psychic"
      ],
    },
  ],
}

describe('App.js', () => {
  test('Verifica se aparece o título da aplicação', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /pokémon cards/i
      })
    ).toBeInTheDocument();
  });

  test('Verifica se o input e o botão estão aparecendo', () => {
    render(<App />);

    const inputText = screen.getByRole('textbox');
    const buttonSearch = screen.getByRole('button', {
      name: /pesquisar/i
    });

    expect(inputText).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();
  });

  test('Verifica a digitação no input', () => {
    render(<App />);

    const inputText = screen.getByRole('textbox');

    userEvent.type(inputText, 'gengar');

    expect(inputText).toHaveValue('gengar');
  });

  test('Verifica se o card do pokemon aparece na tela', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => pokemonMock
    });

    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /pokémon cards/i
      })
    ).toBeInTheDocument();

    const inputText = screen.getByRole('textbox');
    const buttonSearch = screen.getByRole('button', {
      name: /pesquisar/i
    });

    userEvent.type(inputText, 'gengar');
    userEvent.click(buttonSearch);

    const pokemonName = await screen.findByRole('heading', {
      level: 3,
      name: /gengar/i
    });

    expect(pokemonName).toBeInTheDocument();
  });
});
