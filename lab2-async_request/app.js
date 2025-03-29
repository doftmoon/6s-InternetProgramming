var http = require('http')
var fs = require('fs')

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		let html = fs.readFileSync('./app.html')
		res.writeHead(200, { 'content-type': 'text/html' })
		res.end(html)
	}
	// 02-01
	if (req.url === '/html') {
		let html = fs.readFileSync('./index.html')
		res.writeHead(200, { 'content-type': 'text/html' })
		res.end(html)
	}
	// 02-02
	if (req.url === '/png') {
		let png = fs.readFileSync('./pic.png')
		res.writeHead(200, { 'content-type': 'image/png' })
		res.end(png)
	}
	// 02-03
	if (req.url === '/api/name') {
		let text = 'Babarukin Artem Dzmitrievich'
		res.writeHead(200, { 'content-type': 'text/plain' })
		res.end(text)
	}
	// 02-04
	if (req.url === '/xmlhttprequest') {
		let html = fs.readFileSync('./xmlhttprequest.html')
		res.writeHead(200, { 'content-type': 'text/html' })
		res.end(html)
	}
	// 02-05
	if (req.url === '/fetch') {
		let html = fs.readFileSync('./fetch.html')
		res.writeHead(200, { 'content-type': 'text/html' })
		res.end(html)
	}
	// 02-06
	if (req.url === '/jquery') {
		let html = fs.readFileSync('./jquery.html')
		res.writeHead(200, { 'content-type': 'text/html' })
		res.end(html)
	}
});

server.listen(5000);
