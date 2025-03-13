const { object } = require("joi");

console.log("\n----------------------- Variables ------------------------\n")
let experience = false;

function changeExperience() {
    let experience = true;
    console.log("Inside Experience", experience);
}

changeExperience();
console.log("Outside Experience", experience); 

const DontChange = "Cant Change";
console.log(DontChange);

// Arrow Functions

console.log("\n----------------------- Closures ------------------------\n")
const first = () => {
    const greet = 'Hello';
    const second = () => {
        const name = 'bobby';
        console.log(greet + name);
    }
    return second;
}

const newFunc = first();
newFunc();

console.log("\n----------------------- Curring ------------------------\n")
// Currying is the process of converting a function that takes multiple arguments into a function that takes them one at a time.
// Currying is a way of constructing functions that allows partial application of a function’s arguments.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(10));
console.log(curriedMultiply(2)(3));

console.log("\n----------------------- Compose ------------------------\n")
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
console.log(compose(sum, sum)(5));


console.log("\n----------------------- Arrays ------------------------\n")
const arr = [1, 2, 10, 16];
const double = []
const newArray = arr.forEach((num) => {
    double.push(num * 2);
});
console.log("Doubled Array --> ", double);

// map, filter, reduce
const mapArr = arr.map((num) => num * 2);
console.log("Mapped Array --> ",mapArr);

const filterArr = arr.filter((num) => num % 2 === 0);
console.log("Filtered Array --> ",filterArr);

const reduceArr = arr.reduce((acc, num) => {
    console.log("-------------");
    console.log("--> ", acc, num);
    return acc + num
}, 0);
console.log("Reduced Array --> ", reduceArr);

console.log("\n----------------------- Objects ------------------------\n")
var obj1 = {value: 10};
var obj2 = obj1;
var obj3 = {value: 10};

console.log(obj1 === obj2);
console.log(obj1 === obj3);
obj2.value = 15;
console.log(obj1.value);
console.log(obj2.value);
console.log(obj3.value);
console.log("\n----------------------- Instantiation ------------------------\n")
class Player{
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type);
    }
    play(){
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.introduce();
wizard1.play();
wizard2.introduce();
wizard2.play();

console.log("\n----------------------- ES 07 ------------------------\n")
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('dog'));
console.log(pets.includes('lizard'));

const square = (x) => x**2;
const cube = (y) => y**3;   
console.log(square(2));
console.log(cube(3));

console.log("\n----------------------- ES 08 ------------------------\n")
console.log('Turtle'.padStart(10));
console.log('Turtle'.padEnd(10));

const fun = (
    a, 
    b, 
    c, 
    d,
) => {
    console.log(a);
}
fun(1,2,3,4,);


let obj  = {
    username0: "Santa",
    username1: "Rudolf",
    username2: "Mr Grinch"
}

Object.keys(obj).forEach((key, index) => {
    console.log(index+1, "--> ",key, obj[key]);
})

Object.values(obj).forEach(value => {
    console.log(" -- ", value);
});

Object.entries(obj).forEach(val =>{
    console.log(" -- ",val);
});

console.log("\n----------------------- ES 08 ------------------------\n")
const array = [1,2,3,4, [3,4,5]];
console.log(array.flat());

const entery = ['bob', 'sally', , , , , 'cindy'];
console.log(entery.flat());

const userEmail1 = "           eddytheeagle@gmail.com";
const userEmail2 = "johnDangerous@gmaill.com                                      " ;
console.log("--------------------\n",userEmail1.trimStart());
console.log(userEmail2.trimEnd());

const userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];
const obj4 = Object.fromEntries(userProfiles);
console.log("--------------------\nObject From Entries \n\n",obj4);

console.log("\n----------------------- FOR LOOP ------------------------\n")
const basket = ['apples', 'oranges', 'grapes'];
// Iterating - Over Arrays and Strings
console.log("For Of Loop");
for (item of basket){
    console.log("* ", item);
}

const detailed_Basket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}
// Enumerating over the properties of the  Objects
console.log("\nFor In Loop");
for (item in detailed_Basket){
    console.log("^ ", item);
}
