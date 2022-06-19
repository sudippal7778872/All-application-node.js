// Async function in fs

// all are same only the the difference is at the end we have pass callback fynction.
 const fs = require("fs");
// write file
// fs.writeFile("write.txt","very good evening",(error)=>{
//     console.log("file created")
//     console.log(error);
// });

// apart from call back all rae same.

// read data
fs.readFile("write.txt","utf-8",(error,data)=>{
    console.log(data);
    console.log(error);
})



