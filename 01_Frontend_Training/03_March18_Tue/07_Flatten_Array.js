function flattenArray(arr) {
    const result = []; 
    function flattenHelper(element) {
      if (Array.isArray(element)) {
        for (const item of element) {
          flattenHelper(item);
        }
      } else {
        result.push(element);
      }
    }
    flattenHelper(arr);
    return result;
  }
  
  console.log(flattenArray([1, [2, [3, [4, 5]]]])); 
  console.log(flattenArray([1, [2, [3, [4, [5, [6]]]]]])); 
  console.log(flattenArray([1, 2, 3])); 
  console.log(flattenArray([])); 