const EventEmitter  = require('events');

//todo creating a class that extends the Built in Class
class MyEmitter extends EventEmitter{
}

//todo Init Object
const myEmitter  = new MyEmitter();

//todo Event Listener on that object
myEmitter.on('event',()=>{
    console.log('Event Fired!!');
})

//todo To Emit(Fire) a event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');