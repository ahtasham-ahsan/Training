function myAssign(target, ...sources) {
    if (target == null) {
      throw new TypeError("Cannot convert null or undefined to object");
    }
  
    let to = Object(target); 
  
    for (const source of sources) {
      if (source == null) continue;
  
      Object.keys(source).forEach(key => {
        to[key] = source[key];
      });
  
      Object.getOwnPropertySymbols(source).forEach(sym => {
        to[sym] = source[sym];
      });
    }
  
    return to; 
  }
  
  const obj1 = { a: 1 };
  const obj2 = { b: 2, [Symbol("c")]: 3 };
  
  const result = myAssign({}, obj1, obj2);
  console.log(result);
  