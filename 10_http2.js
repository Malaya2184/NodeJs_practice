const http = require('http');

// const server = http.createServer(function (req, res){
//     if(req.url === '/'){
//         res.write('spider is listening');
//         res.end();
//     }

// })

// server.listen(3000)


// it can be written as follows
const server = http.createServer(function (req, res){
    if(req.url === '/spider'){
        res.write('spider is listening');
        res.end();
    }
    if(req.url === '/api'){
        res.write(JSON.stringify([
            {id: 1, name: 'malaya'},
            {id: 2, name: 'nalaya'},
            {id: 3, name: 'oalaya'},
            {id: 4, name: 'palaya'}
        ]))
        res.end();
    }

}).listen(3000)
console.log('listenig at 3000');