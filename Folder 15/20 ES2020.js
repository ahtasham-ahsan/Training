
// ES 2020
// Big Int

console.log(typeof 1n);
console.log(Number.MAX_SAFE_INTEGER);

// optional chaining operator ?
let will_pokemon = {
    pikachu: {
        specie: 'Mouse Pokemon',
        height: 0.5,
        weight: 6
    }
}

let weight = will_pokemon.pikachu.weight
console.log(weight);

let andrei_pokemon = {
    raichu: {
        specie: 'Mouse Pokemon',
        height: 0.9,
        weight: 20, 
        power: 'lightening'
    }
}

if(andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight){
    let weight2 = andrei_pokemon.pikachu.weight
    console.log(weight2)
}
else{
    let weight2 = undefined
    console.log(weight2)
}
// ----- this can be done by chaining operator '?'
let weight3 = andrei_pokemon?.pikachu?.weight
console.log(weight3);

// Nulling coalesing operator ??

let power = will_pokemon?.pikachu?.power || 'no power'
console.log(power)


let power1 = will_pokemon?.pikachu?.power ?? 'no power' // used instead of or operator
console.log(power)


// Global this
// it works outside the brwoser as well