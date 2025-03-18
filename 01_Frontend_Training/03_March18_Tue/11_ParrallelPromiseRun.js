function runParallel(tasks, limit) {
    return new Promise((resolve) => {
      const results = [];
      let running = 0;
      let index = 0; 
  
      function runNext() {
        if (index >= tasks.length && running === 0) {
          resolve(results);
          return;
        }

        while (running < limit && index < tasks.length) {
          const currentIndex = index; 
          const task = tasks[currentIndex]; 
  
          running++; 
          index++; 

          task()
            .then((result) => {
              results[currentIndex] = result; 
            })
            .catch((error) => {
              results[currentIndex] = error; 
            })
            .finally(() => {
              running--; 
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
  ];
  
  runParallel(tasks, 2).then(console.log);