function randomDice(maxSides) {
  const random = Math.random();
  return Math.round(random * maxSides);
}

test('Testando se a função foi chamada.', () => {
  randomDice = jest.fn()
    .mockReturnValueOnce(20)
    .mockReturnValueOnce(8)
    .mockReturnValueOnce(47)
    .mockReturnValueOnce(1763);
  expect(randomDice()).toBe(20);
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(1);

  expect(randomDice()).toBe(8);
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(2);

  expect(randomDice()).toBe(47);
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(3);

  expect(randomDice()).toBe(1763);
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(4);
});
