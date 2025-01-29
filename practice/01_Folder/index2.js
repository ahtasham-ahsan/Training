const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if(req.url=="/"){
        const data = fs.readFileSync('index.html')
        res.statusCode = 200;
    res.end(data.toString());
    }
    else if (req.url == "/about"){
        res.statusCode = 200;
        res.end("About Page");
    }
    else{
        res.statusCode = 404;
        res.end("Page not found");
    }

})

server.listen(port, ()=>{
    console.log(`listening to port ${port}`);
    
});