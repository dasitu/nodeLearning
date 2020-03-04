var events = require('events');

var eventEmitter = new events.EventEmitter();

var eventHandler = function(...args) {
    console.log('this is listener 1');
    var parameters = args.join(', ');
    console.log('listener 1:event received, args are:' + parameters);
    console.log('trigger event2');
    eventEmitter.emit('event2');
}

eventEmitter.on('event1', eventHandler);
eventEmitter.on('event3', eventHandler);

eventEmitter.on('event1', function(){
    console.log('listener 2:event1 received');
})

console.log('listeners count event1: ' + eventEmitter.listenerCount('event1'))
console.log('sending event1');
eventEmitter.emit('event1', '{eventName: event1}');

eventEmitter.removeAllListeners('event1');

console.log('sending event1');
eventEmitter.emit('event1', 'eventName', 'event1');

setTimeout(function(){
    console.log('sending event3');
    eventEmitter.emit('event3', 'this', 'is', 'event3');
}, 1000);

console.log('all done')