// Programming paradigms are how we write/organize our code 
// OOP and FP is Programming Paradigms 
const elf = {
    name: 'Orwell', 
    weapon: 'Bow', 
    attack(){
        return 'Attack with ' + elf.weapon
    }
}
console.log(elf.attack());

const elf2 = {
    name: 'Sally', 
    weapon: 'Knife', 
    attack(){
        return 'Attack with ' + elf2.weapon
    }
}
console.log(elf2.attack());

// Factory Functions 
function createElf(name, weapon){
    return {
        name: name,
        weapon: weapon,
        attack(){
            return name + ' Attack with ' + weapon
        }
    }
}

const peter = createElf('Peter', 'Stone')
console.log(peter.attack());


const sam = createElf('Sam', 'Sword')
console.log(sam.attack());


// 