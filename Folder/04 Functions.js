var r =  function(){
    console.log("we can assign a function to a variable")
}
r()


function rr(fn){
    fn();
}
rr(function(){
    console.log("we can pass functions as an argument")
})


function rrr(){
    return function rrrr(){
        console.log("we can return functions in javascript")
    }
}

console.log(rrr())
rrr()();



// Thing to take care of when declaring fucntions
for (let index = 0; index < 5; index++) {
    function a(i){
        console.log("Initializing the function ",i, "th time.")
    }    
    a(index);
}
function r(i){
    console.log("Initialized the function only one time ");
    console.log("and executing it ",i , "th time");
}  
for (let index = 0; index < 5; index++) {  
    r(index);
}


// Higher order functions
// functions that another function as an argument or a function that returns another function is HOF


const multiplyBy = function(num1){
    return function(num2){
        return num1*num2;
    }
}

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);
console.log(multiplyByTwo(3));
console.log(multiplyByTwo(4));
console.log(multiplyByTwo(5));
console.log(multiplyByTwo(7));

console.log(multiplyByFive(4));
console.log(multiplyByFive(10));
console.log(multiplyByFive(2));
console.log(multiplyByFive(8));
console.log(multiplyByFive(7));

const multiplyByUsingArrowFunc = (num1) =>  (num2) => num1*num2;

const multiplyByTwoUsing_Arrow_Functions = multiplyByUsingArrowFunc(2);
const multiplyByFive_Using_Arrow_Functions = multiplyByUsingArrowFunc(5);
console.log(multiplyByTwoUsing_Arrow_Functions(3));
console.log(multiplyByTwoUsing_Arrow_Functions(4));


console.log(multiplyByFive_Using_Arrow_Functions(4));
console.log(multiplyByFive_Using_Arrow_Functions(10));

console.log(multiplyByUsingArrowFunc(4)(90));
