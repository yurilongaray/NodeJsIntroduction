const http = require('http');
const dt   = require('./myfirstmodule');
const url  = require('url');
const port = 3000;

const server = http.createServer(function(req, res) {
	console.log(req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hey Guys');
});

server.listen(port, '127.0.0.1');
console.log('Listening on port ' + port);

/* Criando um servidor http de forma diferente
http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(req.url); //Ex.: http://localhost:8080/teste retorna /teste
	console.log('The date and time are currently: ' + dt.myDateTime());
	res.end(); //End the response
}).listen(8080); //The Server Object listens on port 8080
*/

/* Capturando dados da URL
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	const q = url.parse(req.url, true).query;
	const txt = q.year + " " + q.month;
	res.end(txt); //Ex.: http://localhost:8080/?year=2017&month=July
}).listen(8080);
*/
