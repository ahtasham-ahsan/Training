// Loops in JS

const basket = [
    'apples', 'bananas', 'mangos'
]

for (let index = 0; index < basket.length; index++) {
console.log(index, basket[index]);    
}

basket.forEach(item=>{
    console.log("-- ", item);
    
})

// for of
// can iterate over strings, arrays
for(item of basket){
    console.log("*" ,item);
}
for(item of 'basket'){
    console.log(item);
}



// for in - properties
// enumarating

const detailedBasket = {
    apples:12, 
    mangos:12, 
    oranges: 100
}

for(item in detailedBasket){
    console.log("== ", item);
    
}