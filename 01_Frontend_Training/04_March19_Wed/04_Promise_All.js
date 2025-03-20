function runParallel(tasks, limit) {
    return new Promise((resolve) => {
      let index = 0; 
      let activeCount = 0; 
      const results = new Array(tasks.length); 
  
      function runNext() {
        if (index >= tasks.length && activeCount === 0) {
          resolve(results); 
          return;
        }
  
        while (activeCount < limit && index < tasks.length) {
          const taskIndex = index;
          index++;
          activeCount++;
  
          tasks[taskIndex]()
            .then((result) => {
              results[taskIndex] = result;
            })
            .finally(() => {
              activeCount--; 
              runNext(); 
            });
        }
      }
  
      runNext(); 
    });
  }
  
  const tasks = [
    () => new Promise((res) => setTimeout(() => res("A"), 1000)),
    () => new Promise((res) => setTimeout(() => res("B"), 2000)),
    () => new Promise((res) => setTimeout(() => res("C"), 1500)),
    () => new Promise((res) => setTimeout(() => res("D"), 500)),
    () => new Promise((res) => setTimeout(() => res("E"), 3000)),
  ];
  
  runParallel(tasks, 2).then(console.log); 
  