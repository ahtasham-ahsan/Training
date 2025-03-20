function runParallel(tasks, limit) {
    return new Promise((resolve) => {
      let index = 0;  // Keeps track of next task to start
      let activeCount = 0; // Number of currently running tasks
      const results = new Array(tasks.length); // Store results in correct order
  
      function runNext() {
        if (index >= tasks.length && activeCount === 0) {
          resolve(results); // All tasks are done, resolve the main Promise
          return;
        }
  
        while (activeCount < limit && index < tasks.length) {
          const taskIndex = index;
          index++;
          activeCount++;
  
          tasks[taskIndex]()
            .then((result) => {
              results[taskIndex] = result; // Store result at correct index
            })
            .finally(() => {
              activeCount--; // Mark task as done
              runNext(); // Start next task
            });
        }
      }
  
      runNext(); // Start initial batch of tasks
    });
  }
  
  // Example Usage:
  const tasks = [
    () => new Promise((res) => setTimeout(() => res("A"), 1000)),
    () => new Promise((res) => setTimeout(() => res("B"), 2000)),
    () => new Promise((res) => setTimeout(() => res("C"), 1500)),
    () => new Promise((res) => setTimeout(() => res("D"), 500)),
    () => new Promise((res) => setTimeout(() => res("E"), 3000)),
  ];
  
  runParallel(tasks, 2).then(console.log); // Expected output: ["A", "B", "C", "D", "E"]
  