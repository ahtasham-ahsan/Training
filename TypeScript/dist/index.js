"use strict";
var age = 10;
if (age >= 10) {
    age += 5;
}
else {
    age -= 5;
}
console.log(age);
var num = 123456780;
var str = 'TypeScript';
var is_Published = true;
// Any - Type
var level;
function render(doc) {
    console.log(doc);
}
// Arrays 
var numbers = [2, 4, 5, 1, 'S'];
// Tuples
var user = [1, "Ahtasham"];
// Enums
// List of Related Constants
// One way is
var small = 1;
var large = 2;
var medium = 3;
// Other way of storing them using enum is 
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Larger"] = 3] = "Larger";
})(Size || (Size = {}));
;
var my_Size = Size.Medium;
console.log(my_Size);
// Functions in TypeScript
function Calculate_Tax(income) {
    return income;
}
// Objects in TS
var user1 = { id: 1 };
user1.name = 'Ahtasham';
var user2 = {
    name: 'Ahtasham',
    id: 1080,
    happy: true
};
// Narrowing Type
function Calculate_Weight(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
//# sourceMappingURL=index.js.map