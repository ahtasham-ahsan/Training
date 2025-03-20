function createLogger(obj) {

    return new Proxy(obj, {
      get(target, prop) {

        console.log(`Reading property '${prop}'`);
        return target[prop];
      },
      set(target, prop, value) {
        console.log(`Writing property '${prop}' with value ${value}`);
        target[prop] = value; 
        return true; 
      }
    });
  }
  const user = createLogger({ name: "Alice", age: 30 });
  
  console.log(user.name); 
  user.age = 35;
  