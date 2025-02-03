// _id: 67a0b39d3ec0e6f88f0f2dd0

// 12 bytes
// 4 bytes: timestamp
// 3 bytes: machine identifier
// 2 bytes: process identifier
// 3 bytes: counter

// 1 byte = 8 bits
// 1 byte = 2 hex characters

// Driver --> MongoDB
//  MongoDB driver generates the ObjectID

const mongoose = require("mongoose");

const id = new mongoose.Types.ObjectId();
console.log(id);
console.log(id.getTimestamp());

const is_Valid = mongoose.Types.ObjectId.isValid("1234");
console.log(is_Valid);
