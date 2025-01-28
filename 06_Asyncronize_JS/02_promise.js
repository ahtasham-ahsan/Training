const p1 = Promise.resolve({ id: 1 }); // Returns a promise that is already resolved
p1.then((result) => console.log(result));

const p2 = Promise.reject(new Error("Reason for error")); // Returns a promise that is already rejected
p2.catch((err) => console.log(err.message));

// Running Promises Parrallel
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Some Async Task");
    resolve(1);
  }, 1000);
});

const p4 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Some other Async Task");
    resolve(2);
  }, 3000);
});

Promise.all([p4, p3]) // returns a new promise
  .then((result) => console.log(result));

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Some other Async Task");
    reject(new Error('Error'));
  }, 3000);
});

Promise.race([p3, p4, p5])
    .then(result => console.log("Race Promise", result))