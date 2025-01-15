// ES 09 Or ES 2018
// Object Spread Operator

const animal = {
    tiger: 12,
    lion: 9, 
    monkey: 13
}

const {tiger, ...rest} = animal;
console.log(tiger);
console.log(rest);


function Object_Spread(p1, p2){
    console.log(p1);
    console.log(p2);
}

Object_Spread(tiger, rest)