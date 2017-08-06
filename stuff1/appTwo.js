var fs = require ('fs');

//var readMe = fs.readFileSync('readme.txt', 'utf8'); // read file
//console.log(readMe);	// output on console
fs.readFile('readme.txt', 'utf8', function(err, data){
	//console.log(data);
	fs.writeFile('writeMe2.txt', data);
	fs.readFile('writeMe2.txt', 'utf8', function(err, data){
		console.log(data);
	});
});
//fs.writeFileSync('writeMe.txt', readMe);  // create newe file with readMe content
//console.log('test');
// code 