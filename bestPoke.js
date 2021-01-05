const pokeTips = (callback) => {
  setTimeout(() => {
    callback('Squirtle é o melhor pokémon para começar.');
  }, 2000);
};

module.exports = pokeTips;