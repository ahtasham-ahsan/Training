// HOF 
// High order functions are the functions that takes functions as a parameter or retrun functions

const hof = () => () => { console.log(5)}
console.log(hof()());

const hof1 = (fn) => fn(5);
console.log(hof1(function a(x){return x}));


// Closures
const Closures = function(){
    let count = 0;
    return function increment(){
        count++;
        return count;
    }
}
console.log(Closures());
let incrementFN = Closures();
console.log(incrementFN());
console.log(incrementFN());
console.log(incrementFN());
console.log(incrementFN());
