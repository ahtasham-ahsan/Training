// There are the Global Objects in Javascript

// console.log();
// setTimeout(() => {
    
// }, timeout);

// clearTimeout
// setInterval(() => {
    
// }, interval);

// clearInterval


// We have global in node instead of window as in js
global.console.log('hello');
global.setTimeout(() => {
    console.log('setting timeout')
}, 3000);

var message = 'Variables declared are not added to this global, we get undefined for them';

console.log(global.message)