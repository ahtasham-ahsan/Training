const p1  = Promise.resolve({ id: 1}); // Returns a promise that is already resolved 
p1.then(result => console.log(result));

const p2  = Promise.reject(new Error("Reason for error")); // Returns a promise that is already rejected 
p2.catch(err => console.log(err.message));