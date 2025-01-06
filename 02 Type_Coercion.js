console.log(1 == "1");
console.log(" 1 == '1' ",1 == "1", "Javascript converts this string type to integer type and then compares it. Its similar as comparing 1 == 1 ", 1 == 1);
console.log(" 1 === '1' ",1 === "1", " Javascript doesnot convert this string type to integer type and then compares it. It compares the data along with the type of the data");


console.log("In JS, 1 means True and 0 means false");

if(1){
    console.log("Its true");
}

if(0){
    console.log("Nothing gonna print in this case")
}

console.log("In JS pos zero and neg zero are two different things ",Object.is(-0, +0));

console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));