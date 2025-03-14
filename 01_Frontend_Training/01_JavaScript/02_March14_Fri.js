const { name } = require("ejs");
const { func } = require("joi");

console.log("------------------ 02_March14_Fri.js ------------------");
console.log("----------< Immediately Invoked Function Expression (IIFE) >---------");
(function(){
    console.log("Hello");
})();

console.log("------------------< this KeyWord >------------------");
function a(){
    console.log(this);
}
// a(); // window
function b(){
    'use strict';
    console.log(this);
}
// b(); // undefined

const obj = {
    name: 'Billy',
    sing: function(){
        return 'lalala ' + this.name;
    },
    singAgain: function(){
        return this.sing()+ '!';
    }
}
console.log(obj.sing()); // lalala Billy
console.log(obj.singAgain()); // lalala Billy!

function importantPerson(){
    console.log(this.name1);
}
const name1 = 'Sunny';
const obj1 = {name1: 'Cassy', importantPerson: importantPerson};
const obj2 = {name1: 'Jacob', importantPerson: importantPerson};
obj1.importantPerson(); // Cassy
obj2.importantPerson(); // Jacob

console.log("------------------< call - apply - bind >------------------");
const wizard = {
    name: 'Merlin',
    health: 100,
    heal(){
        this.health = 100;
    }
}
const archer = {
    name: 'Robin Hood',
    health: 30

}
console.log(archer); // { name: 'Robin Hood', health: 30 }
wizard.heal.call(archer);
console.log(archer); // { name: 'Robin Hood', health: 100 }

const heal_Archer = wizard.heal.bind(archer);
heal_Archer();

console.log("----------------< Pass By Reference/Value >---------------------");
let obj3 = {
    name: 'Billy',
    age: 25,
    password: '12345'
}
let obj4 = obj3;
obj4.password = 'easypeasy';
console.log(obj3); // { name: 'Billy', age: 25, password: 'easypeasy' }
console.log(obj4); // { name: 'Billy', age: 25, password: 'easypeasy' }

let obj5 = Object.assign({}, obj3);
obj5.password = '12345';
console.log(obj3); // { name: 'Billy', age: 25, password: 'easypeasy' }
console.log(obj5); // { name: 'Billy', age: 25, password: '12345' }
let obj6 = {...obj3};
obj6.password='new password of obj 6';
console.log(obj3); // { name: 'Billy', age: 25, password: 'easypeasy' }
console.log(obj6); // { name: 'Billy', age: 25, password: 'new password of obj 6' }

console.log("\n----------------< Type Coercison >---------------------\n");
console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(true == '1'); // true
console.log(0 == false); // true
console.log(0 == ''); // true
console.log(false == ''); // true
console.log(null == undefined); // true
console.log(null == 0); // false
console.log(null == ''); // false
console.log(null == false); // false
console.log(null == null); // true
console.log(undefined == undefined); // true
console.log(undefined == null); // true
console.log(undefined == 0); // false
console.log(undefined == ''); // false
console.log(undefined == false); // false

console.log("\n----------------< Functions >---------------------\n");
// 1
var stuff = function(){}
// 2
function a(fn){ fn() }

a(function(){console.log('hi there')});
// 3
function b(){
    return function c(){console.log('bye')}
}
b()();

console.log("\n----------------< High Order Functions >---------------------\n");
function letadamLogin(){
    let array = [];
    for(let i=0; i<1000000; i++){
        array.push(i);
    }
    return 'Access Granted to Adam';
}
function letEvaLogin(){
    let array = [];
    for(let i=0; i<100000000; i++){
        array.push(i);
    }
    return 'Access Granted to Eva';
}
console.log(letadamLogin());
console.log(letEvaLogin());

function giveAccess(name){
    let array = [];
    for(let i=0; i<100000000; i++){
        array.push(i);
    }
    return 'Access Granted to ' + name;
}
console.log(giveAccess('Adam'));
console.log(giveAccess('Eva'));

console.log("\n----------------< Closure >---------------------\n");
function a(){
    let grandpa = 'grandpa';
    return function b(){
        let father = 'father';
        return function c(){
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`;
        }
    }
}
console.log(a()()());