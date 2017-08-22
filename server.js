
var express = require('express'),
	app     = express(),
	path    = require('path'),
	fs 		= require('fs');

var stylus = require('stylus')
var nib = require('nib')

app.set('view engine', 'ejs');

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(nib())
}

// tell node to compile.styl-files to normal css-files
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}))

app.use(express.static(__dirname + '/public'))


app.get('/', function(req, res) {
	res.render('index')
});


app.get('/profile', function(req,res) {
	var data = {
		age : 20,
		job : 'developer',
		hobbies : [
			'eating',
			'fighting',
			'fishing'
		]
	};
	res.render('profile', { 
		person : req.params.name, 
		data : data}); 
	//res.send('You are viewing the profile of '+ req.params.name );
});

app.get('/cleverstudia', function(req,res){
	res.render('cleverstudia');
});

app.listen(3000, '127.0.0.1');
//app.listen(process.env.PORT);


/*

var http = require('http');
var fs	 = require('fs');

var server = http.createServer(function(req,res){
	console.log('request was made' + req.url);
	if( req.url === '/home' || req.url === '/') {
		res.writeHead(200, {'content-type':'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if( req.url === '/contact-us') {
		res.writeHead(200, {'content-type':'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	} else if( req.url === '/api/dmitij') {
		var dmitij = [{ name: 'dmitij', age: 20},{ name: 'vengerov', age: 20}];
		res.writeHead(200, {'content-type':'application/json'});
		res.end(JSON.stringify(dmitij));
	} else if( req.url === '/profile/:id') {
		res.send('id is' + req.params.id);
		
	} else {
		res.writeHead(404, {'content-type':'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}
	
	//var meReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
	//meReadStream.pipe(res);
	//res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listen to port 3000');*/
/*
meReadStream.on('data', function(chunk){
	console.log('new chunk received:');
	myWriteStream.write(chunk);
	//console.log(chunk);
});

*/

console.log('We ready to work');