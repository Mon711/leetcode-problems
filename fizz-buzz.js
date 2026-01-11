/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let i = 1;
  const answer = [];
  while (i <= n) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else {
      answer.push(`${i}`);
    }

    i++;
  }

  return answer
};

console.log(fizzBuzz(15));

