const fizzBuzz = require('../fizzbuzz');

describe('Prueba de la kata fizzbuzz', function() {

  test("Si le pasamos 1 tiene que devolver 1", function () {
    expect(fizzBuzz(1)).toBe(1);
  });
  
  test('Si le pasamos 3 tiene que devolver "fizz"', function () {
    expect(fizzBuzz(3)).toBe("fizz");
  });
  
  test('Si le pasamos 5 devuelve "buzz"', function () {
    expect(fizzBuzz(5)).toBe("buzz");
  });
  
  test('Si le pasamos 15 devuelve "fizzbuzz"', function () {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });
});