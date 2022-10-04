const http = require('http');

const fs = require('fs');

http.createServer(function (req, res){
    // const filestream = fs.readFileSync('./demo/bigfile.txt', {encoding:'utf8'})
    const filestream = fs.createReadStream('./demo/bigfile.txt', 'utf8')
    
    // res.write(filestream);

    filestream.on('open',()=>{
        filestream.pipe(res);
    })
    // res.end()
}).listen(5000)
