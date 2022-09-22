const Event = require('events');
const uuid = require('uuid')

console.log(uuid.v4())

class Logger extends Event {
    log(msg){
        // call event
        this.emit('message', {id: uuid.v4(), msg:msg})
    }
}

// module.exports=Logger;

const logger = new Logger();
logger.on('message', (data)=>{console.log('called listener',data)})
logger.log('Nodejs')