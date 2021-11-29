const os = require("os");

//info about current user
// console.log(os.userInfo());

//method return the system uptime in s
// console.log(`system uptime is ${os.uptime()} s`);

const currOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currOS);
