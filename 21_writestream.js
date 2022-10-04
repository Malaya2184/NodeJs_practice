const {writeFileSync} = require('fs');


for (let i = 0; i < 1000; i++) {
    writeFileSync('./demo/bigfile.txt', `Hello Spider ${i}\n`, {flag: 'a'})
    
}
