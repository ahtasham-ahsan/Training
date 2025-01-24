// Signal that indicates that something has happened

// this event emitter is a class
const Event_Emitter = require('events');

// Register  a listner
emitter.on('Message_Logged', function(){
    console.log('Listener Called');
});

// Order is important

const emitter = new Event_Emitter();
// Raised an event 
emitter.emit('Message_Logged');