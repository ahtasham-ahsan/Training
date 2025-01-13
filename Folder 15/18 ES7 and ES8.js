// ES 7 included the 'includes', 'exponentional operator'

console.log('hello'.includes('o'));

const pets = ['bats', 'tigers', 'lion', 'hamster'];
console.log(pets.includes('tiger'));

// Exponentional Operator
const square = num => num ** 2;
console.log(square(4));


// .....................................................................................................................
// ES8 Updates
// padstart
// padend

console.log('turtle'.padStart(50));
console.log('turtle'.padEnd(50));

// Ending Comma
const fun = (a,b,c,) =>{
    console.log(a, b, c);
}

fun(1,23,4,)

// Object.values
// Object.entries

let obj = {
    username0: 'Santa',
    username1: 'Shany',
    username2: 'Shimla'
}

Object.keys(obj).forEach((key, index) => {
    console.log(index, key, obj[key]);
    
})


Object.values(obj).forEach(value => console.log('values are ', value))

Object.entries(obj).forEach((e)=>{
    console.log(e);
})


