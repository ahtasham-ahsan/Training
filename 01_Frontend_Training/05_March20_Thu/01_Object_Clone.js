const obj1 = { name: "Alice", details: { age: 25 } };
const obj2 = structuredClone(obj1); 

obj2.details.age = 30;

console.log(obj1.details.age); 
console.log(obj2.details.age); 

function deepClone(obj) {

    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (obj instanceof Date) {
      return new Date(obj.getTime());
    }

    if (obj instanceof RegExp) {
      return new RegExp(obj);
    }
  
    if (Array.isArray(obj)) {
      const arrCopy = [];
      for (let i = 0; i < obj.length; i++) {
        arrCopy[i] = deepClone(obj[i]);
      }
      return arrCopy;
    }
  
    const objCopy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        objCopy[key] = deepClone(obj[key]);
      }
    }
  
    return objCopy;
  }
  
  const obj = { 
    a: 1, 
    b: { c: 2 }, 
    d: new Date(), 
    e: /regex/, 
    f: [1, 2, 3], 
    g: function() { console.log('hello'); } 
  };
  
  const clonedObj = deepClone(obj);
  console.log(clonedObj);
