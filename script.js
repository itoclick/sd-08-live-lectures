function class8 (bool) {

  if (bool) {
    var x = 48; //execute como var, let e const e veja o que acontece
  }

  return x;
}

console.log(class8(true)); //undefined
console.log(class8(false)); //undefined


//------------------------------------------------//

function nomeFuncao () {
  //codigo
}

botao.addEventListener('click', () => {
//codigo
});

const nomeFuncao = (p1, p2) => {
  //codigo
}


const soma = () => console.log('Olá!');

console.log(soma(2, 8));

//Arrow Function
//1. Ela é uma função anônima
//2. Não precisamos usar a palavra chave function
//3. Ela possui uma setinha entre os parametros e as chaves
//4. Return é inplicito
//5. Quando temos uma unica linha, nao precisamo das chaves



const calcArea = (base, height) => (base * height) / 2;
console.log(calcArea(10, 5));


const splitSentence = (word) => word.split(' ');

console.log(splitSentence('Hey, Ho, Lets Go'));


const highestCount = array => {
  let hight = array[0];
  let rept = 1;
  for (let i=1; i<array.length; i += 1){
      if (array[i]>hight){
          hight = array[i];
          rept = 1;
      } else if (array[i]==hight){
           rept += 1;
      }
  }
  return rept;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


const button = document.querySelector('#btn-1');
button.addEventListener('click', () => {
//codigo aqui
});

//TEMPLATE LITERALS
//------------------------------------------------//

const message = 'Essa é a minha\n' + 'primeira mensagem.'

console.log(message);


const message = `Essa é a minha
primeira mensagem.`

console.log(message);



const to = 'Turma 8';
const value = 'R$ 17,90';

const email =
"Olá " + to + ",\n" +
"o valor da sua cobrança é" + value + ".\n" +
"Esta é uma mensagem automática.";

console.log(email);


const to = 'Turma 8';
const value = 'R$ 17,90';

const email =
`Olá ${to}, 
o valor da sua cobrança é ${value}.
Esta é uma mensagem automática.`;

console.log(email);