// Curring
// A function that takes multiple arguments but one at a time 

const multiply = (a, b) => {a*b};
const Curried_Multipy = (a) => (b) => a*b;
const Curried_Multipy_by5 = Curried_Multipy(5);
console.log(Curried_Multipy_by5(6));


const mMultipy = function(a){
    return function(b){
        return a*b;
    }
}
const mMultipyM = mMultipy(12);
console.log(mMultipyM(12));
