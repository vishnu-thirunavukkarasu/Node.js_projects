const EventEmitter=require('node:events');

const emitter= new EventEmitter();
// register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
});

emitter.emit('messageLogged');

// emit means signalling an event is happened