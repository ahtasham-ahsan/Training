// PROMISE.ALL NEEDS BOTH PROMISES TO BE FULFILLED
// PROMISE.ALLSETTELLED DONT CARE IF BOTH ARE NOT FULFILLED


const promise_one = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
});

const promise_two = new Promise((resolve, reject) => {
    setTimeout(reject, 3000);
});

Promise.all(
    [promise_one, promise_two]
).then(data => console.log(data)
).catch(e=>console.log('this happened --> ', e));

Promise.allSettled(
    [promise_one, promise_two]
).then(data => console.log(data)
).catch(e=>console.log('this happened --> ', e));
