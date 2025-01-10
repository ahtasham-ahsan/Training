// Classes in JS
class elf {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }
    attack (){
        return this.name + ' Attacked with ' + this.weapon
    }
}

const Sarah = new elf('Sarah', 'Sandals')
console.log(Sarah.attack());

// instance happens when we call the class and creates an object out of the class
// sarah is an instance of the class elf

console.log(Sarah instanceof elf);
