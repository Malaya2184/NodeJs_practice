
function log(message){
    console.log(message);
}

// here exported a object which key is log and value is log function
// module.exports.log = log;

//here single object has exported but not inside the export object
module.exports = log;

console.log(module);