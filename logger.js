const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter{
    log(msg)
    {
        //todo Note message is the name of the
        // Event that is emitted
        this.emit('message',{id: uuid.v4(), msg:msg});
    }
}

module.exports = Logger;