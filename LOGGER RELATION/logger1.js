const Eventemitter = require('events');

class Logger extends Eventemitter{

    log(message){
        console.log(' logger 1 module -->message loged from function: ', message);

        this.emit('logMessage',{id: 10, name: 'Malaya'})
    }
}

module.exports = Logger;