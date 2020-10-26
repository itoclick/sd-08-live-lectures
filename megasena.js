//array vazio com os números sortedos


let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

let megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let turma8Play = [4, 8, 15, 16, 23, 42];
let turma8Play2 = [10, 18, 33, 16, 1, 42];
let turma8Play3 = [11, 9, 15, 55, 23, 24];
let turma8Play4 = [11, 9, 15, 55, 23, 50];
let megaSenaGames = [turma8Play, turma8Play2, turma8Play3, turma8Play4];

for (let games = 0; games < megaSenaGames.length; games += 1) {
  let numberOfHits = 0;
  for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1){
    for (let indexPlay = 0; indexPlay < megaSenaGames[games].length; indexPlay += 1) {
      if (megaSenaNumbers[indexMega] === megaSenaGames[games][indexPlay]){
        numberOfHits += 1;
      }
    }
  }
  console.log("Jogada: " + (games + 1));
  console.log(`Mega-Sena: ${megaSenaNumbers}`);
  console.log(`Jogo: ${megaSenaGames[games]}`);
  console.log(`Total de acertos: ${numberOfHits}`);
  console.log("----------------------------------------");  
}



