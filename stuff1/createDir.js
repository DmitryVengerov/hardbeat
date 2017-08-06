var fs = require('fs');
/*
fs.mkdir('stuff', function(){
	fs.readFile('readMe.txt', 'utf8', function(err,data){
		fs.writeFile('./stuff/writeMe.txt', data);
	});
});
*/
fs.unlink('./stuff/writeMe.txt', function(){
	fs.rmdir('stuff');
});

/*fs.unlink('writeme.txt', function () {
	console.log(' its done');
});
*/