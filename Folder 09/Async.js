// Asynchronous JS
setTimeout(() => {
    console.log("first command")
}, 0);

setTimeout(() => {
    console.log("second command")
}, 0);

setTimeout(() => {
    console.log("third command")
}, 0);

console.log("Last command");

Promise.resolve('hi').then(()=>console.log('Promise at the very last'))