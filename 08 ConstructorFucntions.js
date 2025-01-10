// Constructor functions
function elff(name, weapon){
    this.name = name
    this.weapon = weapon
}

const ppeter = new elff('Peter', 'Stones');

console.log(ppeter.name);


const elf1 = new Function('name', 'weapon', `
    this.name = name
    this.weapon = weapon
    `)
elf1.prototype.attack = function(){
    return this.name + " Attacked with " + this.weapon
}
const sara = new elf1('Sara', 'Fire')
console.log(sara.attack());
