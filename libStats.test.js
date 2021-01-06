const libStats = require('./libStats');

// //jest.mock
// jest.mock('./libStats');

// test('Testa a função saúde, quantidade de vezes, parâmetros e retornos.', () => {
//   libStats.saude.mockImplementation((num) => num * 8);
//   libStats.saude(5);

//   expect(libStats.saude).toHaveBeenCalled();
//   expect(libStats.saude).toHaveBeenCalledTimes(1);
//   expect(libStats.saude).toHaveBeenCalledWith(5);
//   expect(libStats.saude(5)).toBe(40);
// });








//spyOn
test('(spyOn)Testa a função, quantidade de vezes, parâmetros e retornos.', () => {
  const spyDestreza = jest.spyOn(libStats, 'destreza');

  spyDestreza(5);

  expect(spyDestreza).toHaveBeenCalled();
  expect(spyDestreza).toHaveBeenCalledTimes(1);
  expect(spyDestreza).toHaveBeenCalledWith(5);
  expect(spyDestreza(5)).toBe(10);  
  expect(spyDestreza).toHaveBeenCalledTimes(2);
});








//Outras coisas legais do spyOn
test('(SpyOn) mockImplementation e mockRestore', () => {
  //implementação original e sem mock
  expect(libStats.saude(5)).toBe(60);

  //implementação mockada
  let spySaude = jest.spyOn(libStats, 'saude')
    .mockImplementation((num1, num2) => num1 + num2);

  expect(spySaude(8, 3)).toBe(11);
  expect(spySaude).toHaveBeenCalled();
  expect(spySaude).toHaveBeenCalledTimes(1);
  expect(spySaude).toHaveBeenCalledWith(8, 3);

  // retorno a função original
  spySaude.mockRestore();
  spySaude = jest.spyOn(libStats, 'saude');
  expect(spySaude(5)).toBe(60);
  expect(spySaude).toHaveBeenCalledWith(5);
  expect(spySaude).toHaveBeenCalledTimes(1);
});

