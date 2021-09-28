let sum = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


let subtract = require('./calculator');

test('substract 3  2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});

let multiply = require('./calculator');

test('multiply 3  2 to equal 6', () => {
  expect(multiply(3, 2)).toBe(6);
});

let division = require('./calculator');

test('divide 6  2 to equal 3', () => {
  expect(subtract(6, 2)).toBe(3);
});
