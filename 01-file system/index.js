const fs = require("fs");

// if the file read.txt is exist then it will overwrite the data. if not exists
// then it will create a new file and write the data. 
// fs.writeFileSync('read.txt',"welcome");
// fs.writeFileSync('read.txt',"welcome");

// now we want to append some data.
// fs.appendFileSync("read.txt"," \nhow are you?");

//now we want to read some file
// buffer is used to store binary data.
// const buffer_data = fs.readFileSync('read.txt');
// console.log(buffer_data)// buffer data;
// need to convert to string
// const data = buffer_data.toString();
// console.log(data);


// now we want to rename file
fs.renameSync("read.txt","readWrite.txt");


