const express = require('express');

const app = express()


// to us any kind of css file we have to write this in which css files are inside ./public

// app.use(express.static(__dirname,'./public'))

app.use(express.static('./'))

app.get('/', (req, res)=>{
    // res.send('home page is listening')
    res.sendFile(path.resolve(__dirname,'./index.html'))
}).get('/about',(req,res)=>{
    res.send('this is about page')
}).all('/about/*',(req,res)=>{
    res.status(404).send('<h1>Status not found</h1>')
}).listen(5000,()=>{
    console.log('app is listening');
})

// app.listen(5000, ()=>{
//     console.log('listening on 5000')
// })


//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen