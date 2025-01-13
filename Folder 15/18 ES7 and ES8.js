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


// ...................................................................................................................
// ES 10 Updates
// flat
const array = [1,2,3,4,5]
console.log("Nothing happens here", array.flat());

// flats works with nested arrays
const array2 = [1, [2,3], [4,5], [6,7]];
console.log("Original Array", array2);
console.log("Flat works with this nested array", array2.flat());

const array1 = [
    [1,2, [
        3,4,[
            9,10,[
                "too much nested till here"
            ]
        ]
    ]]
]

console.log("Original Array", array1);
console.log("Flat Array", array1.flat());
console.log("Flat Array with parameters that tells how many layers to go in (By Default it is 1)", array1.flat(4));


const entryyyy = [1,,,,,,3]
console.log(entryyyy);
console.log(entryyyy.flat());

const userEmail = '        happyeagle@gmail.com';
const userEmail1 = 'danger_eagle@gmail.com       ';

console.log(userEmail.trimStart());
console.log(userEmail1.trimEnd());



// formentries
const userProfiles = [
    ['CommanderTom', 22],
    ['DerekZlander', 23], 
    ['Hansel', 44]
]


console.log(Object.fromEntries(userProfiles));
const a =Object.fromEntries(userProfiles)
console.log(a);


// try catch
try{
    bob+'hi';
}
catch(e){
    console.log('youu messed up', e);
    
}