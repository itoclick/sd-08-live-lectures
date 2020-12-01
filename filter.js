const cities = [
  { state: 'AM', name: 'Manaus', region: 'N'},
  { state: 'PA', name: 'Belém', region: 'N'},
  { state: 'TO', name: 'Porto Nacional', region: 'N'},
  { state: 'MG', name: 'Nepomuceno', region: 'SE'},
  { state: 'BA', name: 'Cachoeira', region: 'NE'},
  { state: 'PR', name: 'Curitiba', region: 'S'},
  { state: 'SP', name: 'Hortolândia', region: 'SE'},
  { state: 'RN', name: 'Touros', region: 'NE'},
  { state: 'CE', name: 'Jericoacoara', region: 'NE'},
  { state: 'TO', name: 'Três Pedras', region: 'N'},
  { state: 'MG', name: 'João Pinheiro', region: 'SE'}
];

// 1. Encontre todas as cidades da região Nordeste (NE)
const citiesNE = cities.filter((city) => city.region === 'NE');
console.log('As cidades que ficam na região sudeste são: ');
console.table(citiesNE);

console.log('-------------------------------------------------------------');

// 2. Encontre todas as cidades do estado de Tocantins (TO)
const citiesTO = cities.filter((city) => city.state === 'TO');
console.log('As cidades do estado de Tocantins são: ');
console.log(citiesTO);
console.log('-------------------------------------------------------------');

// 3. Encontre todas as cidades que comecem com a letra C
const citiesC = cities.filter((city) => {
  return city.name.startsWith('C');
});
console.log('As cidades que começam com a letra C são: ');
console.log(citiesC);