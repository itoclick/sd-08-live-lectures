const appendPokemon = (pokemon, name) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = pokemon;
  ul.appendChild(li);
}

const getPokemon = (pokemon, callback) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      response.json().then((data) => {
        appendPokemon(data.name);
        callback ? callback() : undefined;
      });
    });
};

const fetchPokemon = () => {
  getPokemon('pikachu',
    getPokemon('squirtle',
      getPokemon('kakuna',
        getPokemon('charizard')
      )
    )
  );
};

const getPokemonPromise = (pokemon) => {
  return new Promise((resolve, reject) => {
    if (pokemon === 'squirtle') {
      reject('Esse pokemon é muito top para esta lista.');
    }else {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        response.json()
          .then((data) => {
            appendPokemon(data.name);
            resolve();
          });
      });
    }
  });
};

// const promisePokemon = () => {
//   getPokemonPromise('pikachu')
//     .then(() => getPokemonPromise('squirtle'))
//     .then(() => getPokemonPromise('kakuna'))
//     .then(() => getPokemonPromise('charizard'))
//     .catch((error) => console.log(error));
// };

const promisePokemon = async () => {
  try {
    await getPokemonPromise('pikachu');
    await getPokemonPromise('kakuna');
    await getPokemonPromise('squirtle');
    await getPokemonPromise('charizard');
  } catch (error) {
    console.log(error);
  }
};

window.onload = promisePokemon();

//JSON - JavaScript Object Notation