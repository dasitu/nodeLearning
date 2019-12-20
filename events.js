var events = require('events');

var eventEmitter = new events.EventEmitter();

var event1Handler = function event1Handler(){
    console.log('event1 received');
    console.log('trigger event2');
    eventEmitter.emit('event2');
}

eventEmitter.on('event1', event1Handler);

eventEmitter.on('event2', function(){
    console.log('event2 received');
})

eventEmitter.emit('event1');
eventEmitter.emit('event2');

console.log('all done')