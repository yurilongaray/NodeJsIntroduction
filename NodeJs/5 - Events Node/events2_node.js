let events = require('events');
let util = require('util');

let Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let mary = new Person('mary');
let ryu = new Person('ryu');
let people = [james, mary, ryu];

//For each event
people.forEach(function(person) {
    person.on('speak', function(msg) {
        console.log(person.name + ' said: ' + msg);
    });
});

//Emitting events
james.emit('speak', 'hey dudes');
ryu.emit('speak', 'i will kill you');
mary.emit('speak', 'shut up');