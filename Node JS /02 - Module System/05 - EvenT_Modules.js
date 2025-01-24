// Signal that indicates that something has happened

// this event emitter is a class
const Event_Emitter = require('events');
const emitter = new Event_Emitter();

// Register  a listner
emitter.on('Message_Logged', function(args){
    console.log('Listener Called', args);
});

// Order is important

// Raised an event 
emitter.emit('Message_Logged', {
    id: 1, 
    message: 'Passing arguments in an object'
});