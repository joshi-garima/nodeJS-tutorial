// Build in modules
const  os = require('os')

// info about current user
const user = os.userInfo()

// returns the system uptime in seconds
const uptime = os.uptime()
// console.log(uptime);

//currennt OS
currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(
    currentOS
);