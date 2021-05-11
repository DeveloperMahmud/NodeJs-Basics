const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('server is running...');

    res.writeHead(200, {'Content-type' : 'text/html'})
    res.end('<h1>hello worlds!ddos...</h1> ');
})

server.listen(3000);