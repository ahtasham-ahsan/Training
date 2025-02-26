let a = [1, 2, 3, 4];
let b = [...a.slice(1)];

a = [...a.slice(0, 1)];

console.log("a:", a); 
console.log("b:", b); 

let c = [{ name: "abc" }];


let d = JSON.parse(JSON.stringify(c));

d[0].name = "xyz";

console.log("c:", c); 
console.log("d:", d); 


let e = [{ name: "abc" }];

let f = e.map(obj => ({ ...obj }));

f[0].name = "xyz";

console.log("e:", e); 
console.log("f:", f); 

var g = [1, 2, 3, 4];
let h;
[g, ...h] = g;

console.log("g:", [g]); 
console.log("h:", h); 

let arr = [1, 2, 3, 4];

let sum = arr.reduce((acc, num) => acc + num, 0);

console.log(sum); 

let numbers = [2, 4, 6, 8];

let allPositive = numbers.every(num => num > 0);

console.log(allPositive); 

let number1 = [2, 4, 6, 7];

let allEven = number1.every(num => num % 2 === 0);

console.log(allEven); 