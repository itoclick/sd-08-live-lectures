const numbers = [1, 2, 3, 4];

//FIND

// const find = (array, callback) => {
//   for (let index = 0; index < array.length; index += 1) {
//     if (callback(array[index], index, array)) {
//       return array[index];
//     }
//   }
//   return null;
// }
// console.log(find(numbers, (number) => number === 2));

//---------------------------------------------------------//
//FILTER

// const filter = (array, callback) => {
//   let newArray = [];
//   for (let index = 0; index < array.length; index += 1) {
//     if (callback(array[index], index, array)) {
//       newArray.push(array[index]);
//     }
//   }
//   return newArray;
// }

// console.log(filter(numbers, (number) => number <= 2));

//---------------------------------------------------------//
//MAP

// const map = (array, callback) => {
//   let newArray = [];
//   for (let index = 0; index < array.length; index += 1) {
//     const mappedItem = callback(array[index], index, array);
//     newArray.push(mappedItem);
//   }
//   return newArray;
// }

// console.log(map(numbers, (number) => number * 2));


//---------------------------------------------------------//
//REDUCE

const reduce = (array, callback, initialValue) => {
  let acc, index;
  if (initialValue != undefined) {
    index = 0;
    acc = initialValue;
  } else {
    index = 1;
    acc = array[0];
  }
  for (; index < array.length; index += 1) {
    acc = callback(acc, array[index], index, array);
  }
  return acc;
}

console.log(reduce(numbers, (total, number) => total + number));