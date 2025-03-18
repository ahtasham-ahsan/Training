function promiseAll(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Input must be an array of promises"));
      }
  
      const results = []; 
      let completedPromises = 0; 

      if (promises.length === 0) {
        return resolve(results);
      }
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((result) => {
            results[index] = result; 
            completedPromises++;
  
            if (completedPromises === promises.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  }
  
  const p1 = Promise.resolve(1);
  const p2 = Promise.resolve(2);
  const p3 = Promise.reject("Error");
  
  promiseAll([p1, p2, p3])
    .then((results) => console.log(results)) 
    .catch((error) => console.error(error)); 
  
  promiseAll([p1, p2])
    .then((results) => console.log(results)) 
    .catch((error) => console.error(error));
