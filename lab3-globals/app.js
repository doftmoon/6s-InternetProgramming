var http = require('http')
global.state = 'norm';
global.oldState = 'norm';

http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200, { 'content-type': 'text/html' })
		res.end('<html><body><h1>' + state + '</h1></body></html>')
	}
}).listen(5000, () => { console.log("Server running at http://localhost:5000/") })

process.openStdin().on('data', (cmd) => {
	var arg = cmd.toString().trim();
	if (arg === 'norm' || arg === 'stop' || arg === 'idle' || arg === 'test') {
		oldState = state;
		state = arg;
		process.stdout.write(oldState + '--> ' + state + '\n');
	}
	else if (arg === 'exit') {
		process.exit(0);
	}
	else {
		process.stdout.write(oldState + '\n');
	}
})

