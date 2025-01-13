// invoking a funciton
function one(){
    return "one";
}
console.log(one())

// callling functions as methods

let obj = {
    two: function(){
        return "two"
    }
}

console.log(obj.two())


let obj1 = {
    three(){
        return "three"
    }
}

console.log(obj1.three())


function four(){
    return "four";
}

console.log(four.call())

const five = new Function('return 5') // this is called  a fuction constructor...
console.log(five());

const six = new Function('num', 'return num') // giving params to the constructor function
console.log(six(6));

const six1 = new Function('num', 'num = num +1; num = num/(num-3); return num') // giving params to the constructor function
console.log(six1(6));