// Memory leaks
// we allocated the memory but never used the variable
const a = 1; // never used in the program

// call stack 
const one = () =>{
    const two = () =>{
        console.log('Hwllo, I am function two');
        
    }
    two();
}
one();
// function one is pushed to call stack 
// and its still in the call stack where fucntion two is pusheed to the call stack 
// fun two is ran and then it is pop from the stack 
// then ran the fun one and pop fun one from the stack as well


// Having multiple stacks means the language is multithreaded
// Synchronize means executing the program line by line

// Stack overflow is when the stack is full and when still trying to push functions in the stack 
function foo(){
    console.log('Overflow');
    foo();
}
foo()
// we get this error
// Uncaught RangeError: Maximum call stack size exceeded
