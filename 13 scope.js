var scope = 'Global';
function scoop(){
    var scope = 'Scoop wala scope'
    console.log(scope);
}

function scoop2(){
    var scope = "Scoop 2 wala scope";
    console.log(scope);
}
function scoop3(){
    scope = "Scoop 3";
    console.log(scope);
}

console.log(scope);
scoop();
scoop2();
scoop3();
console.log("Modified the Global variable to ... ", scope);


let level = 100
let name = 'Sarah'

if(level > 90){
    let name = 'Boby';
    console.log('insider name ', name);
}
console.log('outsider name', name);

var varName='Sarah'

if(level > 90){
    var varName = 'Boby';
    console.log('insider Var name ', varName);
}
console.log('outsider var name', varName);


const obj = {
    name: 'Ali',
    level: 20, 
    experience: false
}
console.log("we cant reassign to a const value but we can reassign to the constant properties");
console.log("obj = {anything} is not allowed");

console.log(obj);
obj.experience = true;
console.log(obj);


// destructering an object
const cName = obj.name;
const cLevel = obj.level
const cExperience = obj.experience;

const {ObjName, ObjLevel, ObjExperience} = obj; // same as the above lines
