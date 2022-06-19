// task
// 1: Create a folder named it sudip
// 2: create a file in it named bio.txt and data into it.
// 3: add more data into the file at the end of exiisting data.
// 4: read data without getting buffer data at first.
// 5: rename the file name to mybio.txt.
// 6: now delete both the file and the folder. 

const fs = require("fs");
// fs.mkdirSync("sudip");
// fs.writeFileSync("bio.txt","name: sudip pal");
// fs.appendFileSync("bio.txt","\nage:24");
// const data = fs.readFileSync("bio.txt","utf-8")
// console.log(data);
// fs.renameSync("bio.txt","mybio.txt");
// fs.unlinkSync("mybio.txt");
fs.rmdirSync("sudip");


