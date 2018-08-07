const http = require('http');
const fs = require('fs');

/* Lendo arquivo html pelo server
http.createServer(function(req, res) {
	fs.readFile('demofile1.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);
*/

/* Cria arquivos
fs.appendFile('mynewfile.html', 'Hello content!', function(err) {
	if(err) throw err;
	console.log('Saved!');
});
*/

/* Abre um arquivo
*/fs.open('mynewfile2.txt', 'w', function(err, file) {
	if(err) throw err;
	console.log('Saved!');
})

/*
	Outras opções de FS:
	https://www.w3schools.com/nodejs/nodejs_filesystem.asp
*/