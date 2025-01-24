const { log } = require('console');
const fs = require('fs');

// Every Function come with sync and asyncronise versions

// Syncronize Function
const files = fs.readdirSync('./');
console.log(files);


// same Function but async this time 
fs.readdir('./', function(err, files){
    if(err){
        console.log(`Error is ${err}`);
    }
    else{
        console.log(`Result is ${files}`);
    }
});

// Always prefer to use asyn methods
