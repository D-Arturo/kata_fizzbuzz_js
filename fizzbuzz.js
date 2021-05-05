function fizzBuzz(param) {
  function isFizzBuzz(param) {
    return param % 15 === 0;
  }
  function isFizz(param) {
    return param % 3 === 0;
  }
  function isBuzz(param) {
    return param % 5 === 0;
  }

  if (isFizzBuzz(param)) return "fizzbuzz";

  if (isBuzz(param)) return "buzz";

  if (isFizz(param)) return "fizz";

  return param;
}

module.exports = fizzBuzz;
