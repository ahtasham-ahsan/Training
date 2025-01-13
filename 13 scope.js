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
