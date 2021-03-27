const Logger  = require('./logger');


//todo logger is kind of our custom utility class
// which will emit event using our own defined log method
// since this class is extending the event class
// we can use the ON method with the object of this logger class
const logger = new Logger();



//todo this is the event listener which is applied
logger.on('message',data=> console.log('Called Listener',data))

//todo this is firing the event using emit function inside the log method
logger.log('Hello World');
logger.log('Hi');
logger.log('Hey');