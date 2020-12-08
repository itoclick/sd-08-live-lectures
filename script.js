const funcao1 = (callback) => {
  setTimeout(() => {
    console.log('1 - Big Mac');
    callback();
  }, Math.random() * 1000);
};

const funcao2 = () => {
  setTimeout(() => {
    console.log('2 - Big Tasty');
    console.log('FIM');
  }, Math.random() * 1000);
};

console.log('LANCHES');

funcao1(funcao2);


