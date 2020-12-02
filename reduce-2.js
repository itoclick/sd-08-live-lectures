const assert = require('assert');

const epic = ['A', 'long', 'time', 'ago,', 'in a', 'galaxy', 'far far', 'away...'];

const epicPhrase = epic.reduce((accumulator, currentValue) => {
  return `${accumulator} ${currentValue}`;
}, 'Turma 8 - ');

//A long
//A long time
//A long time ago
//A long time ago in a
//A long time ago in a galaxy

console.log(epicPhrase);


//Testes
const expectedValue = 'A long time ago, in a galaxy far far away...';

assert.strictEqual(epicPhrase, expectedValue);