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