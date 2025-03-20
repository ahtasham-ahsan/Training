function flattenObject(obj, prefix = "", result = {}) {
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        flattenObject(obj[key], prefix + key + ".", result); 
      } else {
        result[prefix + key] = obj[key];
      }
    }
    return result;
  }
  const obj = { a: { b: { c: 10, f: 2 }, d: 20 }, e: 30 };
  console.log(flattenObject(obj));
  
  function unflattenObject(flatObj) {
    let result = {};
  
    for (let key in flatObj) {
      let keys = key.split(".");
      let current = result;
  
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = flatObj[key]; 
    }
    
    return result;
  }

  const flatObj = { "a.b.c": 10, "a.d": 20, "e": 30 };
  console.log(unflattenObject(flatObj));  
