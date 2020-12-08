const appendPokemon = (pokemon, name) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let pokemonName = document.querySelector('h1');
  li.innerHTML = pokemon;
  pokemonName.innerHTML = name;
  ul.appendChild(li);
}

const fetchPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/kakuna')
    .then((response) => {
      response.json().then((data) => {
        data.moves.map((value) => {
          appendPokemon(value.move.name, data.name);
        });
      });
    });
};

window.onload = fetchPokemon();

//JSON - JavaScript Object Notation