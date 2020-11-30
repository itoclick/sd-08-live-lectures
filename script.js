//forEach()
const pizzas = [
  { sabor: 'Frango com Catupiry', pedidos: 99, status: '' },
  { sabor: 'Marguerita', pedidos: 75, status: '' },
  { sabor: 'Gratinada', pedidos: 68, status: '' },
  { sabor: '4 Queijos', pedidos: 80, status: '' }
];

pizzas.forEach((pizzas) => {
  if (pizzas.pedidos >= 75) {
    pizzas.status = 'TOP';
  } else {
    pizzas.status = 'Não é TOP';
  }
});

console.log(pizzas);

//--------------------------------------------------//
//outro exemplo de forEach()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiply = (ruani) => {
  const arr = [];

  ruani.forEach((xablau) => arr.push(xablau * 3));

  return arr;
};

console.log(multiply(numbers));

//--------------------------------------------------//
//some(), every(), find() e sort()

const pizzas = [
  { sabor: 'Frango com Catupiry', pedidos: 99, status: '' },
  { sabor: 'Marguerita', pedidos: 75, status: '' },
  { sabor: 'Gratinada', pedidos: 68, status: '' },
  { sabor: '4 Queijos', pedidos: 80, status: '' }
];

const sabor = pizzas.find((pizzas) => {
  return pizzas.pedidos > 60 && pizzas.pedidos < 80;
});

console.log(sabor);

//some = algum
//every = todos
//find = buscar
//sort = ordenação

//--------------------------------------------------//
//sort() com números acima de 9
const numbers = [8, 5, 4, 3, 7, 9, 10];

const comparar = (a, b) => {
  if (a < b){
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
};

numbers.sort(comparar);

console.log(numbers);

//--------------------------------------------------//
//sort() com strings
const pizzas = ['Frango com Catupiry', 'Marguerita', 'Gratinada', '4 Queijos'];

console.log(pizzas.sort());