console.log("\n----------------------- Variables ------------------------\n")
let experience = false;

function changeExperience() {
    let experience = true;
    console.log("Inside Experience", experience);
}

changeExperience();
console.log("Outside Experience", experience); 

const DontChange = "Cant Change";
console.log(DontChange);

// Arrow Functions

console.log("\n----------------------- Closures ------------------------\n")
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

console.log("\n----------------------- Curring ------------------------\n")
// Currying is the process of converting a function that takes multiple arguments into a function that takes them one at a time.
// Currying is a way of constructing functions that allows partial application of a function’s arguments.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(10));
console.log(curriedMultiply(2)(3));

console.log("\n----------------------- Compose ------------------------\n")
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
console.log(compose(sum, sum)(5));


console.log("\n----------------------- Arrays ------------------------\n")
const arr = [1, 2, 10, 16];
const double = []
const newArray = arr.forEach((num) => {
    double.push(num * 2);
});
console.log("Doubled Array --> ", double);

// map, filter, reduce
const mapArr = arr.map((num) => num * 2);
console.log("Mapped Array --> ",mapArr);

const filterArr = arr.filter((num) => num % 2 === 0);
console.log("Filtered Array --> ",filterArr);

const reduceArr = arr.reduce((acc, num) => {
    console.log("-------------");
    console.log("--> ", acc, num);
    return acc + num
}, 0);
console.log("Reduced Array --> ", reduceArr);

console.log("\n----------------------- Objects ------------------------\n")
var obj1 = {value: 10};
var obj2 = obj1;
var obj3 = {value: 10};

console.log(obj1 === obj2);
console.log(obj1 === obj3);
obj2.value = 15;
console.log(obj1.value);
console.log(obj2.value);
console.log(obj3.value);
