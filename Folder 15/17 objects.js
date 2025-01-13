class Player{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduction(){
        console.log(`Hi there, I am ${this.name} and I am ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type);
    }
    play(){
        console.log(`Hi bro, I am ${this.name}. Let us play the ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.introduction()
wizard2.play()
