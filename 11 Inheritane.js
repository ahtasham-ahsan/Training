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
console.log(Sarah);
const ogre = {...Sarah}
console.log(ogre);

console.log(Sarah.__proto__);
console.log(ogre.__proto__); // we have cloned the object but ogre no longer has the access to the elf class 
// ogre.attack() not allowed 


// Inheritance
// here come the concept of Inheritance 

class Character {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }
    attack(){
        return this.name + ' Attacked with ' + this.weapon
    }
}

class Elff extends Character{
    constructor(name, age, type){
        super(name, age);
        this.type = type
    }
}
const Saraah = new Elff('Saraah', 21, 'House')
console.log(Saraah);

class Oggy extends Character{
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }
    myColor(){
        console.log('Hello I am ' + this.name + " and my color is " + this.color);
    }
}

const oggy = new Oggy('Oggy', 5, 'Blue')
oggy.myColor()