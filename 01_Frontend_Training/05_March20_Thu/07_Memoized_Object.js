class MemoizedObject {
    constructor() {
      this.cache = new Map(); 
    }
  
    compute(key, fn, ...args) {
      const argsKey = JSON.stringify(args); 
  
      if (!this.cache.has(key)) {
        this.cache.set(key, new Map()); 
      }
  
      if (this.cache.get(key).has(argsKey)) {
        console.log(`Fetching from cache: ${key}(${argsKey})`);
        return this.cache.get(key).get(argsKey);
      }
  
      console.log(`Computing result for: ${key}(${argsKey})`);
      const result = fn(...args); 
      this.cache.get(key).set(argsKey, result); 
      return result;
    }
  }
  
  const obj = new MemoizedObject();
  
  console.log(obj.compute("add", (a, b) => a + b, 2, 3)); 
  console.log(obj.compute("add", (a, b) => a + b, 2, 3)); 
  console.log(obj.compute("multiply", (a, b) => a * b, 3, 4)); 
  console.log(obj.compute("multiply", (a, b) => a * b, 3, 4)); 
  