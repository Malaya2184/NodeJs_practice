const fs = require('fs');
var myDir = fs.readdir('./',(err, files)=>{
    if (err){
        console.log('error', err);
    }
    else{
        console.log('files', files);
    }
})