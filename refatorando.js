//Média
function media (num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
};

console.log(media(10, 20, 30));

// ---------------------------------------------------------
//Nome completo
function fullName (nome, sobrenome) {
  return (nome + ' ' + sobrenome);
};

console.log(fullName('Gustavo', 'Caetano'));

// ---------------------------------------------------------
//Gerar Array Com 100 Caracteres
function geraArray (caracter) {
  let array = [];
  for (let index = 0; index < 100; index += 1) {
    array.push(caracter);
  }
  return array;
};

console.log(geraArray(10));


// ---------------------------------------------------------
//mega-sena <3
function randomNumber (maxValue) {
  return Math.ceil(Math.random() * maxValue);
};

function generateNumber (numero) {
  let numbers = [];
  for (let index = 0; index < numero; index += 1 ){
    numbers.push(randomNumber(100));
  }
  return numbers;
};

let megaSenaNumbers = generateNumber(10);
console.log(megaSenaNumbers);