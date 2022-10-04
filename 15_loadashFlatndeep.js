
const _ = require('lodash');

const items = [1,[2,[3,[4,[5]]]]]

const item = _.flattenDeep(items)
console.log(item);