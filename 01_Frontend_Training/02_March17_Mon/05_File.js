// Non Mutating Array Methods

// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const wordCount = words.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
// }, {});
// console.log(wordCount); 
// { apple: 3, banana: 2, orange: 1 }


// let arr = [40,30, 35, 80, 100, 20, 10, 5, 3,221, 2, 1, 223,332, 123];
// let largestNumber = arr.reduce((acc, num) => {
//     return acc > num ? acc : num;
// }, arr[0]);
// console.log(largestNumber);

// const dates = ["2025-03-17T12:00:00Z", "2024-06-10T08:30:00Z"];
// const formattedDates = dates.map(date => new Date(date).toISOString().split("T")[0]);
// console.log(formattedDates); // ["2025-03-17", "2024-06-10"]

// const obj = [ {
//     id: 1, name: "Alice", age: 25
// }, 
// {
//     id: 2, name: "Bob", age: 30
// }, 
// {
//     id: 3, name: "Charlie", age: 35
// }, 
// {
//     id: 4, name: "David", age: 40
// }
// ]
// const names = obj.map(person => person.name);
// console.log(names);
// const ages = obj.map(person => person.age);
// console.log(ages);

// const arr = [1, 2, 3, 4];
// const newArr = arr.map( num => num * 2);
// console.log(arr, "---> ", newArr);


// // Mutating Array Methods
// const arr = [1, 2, 3, 4];
// console.log(arr, "---> ", arr.push(3));
// console.log(arr, "---> ", arr.pop());
// console.log(arr, "---> ", arr.pop());
// console.log(arr, "---> ", arr.pop());
// console.log(arr, "---> ", arr.pop());
// console.log(arr, "---> ", arr.pop());

// const queue = ['john', 'alice', 'bob'];
// console.log(queue, "---> ", queue.shift());
// console.log(queue, "---> ", queue.unshift('jane'));

// const fruits = ['apple', 'banana', 'orange'];
// console.log(fruits, "---> ", fruits.splice(1, 0, 'mango', 'grapes'));

// let numbers = [5, 2, 9, 1, 4];
// numbers.sort((a, b) => {
//     console.log(a, b);
//     return a - b;
// });
// console.log(numbers); // [1, 2, 4, 5, 9]
// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.splice(1,1)
// fruits.unshift("Grapes");
// fruits.push("Orange");
// fruits.reverse();
// console.log(fruits);


// const obj1 = { name: "Alice", show() { console.log(this.name); } };
// const obj2 = { name: "Bob" };
// obj1.show.apply(obj2); // "Bob"


// class Car {
//     constructor(model) {
//         this.model = model;
//     }
//     show() {
//         setTimeout(() => {
//             console.log(this.model);
//         }, 1000);
//     }
// }
// new Car("Tesla").show();


// const obj = {
//     name: "John",
//     greet: function() {
//         setTimeout(() => {
//             console.log("Hello, " + this.name);
//         }, 1000);
//     }
// };
// obj.greet();


// function Person(name) {
//     this.name = name;
//     this.getName = () => console.log(this.name);
// }
// const person = new Person("Alice");
// person.getName();


// const obj = {
//     value: 10,
//     getValue() { console.log(this.value)
// }};
// obj.getValue();
