const os = require('os');

var total_Memory = os.totalmem();
var free_Memory = os.freemem();

console.log(`Total Memory: ${total_Memory} and Free Memory is ${free_Memory}`);
