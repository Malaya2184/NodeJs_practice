const {readFileSync, writeFileSync} = require('fs')


const file = readFileSync('./demo/demoSubfolder/file.txt', 'utf8')
console.log(file);

writeFileSync('./demo/demoSubfolder/file2.txt', `${file} this is new one`, {flag: 'a'})
// console.log(readFileSync('./demo/demoSubfolder/file2.txt', 'utf8'));


