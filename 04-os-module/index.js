//os module
const os = require("os");

// architecture
console.log(os.arch());

// free space (in bytes) ram
const freespace = os.freemem();
console.log(freespace);
// let convert in GB
console.log (`${freespace / 1024/ 1024/1024}`);


// total memory in ram 
const totalspace = os.totalmem();
console.log(`${totalspace/1024/1024/1024}`);

// host name
console.log(os.hostname());
//platform
console.log(os.platform());

//windows type
console.log(os.type());

