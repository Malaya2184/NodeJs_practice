const express = require('express');
const people = require('./people');
const app = express();

console.log(people);

app.get('/', (req,res)=>{
     res.json(people)
})
app.listen(5000)