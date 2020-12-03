const assert = require('assert');

// PARAMETRO REST: Permite que a passagem de parâmetro seja feita em um único parâmetro.

// Com array
const sumAll = (values) => {
  let sum = 0;
  values.forEach(value => {
    sum += value;
  });

  return sum;
};

const sumAllOperands = (...operands) => {
  return operands.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
};

console.log(sumAllOperands(1, 2, 3, 4, 5));

//TESTES
assert.strictEqual(sumAll([1, 2]), 3); // 1 parâmetro: array
assert.strictEqual(sumAll([1, 2, 3]), 6);
assert.strictEqual(sumAll([1, 2, 3, 4, 5]), 15);

assert.strictEqual(sumAllOperands(1, 2), 3); // 2 parâmetros
assert.strictEqual(sumAllOperands(1, 2, 3), 6);
assert.strictEqual(sumAllOperands(1, 2, 3, 4, 5), 15);