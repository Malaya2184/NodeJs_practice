const logger = require('./2_node')

console.log(logger);
// logger.log('My Name is khan')

logger('My Name is khan')

console.log(__filename);
console.log(__dirname);
console.log(exports);
