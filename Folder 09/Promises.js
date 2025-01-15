// Promises
// Produces some output in the future
// Can be in three states - fulfilled - pending - rejected
// Promises were added in ES 6
// Before promises we had to use call backs
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked');
    }
    else{
        reject('Error hai bhai error');
    }
});

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hii I am promise 01')
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Hii I am promise 02')
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 10000, 'Hii I am promise 03')
});


promise
    .then(results => {
        // throw Error;
        return results + '!'
    })
    .then(result1 => {
        // throw Error;
        console.log('--> ', result1)
    })
    .catch(() => {
        console.log('Error arrised')
    });


Promise.all([
    promise1, 
    promise2, 
    promise3, 
    promise 
]).then((values) =>{
    console.log(values);
});