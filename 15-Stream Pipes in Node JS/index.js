// stream
const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request",(req,res)=>{
    // 1st way
    // fs.readFile("./input.txt","utf-8",(error,data)=>{
    //     if(error) return console.log(error);
    //     res.end(data.toString())
    // })

    // second way
    // now doing through streaming
    // reading from a stream
    // step 1: create readable stream
    // step 2: Handle stream events --> data,end and error 

    // const readStream = fs.createReadStream("input.txt");
    // readStream.on("data",(chunkdata)=>{
    //     res.write(chunkdata);
    // })
    // readStream.on("end",()=>{
    //     res.end();
    // })
    // readStream.on("error",(err)=>{
    //     res.end("file not found");
    //     console.log(err)
    // })

    // 3rd way
    const readStream = fs.createReadStream("input.txt");
    readStream.pipe(res);

})

server.listen(8000,"127.0.0.1")

