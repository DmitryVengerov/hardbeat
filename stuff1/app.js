//var time = 0;
/*
setInterval( function (){
	time += 2;
	console.log(time + 'seconds');
}, 2000);
*/
/*
var timer = setInterval( function (){
	time += 2;
	console.log(time + 'seconds');
	if( time > 5) {
		clearInterval(timer);
	}
}, 2000);
*/
//console.log(__dirname); // указывает директорию файла
//console.log(__filename);// указывает имя файла
/*
function sayHi() {
	console.log('hi');
}

function getData() {
	return Data();
}

var sayBye = function() {
	console.log('bye');
};

function callFunction( fun ){
	fun();
}
*/
//sayHi();
//getData();
//sayBye();
//callFunction(sayBye);
/*var stuff = require('./stuff'); // call the function from the other file
console.log(stuff.counter(['shaun', 'srystal', 'ryu']));
console.log(stuff.adder(1,2));
console.log(stuff.adder(stuff.pi, 5));
*/

var events = require ('events');
var util   = require ('util');

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james'),
	marry = new Person('marry'),
	ryu   = new Person('ryu');
	
var people = [james, marry, ryu];

people.forEach( function (person){
	person.on('speak', function(mssg){
		console.log(person.name + ' said: ' + mssg);
	});
});

james.emit( 'speak', 'hi');
marry.emit( 'speak', 'hello');
ryu.emit('speak', 'i dont care');

/*
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
	console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was emitted');
*/


