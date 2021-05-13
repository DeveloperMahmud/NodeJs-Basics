const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log('server is running...')

    if(req.url ==='/favicon.ico') return;
    console.log(req.url);

    const myUrl = new URL (req.url, 'http://localhost:8080/');

    console.log(myUrl);
    console.log(myUrl.pathname);
    console.log(myUrl.searchParams.get('id'));
    console.log(myUrl.searchParams.get('catagory'));
    res.writeHead(200, {'content-type':'text/html'})
    res.end('<h1>Hello Candle</h1>')
});
server.listen(8080);