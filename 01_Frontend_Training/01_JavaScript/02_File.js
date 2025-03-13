// Arrow Functions

// Closures
const first = () => {
    const greet = 'Hello';
    const second = () => {
        const name = 'bobby';
        console.log(greet + name);
    }
    return second;
}

const newFunc = first();
newFunc();

// Currying
// Currying is the process of converting a function that takes multiple arguments into a function that takes them one at a time.
// Currying is a way of constructing functions that allows partial application of a function’s arguments.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(10));
console.log(curriedMultiply(2)(3));

