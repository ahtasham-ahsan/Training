curried_Multiply = (a) => (b) => a*b;
curried_Multiply_3 = curried_Multiply(3);
console.log(curried_Multiply_3(4));


console.log(curried_Multiply(4)(8));


// Compose

const compose = (...functions) => input =>
    functions.reduceRight((acc, fn) => fn(acc), input);
  
  // Example usage
  const add = x => x + 2;
  const multiply = x => x * 3;
  
  const addThenMultiply = compose(multiply, add);
  console.log(addThenMultiply(5)); // Output: 21
  


const capitalize = str => str.toUpperCase();
const appendExclamation = str => `${str}!`;
const trim = str => str.trim();

const processString = compose(appendExclamation, capitalize, trim);

console.log(processString("  hello world ")); // "HELLO WORLD!"

const composee = (f,g) => (a) => f(g(a));
const sum = (num) => num+1;

console.log(composee(sum, sum)(8))
