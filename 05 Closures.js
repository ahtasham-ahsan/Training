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