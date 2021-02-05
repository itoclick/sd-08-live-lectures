import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
      pokemon: '',
    };
  }

  handleChange(e) {
    this.setState({
      pokemon: e.target.value,
    });
  }

  async handleClick(pokemon) {
    const res = await fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`);
    const pokemons = await res.json();
    this.setState({ data: pokemons.cards[0] });
  }

  render() {
    const { data, pokemon } = this.state;
    return (
      <main className="App-header">
        <section>
          <h1>Pokémon Cards</h1>
          <h3>Pokémon Cards</h3>
        </section>
        <div>
          <input
            type="text"
            onChange={ (e) => this.handleChange(e) }
            data-testid="input-text"
          />
          <button type="button" onClick={ () => this.handleClick(pokemon) }>
            Pesquisar
          </button>
        </div>
        <div>
          {data && (
            <div>
              <h3>{data.name}</h3>
              {data.types.map((type) => (
                <p key={ type }>{type}</p>
              ))}
              <img src={ data.imageUrl } alt={ `${data.name}-card` } />
            </div>
          )}
        </div>
      </main>
    );
  }
}

export default App;
