// Closures are 
// --> Memory Effecient 
// --> Encapsulation

function a(){
    let grandPa = 'Dada';
    return function b(){
        let father = 'Papa';
        return function c(){
            let son = 'Beta';
            return `${grandPa} is the father of ${father} and ${father}  is the father of ${son}`
        }
    }
}
console.log(a());
console.log(a()());
console.log(a()()());



const boo = (string) => (name1) => (name2) => console.log(`${string} ${name1} and ${name2}`);

console.log(boo('Hello')('Ali')('Sara'));

function MayBeCallMe(){
    const callMe = 'Hi, Please call me, I am here...';
    setTimeout(() => {
        console.log(callMe);
        
    }, 4000);

    setTimeout(() => { console.log(hello);
     }, 1000);
     const hello = 'Hello';
}
MayBeCallMe();

// Closures are memory effecients 

function heavyDuty(idx){
    const bigArray = new Array(70000).fill('🥹');
    console.log('Created');
    return bigArray[idx];
}
heavyDuty(800);
heavyDuty(821);
heavyDuty(832);

function heavyDuty2(){
    const bigArray = new Array(70000).fill('🥹');
    console.log('Created a closure and saved the memory');
    return function(idx){
        return bigArray[idx]
    }
}

const getHeavyDuty = heavyDuty2()
getHeavyDuty(122);
getHeavyDuty(211);
getHeavyDuty(322);
getHeavyDuty(433);


// Closures help us to encapsulate the data 
function initialize(){
    // called has been encapsulated 
    let called = 0;
    return function(){
        if (called==0) {
            const view = '🥳';
            console.log('View has been created', view);
            called++;
        }
        else{
            console.log('Called again that is not allowed');
            return;
        }
    }
}
const InitializeOnce = initialize()
InitializeOnce()
InitializeOnce()
InitializeOnce()
InitializeOnce()
InitializeOnce()
