const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('User hit the server');
    res.end('Home Page');
});

server.listen(5000);