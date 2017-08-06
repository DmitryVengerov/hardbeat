
var http = require('http');
var url  = require('url');

//var dt   = require('./myfirstmodel');
http.createServer( function( reg, res){
	res.writeHead( 200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.mounth;
	res.write('Hello world! Its my first node.js app!'); // write on client
	res.end(txt); // end the response

}).listen(8080); // the server object listens on port 8080



