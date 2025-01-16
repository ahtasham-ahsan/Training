// Extending Errors
class authentication_Error extends Error {
    constructor(message) {
        super(message);
        this.name = 'Authentication Error';
        this.some_silly_thing = 'I am doing some silly thing';
    }
}

// throw new authentication_Error('Oops'); 
const a = new authentication_Error('A');
console.log(a.name);
console.log(a.some_silly_thing);
