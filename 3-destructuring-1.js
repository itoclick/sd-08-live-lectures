const assert = require('assert');

const bestGuyInTheWorld = {
  name: 'Rodrigo Hilbert',
  birthplace: 'Orleans, Santa Catarina',
  city: 'São Paulo',
  jobs: ['Ator', 'Modelo', 'Cozinheiro', 'Caçador', 'Sniper', 'Piloto de Caça']
};

// const name = bestGuyInTheWorld.name;
// const birthplace = bestGuyInTheWorld.birthplace;

const { name: bestGuy, birthplace } = bestGuyInTheWorld;
const [ job1, job2, job3, ...restJobs ] = bestGuyInTheWorld.jobs;

console.log(job1, job2, job3, restJobs);

//TESTES
const expectedValue = 'Rodrigo Hilbert de Orleans, Santa Catarina';
assert.strictEqual(`${bestGuy} de ${birthplace}`, expectedValue);