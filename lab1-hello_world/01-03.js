var http = require('http')

const serv = http.createServer((req, res) => {
	req.on('data', data => {
		data += data;
		console.log('data', data);
	})
	res.writeHead(200, { 'content-type': 'text/html' })
	req.on('end', () => {
		res.end(
			'<!DOCTYPE html>' +
			'<html>' +
			'<head></head>' +
			'<body>' +
			'<h1>Req</h1>' +
			'<h2>method: ' + req.method + '</h2>' +
			'<h2>uri: ' + req.url + '</h2>' +
			'<h2>version: ' + req.httpVersion + '</h2>' +
			'<h2>headers: ' + req.rawHeaders + '</h2>' +
			'</body>' +
			'</html>'
		)
	})
});

serv.listen(3000);
