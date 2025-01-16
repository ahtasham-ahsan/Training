// Error handling

console.log('Error is a constructor function', Error);
console.log('we can make a new instance of error by using new key word and passing it some message');
console.log(new Error('Mesage: Oops, fix this please'));

// throw new Error('I am throwing error');
// we can throw anything in Javascript
// throw 'throwing anything';

const my_Error = new Error('Error Properties');
console.log(my_Error.name);
console.log(my_Error.message);
console.log(my_Error.stack); // tells where error happened

function a(){
    const b = new Error('What have you done?');
    return b;
}
console.log(a());
console.log(a().stack);

// Error types
const s = new SyntaxError('Syntax Error');
console.log(s);

const r = new ReferenceError('Reference Error');
console.log(r);
