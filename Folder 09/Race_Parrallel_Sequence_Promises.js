const promisify = (item, delay) =>
    new Promise((resolve) => 
        setTimeout(() => 
            resolve(item), delay        
    )
);


const a = ()=> promisify('a', 1000);
const b = ()=> promisify('b', 3000);
const c = ()=> promisify('c', 500);


// Process all Promises parallelly
async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises)
    return `Parallel is done ${output1}, ${output2}, ${output3}`
}

// console.log(parallel().then(console.log));

// Race Condition
// Which ever promise is returned first will be displayed
async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises)
    return `Race is done ${output1}`
}

// console.log(race().then(console.log));

// 
async function SequencePromise() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `Sequence is done ${output1}, ${output2}, ${output3}`
}
console.log(SequencePromise().then(console.log));
console.log(parallel().then(console.log));
console.log(race().then(console.log));
