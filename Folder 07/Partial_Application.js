// Partial Application
// Slightly different from Curring

const multiply = (a, b, c) => {a*b*c};
const Curried_Multipy = (a) => (b) => (c) =>  a*b*c;
// console.log(Curried_Multipy(9)(8)(7));

const Partial_Multiplied_by5 = multiply.bind(null, 5)
console.log(Partial_Multiplied_by5(2,2));
