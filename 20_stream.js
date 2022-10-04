const {createReadStream} = require('fs')

const stream = createReadStream('./demo/demoSubfolder/file2.txt', {encoding: 'utf8'})

stream.on('data', (result)=>{
    console.log(result);
})

// to get error if there is an error during reading the file
stream.on('error', (error)=> console.log(error))