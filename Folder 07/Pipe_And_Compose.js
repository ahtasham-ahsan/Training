// Compose

const compose = (f, g) => (data) => f(g(data));
const Multiply_3 = (num) => num*3;
const Make_Positive = (num) => Math.abs(num);

const multipy_and_abs = compose(Multiply_3, Make_Positive)
console.log(multipy_and_abs(-5));

// pipe
// same thing
// but instead of going from right to left in taking functions like compose
// pipe goes left to right in taking the functions