const http = require('http')
const server = http.createServer()

server.on('connection',(socket)=>{
    console.log('server is listening');
})
server.listen(3000)


console.log('listenig on 3000');