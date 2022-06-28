const Logger = require('./logger1')

const mylog = new Logger()

mylog.on('logMessage', (args)=>{
    console.log('this is the event raised in logger 1 mod executed in logger 2', `id is : ${args.id}, name is ${args.name}`);
})
mylog.log('My Name is khan')