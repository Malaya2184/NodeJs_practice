const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('spider is listening');
        res.end();
    }
    if(req.url === '/myapi'){
        
        res.write(JSON.stringify([
            {id: 1, name: 'malaya'},
            {id: 2, name: 'nalaya'},
            {id: 3, name: 'oalaya'},
            {id: 4, name: 'palaya'}
        ]))

        // for (let i = 0; i < 100; i++) {
        //     for (let j = 0; j < 100; j++) {
            
        //     console.log(i,j);
        //     }
            
        // }
        // res.end();
    }

}).listen(5000, ()=>{
    console.log('listening at 5000');
})