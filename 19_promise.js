

const {readFile} = require('fs')



// imp to get it

var getData = (path)=>{
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', function (err, result) {
    
            if (err) {
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
};

getData('./demo/demoSubfolder/file2.txt').then(function (result) {
    
    console.log(result);
}).catch(function(err){
    console.log(err);
})