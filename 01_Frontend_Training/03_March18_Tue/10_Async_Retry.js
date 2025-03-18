async function retryAsync(fn, retries) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const result = await fn(); 
        return result; 
      } catch (error) {
        if (attempt === retries) {
          throw error; 
        }
        console.log(`Attempt ${attempt} failed. Retrying...`);
      }
    }
  }
  const unstableFunction = async () => {
    if (Math.random() < 0.7) throw new Error("Failed");
    return "Success";
  };
  
  retryAsync(unstableFunction, 3)
    .then(console.log) 
    .catch(console.error);
