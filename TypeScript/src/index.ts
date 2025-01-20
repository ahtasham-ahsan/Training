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


// Objects in TS
let user1: {
    readonly id: number, // Cannot be Modified later in the code;
    name?: string, 
    retire?: (date : Date) => void // Method that is returning void
} = { id : 1};

user1.name = 'Ahtasham'

// Type Aliases
// Declaring A Custom Data Type

type Employee = {
    name: string, 
    id: number, 
    happy: boolean
}

let user2 : Employee = {
    name: 'Ahtasham', 
    id: 1080, 
    happy: true
}

// Narrowing Type
function Calculate_Weight(weight: number | string){
    if(typeof weight === 'number'){
        return weight*2.2;
    }
    else{
        return parseInt(weight)*2.2;
    }
}