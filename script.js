const person = {
  name: 'Alvaro',
  lastName: 'Braga'
};

// console.log(`Olá querido ${person.name}!`);
// console.log(`Olá querido ${person['lastName']}!`);
// console.log(`Olá querido ${person.name} ${person.lastName}!`);

person.age = 39;
person['isBeautiful'] = true;

//console.log(person);

// const object = {};

// for (let index = 0; index < 10; index += 1) {
//   object[index] = 'XABLAU';
// }

// console.log(object);

// const array = [1, 2, 3, 4, 5];

// console.log(typeof(array));

console.log(`Existe sobrenome? ${Object.keys(person).includes('lastName')}`);
console.log(Object.values(person));
console.log(Object.entries(person));



const books = {
  collection: 'The Lord of the Rings',
  book1: 'The Fellowship',
  book2: 'Two Towers',
  book3: 'Return of the King'
}

const bookAuthor = {
  authorName: 'J. R. R. Tolkien'
}

Object.assign(books, bookAuthor);

console.log(books);

const booksClone = Object.assign({}, books);

console.log(books);