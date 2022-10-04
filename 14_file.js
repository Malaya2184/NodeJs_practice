const {readFile, writeFile} = require('fs')

// by using callbaks
readFile('./demo/demoSubfolder/file2.txt', 'utf8', (err, result)=>{
    if (err){
        console.log(err);
    }
    
    console.log(result);
    
})