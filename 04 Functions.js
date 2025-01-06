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