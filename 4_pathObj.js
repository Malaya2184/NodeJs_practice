const path = require('path');
const os = require('os');
const fs = require('fs');

// parse the path to json object
var pathObj = path.parse(__filename)
console.log(pathObj);

var totalMem = os.totalmem()
var freemem = os.freemem()

// give all details of the folder included file fs.readdirsync returns an array
var myDir = fs.readdirSync('./')

console.log(totalMem/(1024*1024), freemem/(1024*1024));
console.log(myDir);