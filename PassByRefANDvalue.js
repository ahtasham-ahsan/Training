// PASS BY REFERENCE AND PASS BY VALUES
var a = 5;
var b = a;

b++;
console.log(a);
console.log(b);

var c = [1, 2, 3, 4];
var d = c;
var e = [].concat(c);
e.push(211212);
d.push(12);
console.log(c);
console.log(d);
console.log(e);

var obj = {
  nam: "Ali",
  passward: "alikapass",
};

var obj1 = obj;

obj1.passward = "badal diya";

let obj2 = Object.assign({}, obj);
obj2.passward = "obj2kapass";
console.log(obj2);

console.log(obj);
console.log(obj1);

let anotherWayOfCloningObj = { ...obj };
anotherWayOfCloningObj.passward = "password";
console.log(anotherWayOfCloningObj);

let obje = {
    a: "a", 
    b: "b", 
    c: {
        deep: "try copy me"
    }
};

let deepClone = JSON.parse(JSON.stringify(obje));
deepClone.c = "hlp";
let shallowClone = {...obje};
shallowClone.c = "aljdlk";
console.log("Original Object", obje);
console.log("Deep Clone", deepClone);
console.log("ShallowClone", shallowClone); 