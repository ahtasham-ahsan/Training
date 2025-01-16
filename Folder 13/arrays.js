// Data Structures
// How computers stores data.   
// RAM vs Storage


// Arrays or list 
const str = [
    'a', 
    'b',
    'c',
    'd'
]
// Methods in Arrays 

console.log('Indexing', str[1]);    // indexing

str.push('e')           // push
console.log('Pushing in array -->', str);

str.pop()               // Pop
console.log('Poping in array -->', str);

str.unshift('x')        // Adds at the beginning of the array
console.log('Adding at the start of the array --> ', str);

str.splice(2,0, 'Splice');
console.log('Adding to the middle --> ', str);
