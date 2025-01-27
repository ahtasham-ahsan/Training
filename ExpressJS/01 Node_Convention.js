const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World');
    }
});

server.listen(5112);
console.log('listening at 5112');

// works but complex if we have to add more routes