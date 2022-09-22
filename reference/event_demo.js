const Event = require("events")

// create class
 
class MyEmitter extends Event {}

//init object
const myEmitter = new MyEmitter();


//Event listener
myEmitter.on('event',()=>console.log('Event Fired'))

//Init event
myEmitter.emit('event');
myEmitter.emit('event');
