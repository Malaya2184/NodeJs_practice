const os = require('os')

const user = os.userInfo()

// details about users
console.log(user);

// uptime about the systems
console.log(os.uptime());

// bunch of info

const sysInfo = {
    name: os.type(),
    relese: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(sysInfo);