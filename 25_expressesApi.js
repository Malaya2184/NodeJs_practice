const express = require('express');
const { filter } = require('lodash');
const people = require('./people');
const app = express();

console.log(people);

app.get('/', (req,res)=>{
     res.json(people)
}).get('/peopleApi/:id',(req,res)=>{

    console.log(req.params);
    const id = Number(req.params.id);
    var findpeople = people.find((p)=> {
        if (p.id == id)
        {
        return p} 
    })
    if(!findpeople){
        res.status(404).send('not found')
    }else{

        console.log(findpeople);
        res.json(findpeople)
    }

    
}).get('/myquery',(req,res)=>{
    console.log(req.query);
    res.send('hello');
}).get('/mysearch/query',(req,res)=>{
    let searchedPeople = []
    const {search, limit} = req.query;

    if(search){

       searchedPeople = people.filter((p)=>{
        return p.name.startsWith(search)
       })

    }
    if(limit){
        searchedPeople = searchedPeople.slice(0,limit)
    }
    res.json(searchedPeople)
})
app.listen(5000)