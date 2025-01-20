let age: number = 10;
if(age >= 10 ){
    age += 5;
} else{
    age -= 5;
}
console.log(age);


let num: number = 123_456_780;
let str: string = 'TypeScript';
let is_Published: boolean = true;

// Any - Type
let level;

function render(doc: any){
    console.log(doc);
}

// Arrays 
let numbers = [2, 4, 5, 1, 'S'];

// Tuples
let user: [number, string] = [1, "Ahtasham"];

// Enums
// List of Related Constants

// One way is
const small = 1;
const large = 2;
const medium = 3;

// Other way of storing them using enum is 
enum Size { Small =1, Medium = 2, Larger = 3};

let my_Size: Size = Size.Medium;
console.log(my_Size);

// Functions in TypeScript
function Calculate_Tax(income: number): number{
    return income;
}