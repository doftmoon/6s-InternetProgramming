var http = require('http')

const serv = http.createServer((req, res) => {
	res.writeHead(200, { 'content-type': 'text/html' })
	res.end('<h1>Hello World<h1>')
});

serv.listen(3000);
