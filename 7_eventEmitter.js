const EventEmitter = require('events');

const emitter = new EventEmitter();

//it should be declaired first
emitter.on('logMessage', (eventArg)=>{
    console.log("listener called");
    console.log(eventArg.id);
    console.log(eventArg.name);
})

//then this
emitter.emit('logMessage', {id: 1, name: 'malaya'})

console.log(emitter);