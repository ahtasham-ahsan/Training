const http = require('http');

const server = http.createServer(function(req, res) {
    if(req.url === '/'){
        res.write('Hello Bhai');
        res.end();
    }
    if(req.url=== '/api/something'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});
/*
server.on('connection', (socket)=>{
    console.log('New Connection');
    
});
*/
server.listen(3000); // This server is an event emitter

console.log('Listening on port 3000')