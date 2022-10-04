const path = require('path');

// give the separator
console.log(path.sep);

// join the path

const filePath = path.join('/demo', 'demoSubfolder', 'file.txt')
console.log(filePath);

// give the base name
const base = path.basename(filePath)
console.log(base);

