let dragon = {
    Dname: 'Tanya', 
    fire: true, 
    fight(){
        let f=5;
        console.log(f);
        
    },
    Sing(){
        if(this.fire){
            console.log(`Hey, My name is ${this.Dname} and i am fire`);
            
        }
    }
}

let lizard = {
    Dname: 'Kiki', 
    fire: false
};

lizard.__proto__ = dragon;
lizard.Sing()
console.log(lizard.Dname);
lizard.fight()
console.log(lizard.fire);
