function immutable(obj) {
    if (typeof obj !== "object" || obj === null) return obj;
  
    Object.freeze(obj);
  
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        immutable(obj[key]); 
      }
    });
  
    return obj;
  }
  
  const obj = immutable({ user: { name: "Alice", details: { age: 25 } } });
  
  obj.user.name = "Bob"; 
  obj.user.details.age = 30; 
  console.log(obj.user.name);  
  console.log(obj.user.details.age);  